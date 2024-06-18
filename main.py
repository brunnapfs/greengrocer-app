from typing import List

from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.responses import HTMLResponse

app = FastAPI()

html = """
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>WebSocket Chat</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f2f2f2;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
    }

    .chat-container {
      max-width: 600px;
      width: 100%;
      border: 1px solid #ddd;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      overflow: hidden;
      background-color: #fff;
    }

    .chat-header {
      background-color: #4CAF50;
      color: white;
      padding: 10px;
      text-align: center;
      margin: 0;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }

    .chat-body {
      padding: 10px;
      overflow-y: auto;
      height: 300px;
    }

    .chat-body ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .message {
      padding: 10px;
      border-radius: 5px;
      margin-bottom: 10px;
      max-width: 80%;
    }

    .message.client {
      background-color: #d1e7dd;
      margin-left: auto;
      text-align: right;
    }

    .message.server {
      background-color: #f8d7da;
    }

    .chat-input {
      display: flex;
      padding: 10px;
      background: #f2f2f2;
      border-top: 1px solid #ddd;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
    }

    .input-message {
      flex: 1;
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 5px;
      margin-right: 10px;
      font-size: 14px;
    }

    .btn-send {
      padding: 10px 15px;
      background-color: #4CAF50;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .btn-send:hover {
      background-color: #45a049;
    }
  </style>
</head>
<body>
  <div class="chat-container">
    <h1 class="chat-header">GreenGrocer Chat</h1>
    <h2>Your ID: <span id="ws-id"></span></h2>
    <form id="sendMessageForm" onsubmit="sendMessage(event)" class="chat-input">
      <input type="text" id="messageText" autocomplete="off" class="input-message"/>
      <button type="submit" class="btn-send">Send</button>
    </form>
    <div class="chat-body">
      <ul id="messages"></ul>
    </div>
  </div>

  <script>
    var clientId = Date.now();
    document.getElementById('ws-id').textContent = clientId;
    var ws = new WebSocket(`ws://localhost:8000/ws/${clientId}`);
    ws.onmessage = function(event) {
      var messages = document.getElementById('messages');
      var message = document.createElement('li');
      var content = document.createTextNode(event.data);
      message.appendChild(content);
      messages.appendChild(message);
      messages.scrollTop = messages.scrollHeight; // Auto scroll to bottom
    };

    function sendMessage(event) {
      event.preventDefault();
      var input = document.getElementById('messageText');
      ws.send(input.value);
      input.value = '';
    }
  </script>
</body>
</html>

"""


class ConnectionManager:
    def __init__(self):
        self.active_connections: List[WebSocket] = []

    async def connect(self, websocket: WebSocket):
        await websocket.accept()
        self.active_connections.append(websocket)

    def disconnect(self, websocket: WebSocket):
        self.active_connections.remove(websocket)

    async def send_personal_message(self, message: str, websocket: WebSocket):
        await websocket.send_text(message)

    async def broadcast(self, message: str):
        for connection in self.active_connections:
            await connection.send_text(message)


manager = ConnectionManager()


@app.get("/")
async def get():
    return HTMLResponse(html)


@app.websocket("/ws/{client_id}")
async def websocket_endpoint(websocket: WebSocket, client_id: int):
    await manager.connect(websocket)
    try:
        while True:
            data = await websocket.receive_text()
            await manager.send_personal_message(f"You wrote: {data}", websocket)
            await manager.broadcast(f"Client #{client_id} says: {data}")
    except WebSocketDisconnect:
        manager.disconnect(websocket)
        await manager.broadcast(f"Client #{client_id} left the chat")
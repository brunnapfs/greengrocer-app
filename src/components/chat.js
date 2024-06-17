import React, { useState, useEffect } from 'react';
import '../styles/Chat.css'
import Profile from '../pages/Profile'
function Chat() {
  const [clientId] = useState(Date.now());
  const [messages, setMessages] = useState([]);
  const [ws, setWs] = useState(null);

  useEffect(() => {
    const newWs = new WebSocket(`ws://localhost:8000/ws/${clientId}`);
    newWs.onmessage = (event) => {
      setMessages((prevMessages) => [...prevMessages, { text: event.data, sender: 'server' }]);
    };
   
        
    setWs(newWs);
    return () => newWs.close();
  }, [clientId]);

  const sendMessage = (event) => {
    event.preventDefault();
    const input = event.target.elements.messageText;
    if (ws) {
      ws.send(input.value);
      setMessages((prevMessages) => [...prevMessages, { text: input.value, sender: 'client' }]);
      input.value = '';
    }
  };

  return (
    <div className='container_div'>
      <h1>GreenGrocer Chat</h1>
      <h2>Seu ID: {clientId}</h2>
      <form onSubmit={sendMessage}>
        <input type="text" id="messageText" autoComplete="off" className='inputMessage'/>
        <button type="submit" className='btnSend'>Enviar</button>
      </form>
      <ul className='ul'>
       {messages.map((message, index) => (
        <li key={index} className={message.sender} >
        {message.text}
    </li>
   
  ))}
</ul>
<Profile.name>
  hahahhaa
</Profile.name>
    </div>
  );
}

export default Chat;

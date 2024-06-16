import React, { useState } from 'react';
import '../styles/Support.css';

const Support = () => {
  const [faq, setFaq] = useState([
    {
      question: "Como faço para rastrear meu pedido?",
      answer: "Você pode rastrear seu pedido usando o número de rastreamento enviado para o seu e-mail após a confirmação da compra.",
      isOpen: false,
    },
    {
      question: "Quais são as opções de pagamento disponíveis?",
      answer: "Aceitamos cartões de crédito, cartões de débito e PayPal.",
      isOpen: false,
    },
    {
      question: "Como posso alterar meu endereço de entrega?",
      answer: "Você pode alterar seu endereço de entrega acessando sua conta e atualizando as informações de endereço.",
      isOpen: false,
    },
    {
      question: "Qual é a política de devolução?",
      answer: "Você pode devolver os produtos dentro de 30 dias após a entrega, desde que estejam em condições originais.",
      isOpen: false,
    },
  ]);

  const toggleFaq = (index) => {
    setFaq(faq.map((item, i) => (
      i === index ? { ...item, isOpen: !item.isOpen } : item
    )));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mensagem de suporte enviada');
  };

  return (
    <div className="support-container">
      <h2>Suporte ao Cliente</h2>
      <form onSubmit={handleSubmit}>
        <textarea placeholder="Digite sua mensagem" required></textarea>
        <button type="submit">Enviar Mensagem</button>
      </form>
      <div className="faq-section">
        <h2>Perguntas Frequentes</h2>
        {faq.map((item, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFaq(index)}>
              {item.question}
            </div>
            {item.isOpen && <div className="faq-answer">{item.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Support;

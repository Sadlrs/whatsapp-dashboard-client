// src/components/Chat.js
import React from 'react';

function Chat({ messages }) {
  return (
    <div className="chat" style={chatStyles}>
      <div className="messages" style={messageListStyles}>
        {messages.map((message, index) => (
          <div key={index} style={messageStyles}>
            <strong>{message.sender}:</strong> {message.text}
          </div>
        ))}
      </div>
    </div>
  );
}

const chatStyles = {
  flex: 1,
  padding: '20px',
  backgroundColor: '#fff',
  height: '100vh',
};

const messageListStyles = {
  maxHeight: '80vh',
  overflowY: 'scroll',
};

const messageStyles = {
  padding: '10px',
  borderBottom: '1px solid #ddd',
};

export default Chat;

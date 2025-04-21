// src/App.js
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Chat from './components/Chat';
import InputField from './components/InputField';
import config from './config';


// Sample contacts and messages
const initialContacts = [
  { name: 'John Doe', id: 1 },
  { name: 'Jane Smith', id: 2 },
  { name: 'Support Team', id: 3 },
];

const initialMessages = [
  { sender: 'John Doe', text: 'Hello!' },
  { sender: 'You', text: 'Hi, how can I help you?' },
];

function App() {
  const [selectedContact, setSelectedContact] = useState(initialContacts[0]);
  const [messages, setMessages] = useState(initialMessages);

  const handleContactClick = (contact) => {
    setSelectedContact(contact);
    // Optionally clear the messages when switching contacts
    setMessages([]);
  };

  const handleSendMessage = async (message) => {
    setMessages([...messages, { sender: 'You', text: message }]);
  
    // Send the message to the backend and log the response
    try {
      const response = await fetch(`${config.backendUrl}/api/send-message`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });
      
  
      const data = await response.json();
      console.log('Message sent successfully:', data);
    } catch (error) {
      console.error('Failed to send message:', error);
    }
  };
  

  return (
    <div style={appContainerStyles}>
      <Sidebar contacts={initialContacts} onContactClick={handleContactClick} />
      <div style={chatContainerStyles}>
        <h3>{selectedContact.name}</h3>
        <Chat messages={messages} />
        <InputField onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
}

const appContainerStyles = {
  display: 'flex',
  height: '100vh',
};

const chatContainerStyles = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
};

export default App;

// src/Sidebar.js
import React from 'react';

function Sidebar({ contacts, onContactClick }) {
  return (
    <div className="sidebar" style={sidebarStyles}>
      <h2>Contacts</h2>
      <ul style={contactListStyles}>
        {contacts.map((contact, index) => (
          <li key={index} onClick={() => onContactClick(contact)} style={contactItemStyles}>
            {contact.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

const sidebarStyles = {
  width: '250px',
  padding: '20px',
  backgroundColor: '#f4f4f4',
  borderRight: '1px solid #ddd',
};

const contactListStyles = {
  listStyle: 'none',
  padding: 0,
};

const contactItemStyles = {
  padding: '10px',
  cursor: 'pointer',
  borderBottom: '1px solid #ddd',
};

export default Sidebar;

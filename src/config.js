// src/config.js

const isLocalhost = window.location.hostname === 'localhost';

const config = {
  backendUrl: isLocalhost
    ? 'http://localhost:5000'
    : 'https://whatsapp-dashboard-client.vercel.app/', // <-- Replace this with your actual Vercel backend URL
};

export default config;

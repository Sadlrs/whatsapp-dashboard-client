const handleSend = async () => {
  if (input.trim()) {
    onSendMessage(input);
    try {
      await fetch('http://localhost:5000/api/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input }),
      });
    } catch (err) {
      console.error('Failed to send:', err);
    }
    setInput('');
  }
};

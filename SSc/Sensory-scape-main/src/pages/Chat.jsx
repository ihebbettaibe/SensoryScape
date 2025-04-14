import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

const Chat = () => {
  return (
    <div style={containerStyle}>
      {/* Header Section */}
      <Header />

      {/* Main Content */}
      <main style={mainStyle}>
        <iframe
        
src="https://www.chatbase.co/chatbot-iframe/dxSWyJ6SJl44qG-UGCACd"
        
          style={iframeStyle}
          title="Chat Interface"
        />
      </main>

    
    </div>
  );
};

// Inline Styles

// Main container style with a light background
const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  backgroundColor: '#D0E8C5',
};

// Main content section with iframe
const mainStyle = {
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#C9E9D2',
  padding: '20px',
  overflow: 'hidden',
};

// Iframe style with a subtle shadow and rounded edges
const iframeStyle = {
  border: 'none',
  borderRadius: '12px',
  width: '100%',
  height: '100%',
  maxWidth: '1200px',
  minHeight: '700px',
  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
};

export default Chat;

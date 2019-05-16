import React from 'react';
import Message from '../Instructions/Message';

const DevToolDisplay = ({ messages }) => {
  const messageList = messages ? (
    messages.map(msg => {
      return (
        <Message
          key={msg._id}
          msgId={msg.messageId}
          message={msg.message}
        />
      )
    })) : "Loading...";

  return (
    <div className="devDisplay">
      <div className="title">
        <span className="devTitle">DevTool</span>
      </div>
      
      <div className="messageContainer">{messageList}</div>
    </div>
  );
};

export default DevToolDisplay;
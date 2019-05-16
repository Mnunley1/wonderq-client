import React from 'react';

import Message from './Message';

const QueueDisplay = ({ messages }) => {

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
    <div className="queueDisplay">
      <div className="title">
        <span className="queueTitle">Queue</span>
      </div>
      
      <div className="msgContainer">
        {messageList}
      </div>
    </div>
  );
};

export default QueueDisplay;
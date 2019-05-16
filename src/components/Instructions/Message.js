import React from 'react';

const Message = ({ msgId, message }) => {
  return (
    <div className="msg">
      <div className="msgId">
        <span className="msgLabel">MessageID: </span>
        <span className="msgText">{msgId}</span>
      </div>

      <div className="msgContent">
        <span className="msgLabel">Message: </span>
        <span className="msgText">{message}</span>
      </div>
    </div>
  );
};

export default Message;
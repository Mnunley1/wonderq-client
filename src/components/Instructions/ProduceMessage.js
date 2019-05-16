import React, { useRef } from 'react';

const ProduceMessage = ({ setMessage }) => {
  const inputRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const message = inputRef.current.value;
    setMessage(message);

    inputRef.current.value = "";
  }

  return (
    <form className="msgForm" onSubmit={handleFormSubmit}>
      <input
        ref={inputRef}
        className="msgInput" 
        type="text" 
        placeholder="Enter message"
      />
      <button className="submitBtn" onClick={handleFormSubmit}>
        Submit
      </button>
    </form>
  );
};

export default ProduceMessage;
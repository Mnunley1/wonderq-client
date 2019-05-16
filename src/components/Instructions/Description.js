import React from 'react';

const Description = () => {
  return (
    <div className="description">
      <p className="descPara">
        This app is a demonstration of the <strong>WonderQ </strong>
        Simple Queuing System. Use the input to enter
        a message, and that message will be added to the
        queue. That message will then be processed by a
        consumer, and removed from the queue. 
      </p>
    </div>
  );
};

export default Description;
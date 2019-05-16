import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Description from './Description';
import ProduceMessage from './ProduceMessage';
import QueueDisplay from './QueueDisplay';

const Instructions = () => {
  const [data, setData] = useState(null)
  const [message, setMessage] = useState("");

  useEffect(() => {
    const dataFeed = setInterval(fetchData, 1000);

    return () => clearInterval(dataFeed);
  }, [setData]);

  useEffect(() => {
    if (message) postData();
  }, [message]);

  const fetchData = async () => {
    const response = await axios.get('https://wonderqtest.herokuapp.com/items/all');
    setData(response.data);
  }

  const postData = async () => {
    const params = new URLSearchParams();
    params.append('message', message);
    const response = await axios.post('https://wonderqtest.herokuapp.com/new/message', params);
    console.log(response.data)
  }

  return (
    <div className="instructions">
      <Description />
      <ProduceMessage setMessage={setMessage} />
      <QueueDisplay messages={data} />
    </div>
  );
};

export default Instructions;
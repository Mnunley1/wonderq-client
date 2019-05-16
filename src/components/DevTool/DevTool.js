import React, { useState, useEffect } from 'react';
import axios from 'axios';

import DevToolDisplay from './DevToolDisplay';

const DevTool = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetchData();
  }, [setData]);

  const fetchData = async () => {
    const response = await axios.get('https://wonderqtest.herokuapp.com/items/active');
    setData(response.data);
  }

  return (
    <div className="devTool">
      <DevToolDisplay messages={data} />
    </div>
  );
};

export default DevTool;
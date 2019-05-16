import React from 'react';

import Navbar from './components/Navbar';
import Instructions from './components/Instructions/Instructions';
import DevTool from './components/DevTool/DevTool';

function App() {
  return (
    <div>
      <Navbar />
      <Instructions />
      <DevTool />
    </div>
  );
}

export default App;

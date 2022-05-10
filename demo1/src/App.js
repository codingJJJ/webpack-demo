import React, { useState } from 'react';

const App = () => {
  const [num, setNum] = useState(0);
  const handlerClick = () => setNum(num + 1);
  return <button onClick={handlerClick}>{num}</button>
};

export default App;

import './App.css';
import React, {useState} from 'react';

function App() {
  const [data, setData] = useState(null);
  function getData(val){
    console.warn(val.target.value); 
  }
  return (
    <div className="App">
      <h1>Get Input Box value !</h1>
      <p>{data}</p>
      <input type='text' onChange={getData}/>
    </div>
  );
}

export default App;

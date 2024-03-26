import React ,{useState} from 'react';
import logo from './logo.svg';
import './App.css';


import { AppProps } from './interface/AppProps';

function App({ title }: AppProps): JSX.Element {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <div>{ ` Henry Workshop - ${title}`}</div>;

      <h1>*********  Counter************</h1>
      <button type="button" onClick={()=> setCounter(counter -1)}>-</button>
       <input type='text' value={counter}   style={{textAlign:'center'}}/>
      <button type="button" onClick={() =>setCounter(counter + 1) } >+</button>
    </div>
  );
}

export default App;

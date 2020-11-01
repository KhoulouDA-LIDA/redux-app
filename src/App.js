import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useSelector} from "react-redux";
import {decrementer} from "./actions/decrAction";
import {incrementer} from "./actions/incrAction";
import Counter from "./Counter";

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
         <Counter/>
      </header>
    </div>
  );
}

export default App;

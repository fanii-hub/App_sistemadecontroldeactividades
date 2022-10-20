import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Ejemplo } from './components/Ejemplo';
import {Button} from './components/button/Button';
import {BrowserRouter, Routes,Route } from 'react-router-dom';
import { Login } from './views/Login';


function App() {
  return (
    <BrowserRouter>
 <div className="App">

      <Routes>
        <Route path='/' element= {<Login/>} />

      </Routes>

    
    
    </div>
    </BrowserRouter>
  );
}

export default App;

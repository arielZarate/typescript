import React from 'react';
import logo from './logo.svg';
import './App.css';
import User from './components/User';
import Form from './components/Form';
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
     

      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/form" element ={<Form/>}/> 
       {/*  <Route path="about" element={<AboutPage />} /> */}
        {/* Ruta de "catch-all" para 404 Not Found */}
       {/*  <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
     
    </div>
  );
}

export default App;

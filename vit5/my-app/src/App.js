import React from 'react';
import Navbar from './components/Navbar'; 
import './App.css';
import Home from './pages/Home/Home'; 
import NotHome from './pages/NotHome/NotHome';  
import DefPage from './pages/def/defPage';  
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Navbar />  
      
      <Routes>
        <Route path="/" element={<DefPage />} />  
        <Route path="/Home" element={<Home />} />  
        <Route path="/NotHome" element={<NotHome />} />
      </Routes>
    </div>
  );
};

export default App;
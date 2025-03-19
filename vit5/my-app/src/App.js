import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Use BrowserRouter as Router
import Navbar from './components/Navbar';  // Import Navbar
import './App.css';

const Home = () => {
  return <h2>Home Page</h2>;
};

const NotHome = () => {
  return <h2>NotHome Page</h2>;
};

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/NotHome" element={<NotHome />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

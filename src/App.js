import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';

function App() {
  return (
    <Router>
      <div style={{ textAlign: 'center' }}>
        <nav style={{ margin: '20px' }}>
          <Link to="/" style={{ margin: '10px' }}>Home</Link>
          <Link to="/about" style={{ margin: '10px' }}>About</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

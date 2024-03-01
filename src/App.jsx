import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter as Router
import { Navbar } from './Component/Navbar';
import './App.css';
import { Main } from './Component/Main';

function App() {
  return (
    <Router>
      <div className=''> {/* Use a div instead of body */}
        <Navbar/>
        <Main/>
      </div>
    </Router>
  );
}

export default App;

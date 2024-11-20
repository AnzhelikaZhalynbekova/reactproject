// src/App.jsx
import { useState } from 'react';
import './App.css'; // Import the global CSS for both App and PersonInfo
import PersonInfo from './PersonInfo'; // Import PersonInfo component

function App() {
  return (
    <div id="root">
      <div className="person-info-container">
        <PersonInfo />
      </div>
    </div>
  );
}

export default App;

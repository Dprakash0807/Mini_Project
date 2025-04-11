// src/DarkModeToggle.js
import React, { useState, useEffect } from 'react';
import './Dark.css'; // Import CSS for styling

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check local storage for saved preference
    const savedMode = localStorage.getItem('dark-mode');
    return savedMode === 'true';
  });

  useEffect(() => {
    // Save the user's preference to local storage
    localStorage.setItem('dark-mode', isDarkMode);
    document.body.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  return (
    <div className="toggle-container">
      <label className="toggle-label">
        <input
          type="checkbox"
          checked={isDarkMode}
          onChange={() => setIsDarkMode(!isDarkMode)}
        />
        <span className="toggle-slider"></span>
        
      </label>
    </div>
  );
};

export default DarkModeToggle;
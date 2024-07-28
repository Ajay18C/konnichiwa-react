import React from 'react';

const Offline = () => {
  return (
    <div className="offline-container">
      <div className="offline-message">
        <div className="offline-icon">
          <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="#61dafb" strokeWidth="2" />
            <path d="M12 6v6l4 2" stroke="#61dafb" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
        <h2>Oh no! You're Offline</h2>
        <p>It looks like you have no internet connection. Please check your network settings.</p>
      </div>
    </div>
  );
};

export default Offline;

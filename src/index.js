import React from 'react';
import ReactDOM from 'react-dom/client';
import Search from './components/Search.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div style={{
    position: 'absolute', left: '50%', top: '20%',
    transform: 'translate(-50%, -50%)'}}>
      <div>
        <Search />
      </div>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

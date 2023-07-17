import './App.css';
import resumePDF from './Resume.pdf';
import React from 'react';


function App() {
  return (
  <div>
    <div className="Resume">
      Resume
    </div>
    <div>
      <iframe src={resumePDF} style={{ width: '70%', height: '1000px' }}>
        <button>
          <a href={resumePDF} target="_blank" rel="noopener noreferrer">
            Download here
          </a>
        </button>
      </iframe>
    </div>
  </div>
  );
}
  
export default App;
  
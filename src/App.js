import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import './App.css'; 

function App() {
  const [playing, setPlaying] = useState(false);

  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  const handleEnded = () => {
    setPlaying(false); 
  };

  return (
    <div className="container">
      <h1 className="title">Happy Nowruz!!</h1>
      <ReactPlayer 
        url='https://www.youtube.com/watch?v=MszH-Y-Na6g' 
        playing={playing} 
        controls 
        width='100%' 
        height='600px' 
        onEnded={handleEnded}
      />
      <button onClick={handlePlayPause} className="play-pause-button">
        {playing ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 9v6m4-6v6" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-5.197-3.074A1 1 0 008 8.944v6.112a1 1 0 001.555.832l5.197-3.074a1 1 0 000-1.664z" />
          </svg>
        )}
      </button>
    </div>
  );
}

export default App;
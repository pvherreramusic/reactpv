import React, { useState } from "react";
import ReactPlayer from "react-player";
import "./MusicPlayerCig.css"; // Import your CSS file for styling

const CigPlayer = () => {
  const [playing, setPlaying] = useState(false);
  const [url, setUrl] = useState(null); // Your audio file URL

  const handlePlay = () => {
    setUrl("https://pvherreramusicfiles.s3.us-east-1.amazonaws.com/01+Selena+Gomez.mp3"); // Replace with your audio file URL
    setPlaying(true);
  };

  return (
    <>
      <button onClick={handlePlay}>Play Audio</button>
      <div><p>Click "Play Audio" to listen to "Selena Gomez" from the 2012 album "Cigarettes and Weddings"</p></div>
      <ReactPlayer 
        url={url}
        playing={playing}
        onEnded={() => {
          setPlaying(false);
          setUrl(null);
        }}
        controls={true} // Optional: Show controls
        playsinline
      />
    </>
  );
};

export default CigPlayer;

import React, { useState, useRef } from 'react';
import Selena from "./assets/SelenaGomez.mp3";

const CigPlayer = ({ src }) => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);

  const handlePlay = () => {
    if (!playing) {
      audioRef.current.play();
      setPlaying(true);
    } else {
      audioRef.current.pause();
      setPlaying(false);
    }
  };

  return (
    <>
    <h4>Music sample "Selena Gomez" from "Cigarettes and Weddings"</h4>
      <button onClick={handlePlay}>{playing ? 'Pause' : 'Play'}</button>
      <audio
        ref={audioRef}
        src={Selena}
        onEnded={() => setPlaying(false)}
      />
    </>
  );
};


export default CigPlayer;
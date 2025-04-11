import React, { useState, useRef } from 'react';
import surf from "./assets/SurfWorshipperMix02.mp3"



const XanaxPlayer = ({ src }) => {
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
    <h4>Music sample "Surf Worshipper" from "Xanax and Mercy"</h4>
      <button onClick={handlePlay}>{playing ? 'Pause' : 'Play'}</button>
      <audio
        ref={audioRef}
        src={surf}
        onEnded={() => setPlaying(false)}
      />
    </>
  );
};


export default XanaxPlayer;
import React, { useState } from "react";
import ReactPlayer from "react-player";


const XanaxPlayer= () => {
  const [playing, setPlaying] = useState(false);
  const [url, setUrl] = useState(null); // Your audio file URL

  const handlePlay = () => {
    setUrl("https://pvherreramusicfiles.s3.us-east-1.amazonaws.com/SurfWorshipperMix02.mp3"); // Replace with your audio file URL
    setPlaying(true);
  };

  return (
    <>

      <button onClick={handlePlay}>Play Audio</button>
      <div><p>Click "Play Audio" to listen to "Surf Worshipper" from the 2019 album "Xanax and Mercy"</p></div>
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


export default XanaxPlayer;
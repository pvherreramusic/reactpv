import styled from "styled-components";

import "./App.css"
import "./MainComponent.css";
import App from "./App";
import useWindowSize from "./useWindowSize";
import React from "react";
const commonStyles = { background: "pink", height: 100, margin: "0 auto" };
const SmallComponent = () => <div style={{ width: "100%" }} />;
const LargeComponent = () => (
  <div style={{  width: "500px" }} />
);

const Box = styled.div`
  color: black;
  background-color: ${({ isMobile }) => (isMobile ? "white" : "white")};
`;

export default function MainComponent() {
  const windowSize = useWindowSize();

  const isMobile = windowSize === "useMobileVersion";

  return (
    <div className="App">
     
      <Box isMobile={isMobile}><App></App></Box>
      {isMobile ? <SmallComponent /> : <LargeComponent />}
    </div>
  );
}

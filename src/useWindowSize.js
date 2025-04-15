import { useState, useEffect } from "react";

//a Util function that will convert the absolute width into breakpoints
function getBreakPoint(windowWidth) {
  if (windowWidth) {
    if (windowWidth < 768) {
      return "useMobileVersion";
    } else {
      return "useDesktopVersion";
    }
  } else {
    return "useDesktopVersion";
  }
}
function useWindowSize() {
  const isWindowClient = typeof window === "object";

  const [windowSize, setWindowSize] = useState(
    isWindowClient ? getBreakPoint(window.innerWidth) : undefined
  );

  useEffect(() => {
    //a handler which will be called on change of the screen resize
    function setSize() {
      setWindowSize(getBreakPoint(window.innerWidth));
    }

    if (isWindowClient) {
      //register the window resize listener
      window.addEventListener("resize", setSize);

      //unregister the listener
      return () => window.removeEventListener("resize", setSize);
    }
  }, [isWindowClient, setWindowSize]);

  return windowSize;
}

export default useWindowSize;

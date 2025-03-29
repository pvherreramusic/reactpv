import { Button } from "antd";
import React, { useState, useEffect } from "react";

export const DownloadLink = ({ url, fileName }) => {
  const [count, setCount] = useState(() => {
    const storedCount = localStorage.getItem("counter");
    return storedCount ? parseInt(storedCount) : 0;
  });

  useEffect(() => {
    localStorage.setItem("counter", count.toString());
  }, [count]);

  const handleDownload = () => {
    setCount(count + 1);
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.download = fileName || "downloaded-file";
        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.error("Error fetching the file:", error);
      });
  };

  return (
    <div>
      <Button type="primary" onClick={handleDownload}>
        Donwload Album for free (downloaded {count} times)
      </Button>
    </div>
  );
};

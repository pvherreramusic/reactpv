import { Button } from "antd";
import React, { useState, useEffect } from "react";
import { CounterAPI } from "counterapi";

const counter = new CounterAPI

export const DownloadLinkCigarettes =  ({ url, fileName }) => {
  const [data, setData] = useState(0);

  useEffect(() => {
    fetch('https://api.counterapi.dev/v1/cigarettesdownload/cigarettesdownload')
    .then(response => response.json())
    .then(jsonData => setData(jsonData));
}, []);

const { count } = data;


  const handleDownload = () => {
    counter.up("cigarettesdownload", "cigarettesdownload").then((res) => {
      console.log(res);
    });



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
        Donwload Album for free
      </Button>
      <p>Downloaded {count} times</p>
    </div>
  );
};

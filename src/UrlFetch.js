import React from 'react'
import { useState, useEffect } from "react";

const UrlFetch = (url) =>{
    const [data, setData] = useState("");

  useEffect(() => {
    fetch(url)
      .then((result) => result.json())
      .then((data) => setData(data));
  }, [url]);

  return [data];
};

export default UrlFetch;
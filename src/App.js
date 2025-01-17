import React, { useState, useEffect } from "react";
import axios from "axios";
import NasaPhoto from "./Components/NASAphoto";
import "./App.css";
import styled from "styled-components";

function App() {

  const [ data, setData ] = useState();
  
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(res => {

      console.log(res);
          setData(res.data)
  
    })
    .catch(err => console.err(err))
  }, [])
  return (
    <div className="App">
      {data && <NasaPhoto photo={data} /> }
    </div>
  );
}

export default App;



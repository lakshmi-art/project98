import logo from './logo.svg';
import './App.css';
import React from 'react';


function App() {
 const iframeStyle = {
   margin: "0 auto",
    maxwidth: "1000%",
    width: "1000px",
    height: "1000%",
    border:"1px solid red",
  };

  return (
    <div className="App">
    <iframe src = "https://form.jotform.com/202950794921461">
  </iframe> 
    </div>
  );
}

export default App;

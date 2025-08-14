import React from "react";
import ContactForm from "./components/ContactForm";
import "./index.css";
import bgimage from "./public/bgimage.png";
// import bgimage from "/bgimage.png";

function App() {
  return (
    <div className="app-container">

      <img src={bgimage} alt="3D rotating planet" className="background-image" />

      <div className="left-panel">
        <ContactForm />
      </div>
      <div className="right-panel">
        
        {/* <img src={bgimage} alt="3D rotating planet" /> */}


      </div>
    </div>
  );
}

export default App;

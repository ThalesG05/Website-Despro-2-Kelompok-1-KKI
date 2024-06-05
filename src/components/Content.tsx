import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ContentCSS from "./Content.module.css";
import About from "./About"
import Team from "./Team"
import ImageComponent from './ImageComponent'; // Import ImageComponent

function Content() {

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const fetchLatestImage = async () => {
      try {
        const response = await axios.get('/api/latestImage');
        setCounter(response.data.changeCounter);
      } catch (error) {
        console.error('Failed to fetch latest image:', error);
      }
    };

    fetchLatestImage();
    const intervalId = setInterval(fetchLatestImage, 5000); // Fetch latest image every 5 seconds

    return () => clearInterval(intervalId); // Clean up on unmount
  }, []);
  
  return (
    // PAGE CONTENT
    <div className={`${ContentCSS.content}`} style={{ maxWidth: "100%" }}>
      {/* Camera Capture Section */}
      <div className={`${ContentCSS.container} ${ContentCSS.padding32}`} id="Project">
        <h3 className={`${ContentCSS.borderBottom} ${ContentCSS.borderLightGrey} ${ContentCSS.padding16}`}>Project</h3>
      </div>

      <div className={ContentCSS.rowPadding}>
        <div className={`${ContentCSS["13"]} ${ContentCSS.m6} ${ContentCSS.marginBottom}`}>
          <div className={ContentCSS.displayContainer}>
            <div style={{textAlign: "center", fontSize: "clamp(1rem, 4vw, 1.5rem)", color: "black"}}>
              Number of violations: {counter}
            </div>
          <ImageComponent
            
            style={{display: "block", width: "auto", height: "auto", objectFit: "contain", paddingBottom: "20px", marginLeft: "auto", marginRight: "auto", maxWidth: "70vw", justifyContent: 'center'}}></ImageComponent>
            
            <div className={`${ContentCSS.displayTopLeft} ${ContentCSS.black} ${ContentCSS.padding}`}
            style={{textAlign: "center", fontSize: "clamp(1rem, 4vw, 1.5rem)"}}>
              Latest Violation
            </div>
          </div>
          <div style={{ clear: 'both' }}></div>
        </div>
      </div>

      <div className={`${ContentCSS.container} ${ContentCSS.padding32}`} style={{marginTop: "auto"}} id="about">
        <h3 className={`${ContentCSS.borderBottom} ${ContentCSS.borderLightGrey} ${ContentCSS.padding16}`}>About</h3>
        <About />
      </div>

      <div className={`${ContentCSS.container} ${ContentCSS.padding32}`} style={{marginTop: "auto"}} id="team">
        <h3 className={`${ContentCSS.borderBottom} ${ContentCSS.borderLightGrey} ${ContentCSS.padding16}`}>Team</h3>
        <Team />
      </div>








    </div>
  );
}

export default Content;

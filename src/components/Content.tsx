import ContentCSS from "./Content.module.css";
import About from "./About"
import Team from "./Team"

function Content() {
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
            <img src="https://univindonesia-my.sharepoint.com/:i:/r/personal/erdhy_ernando_office_ui_ac_id/Documents/Non-UI%20Things/%232%20Photo%20%26%20Video%20Backup/Paris%202023/IMG_1814.JPG"
            
            style={{display: "block", width: "auto", height: "auto", objectFit: "contain", paddingBottom: "20px", marginLeft: "auto", marginRight: "auto", maxWidth: "70vw"}}></img>
            
            <div className={`${ContentCSS.displayTopLeft} ${ContentCSS.black} ${ContentCSS.padding}`}
            style={{textAlign: "center", fontSize: "clamp(1rem, 4vw, 1.5rem)"}}>
              Text placeholder
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

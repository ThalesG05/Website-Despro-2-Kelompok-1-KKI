import ContentCSS from "./Content.module.css";
import About from "./About"
import Team from "./Team"

function Content() {
  return (
    // PAGE CONTENT
    <div className={`${ContentCSS.content} ${ContentCSS.padding}`} style={{ maxWidth: "1920px" }}>
      {/* Camera Capture Section */}
      <div className={`${ContentCSS.container} ${ContentCSS.padding32}`} id="Project">
        <h3 className={`${ContentCSS.borderBottom} ${ContentCSS.borderLightGrey} ${ContentCSS.padding16}`}>Project</h3>
      </div>

      <div className={ContentCSS.rowPadding}>
        <div className={`${ContentCSS["13"]} ${ContentCSS.m6} ${ContentCSS.marginBottom}`}>
          <div className={ContentCSS.displayContainer}>
            <img src="https://univindonesia-my.sharepoint.com/:i:/r/personal/erdhy_ernando_office_ui_ac_id/Documents/Non-UI%20Things/%232%20Photo%20%26%20Video%20Backup/Paris%202023/IMG_1816.JPG" style={{width: "30%", paddingBottom: "20px", marginLeft: "30vw", maxWidth: "1920px"}}></img>
            <div className={`${ContentCSS.displayTopLeft} ${ContentCSS.black} ${ContentCSS.padding}`}
            style={{textAlign: "center"}}>
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

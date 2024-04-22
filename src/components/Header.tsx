import HeaderCSS from "./Header.module.css";

function Header() {
  return (
    <header
      className={`${HeaderCSS.displayContainer} ${HeaderCSS.content} ${HeaderCSS.wide}`}
      style={{ maxWidth: "1500px" }}
      id="home"
    >
      <div className={`${HeaderCSS.displayMiddle} ${HeaderCSS.marginTop} ${HeaderCSS.center}`}>
        <h1 className={`${HeaderCSS.xxlarge} ${HeaderCSS.textWhite}`}>
          <span className={`${HeaderCSS.padding} ${HeaderCSS.black} ${HeaderCSS.opacityMin}`}>
            <b>Safety Helmet Detection Using Raspberry PI and YOLOv8</b>
          </span>
        </h1>
        <p style={{textAlign: "center", marginTop: "2em"}}>
          Arel, Amadeo, Hakiim, Anindya
          </p>
      </div>
    </header>
  );
}

export default Header;

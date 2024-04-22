import NavbarCSS from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={NavbarCSS.topside}>
      <div className={NavbarCSS.container}>
        <a href="#home" className={`${NavbarCSS.item} ${NavbarCSS.button}`}>
          <b>PROJECT KELOMPOK 1 KKI DESPRO 2 </b>
        </a>
        {/* Float links to the right. Hide them on small screens */}
        <div className={`${NavbarCSS.right} ${NavbarCSS.small}`}>
          <a href="#project" className={`${NavbarCSS.item} ${NavbarCSS.button}`}>
            Project
          </a>
          <a href="#about" className={`${NavbarCSS.item} ${NavbarCSS.button}`}>
            About
          </a>
          <a href="#team" className={`${NavbarCSS.item} ${NavbarCSS.button}`}>
            Team
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

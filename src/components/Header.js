function Header() {
  function scrollToDiv() {
    const aboutus = document.getElementById("aboutus");
    const offer = document.getElementById("offer");
    aboutus.scrollIntoView({ behavior: "smooth" });
    offer.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <nav id="navbar" className="fullwidth">
      <div className="main">
        <div id="navcontainer">
          <div id="logo" className="half">
            moja firma
          </div>
          <div className="half rightalign menu">
            <ul>
              <li>
                <a href="#aboutus" onClick={scrollToDiv}>
                  o nas
                </a>
              </li>
              <li>
                <a href="#offer">oferta</a>
              </li>
              <li>
                <a href="#notallowed" className="notallowed">
                  kontakt
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;

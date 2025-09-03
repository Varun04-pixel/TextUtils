function Nav(props) {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-body-transparent navbar-dark bg-transparent" style={{
        background: "rgba(33, 37, 41, 0.65)", // semi-transparent layer from your bg
        backdropFilter: "blur(10px)",         // frosted glass blur
        WebkitBackdropFilter: "blur(10px)",   // Safari support
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)", // soft divider
        boxShadow: "0 2px 12px rgba(0, 0, 0, 0.6)"           // subtle shadow
      }}>
          <div className="container-fluid">
            <a className="navbar-brand mx-4" href="../public/index.html">
              {props.title}
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="../public/index.html"
                  >
                    {props.navItems[0]}
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="../public/index.html"
                  >
                    {props.navItems[1]}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="../public/index.html">
                    {props.navItems[2]}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
}

export default Nav;
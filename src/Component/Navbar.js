import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Nav(props) {
    const [mode, setMode] = useState('dark');
    const darkIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABnUlEQVR4nO2YzysEYRjHP6FWIm4oP/4Bjg6SnFaiuCoHkSR/gaKUg5urpC25yMnVTW5+tU5+3NRa4kg5Iaunnq05zOzOzM5s71vvp763+fXpnXnneR5wOBwOh8OROE3AFNCJpbQCG8ALUAKWsJAZoKACkjsgg0U0ADsegXKyWPYtnPhIXGEZuz4SkhUsYjVA4g/owRK6gY8AkTcs4ihAQpLHEnqAnwoi51jCVgUJySOWkK8i8okFtAO/VUQkAxjOSAgJyToW1FOlELnX0sVYFkKKSOYxmLkIIgX9poxkPIKI5BRoxED6I4pI9kyVeY0hIyvTEfN+Ge00uxL2IBdDRFLUzSLK6kzoDljSGUCijMUUKedB+/rBgOv3aotw4znnWZu4xPHepJZ8aW0mheYt8B5w3BopkU1IJEyegBZS5KBOIpOkTDNwkbLENnVseb2zrCRzXO96TWQuE5bYT2uXCvOa5XSCUouADDSWMYAh4CyGwDdwqKtrFKP6ehQrPLwMMK6BTRMF/OjT/84ssAhMA8NAm+/RDofD4XA4qJl/UHGE57r0YL4AAAAASUVORK5CYII="
    const lightIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAABOCAYAAACOqiAdAAAACXBIWXMAAAsTAAALEwEAmpwYAAADvklEQVR4nO2bS48NQRSAy4yEIMaWBTNhPMLGK9gwLIgRSwZ3vGa8lmP8BDGGlSERNoY/MJlYe2wMq3kgcQe/wNprMcl8UrpuXFdV3+5q997uvudLOrnpVJ1z+tyqOtXnVCslCIIgCIIgCIIgCIJQK4CFwH6gS/+umaI8ASwG3vCH1/peo+1KPcAF/qW/0XalHmDY4rjhRtuVehDH+QEMWRw35CmueQAKFsedUs0AsBt4CNwGVnlsRcbLnDYGtMaUscro1jbsVlkA2APMlT34F2CLh5wNwHqPfluMzhLall0q7QAPLFNNP8jmOujeXOG0EvdV2iGYIjY+AC011NsKFB260x+VCdYX27+uWVtDvZ0OndqWlSoL8O86o/kKLKmhzqXAN4vTYq+vDYVgvSmWOa0nQp8O4IrZyz0215C51xGhf4/RVVoaar6u1nLdWadHQ0ibFuAcMEN1dJuzYWulGXnr4m5hMgWwE3hPfN4CO1QzAhwHvuPPT+C0aiaAk8A8ydEyTqhmgGB6/ghxxiwwAgyYa8Tcc6FlbVd5hiAQvHM4QEfgQyF9DwMfQ4JGzTbXDYcgItp4BiyP0L8NeO6QcUblFexbjmIUp1U4zzbyplUeAdodI+Wgh6xuh6yqm+S0VKP6Tap72OzwC65yntn9VzKbQP8ni7xLITm+XmNjyd7+ulfPCAwpL+GVMx4jJX4ngQ13LfJuWNotAJ46bJ2oa90WOEA4Gyx9nljaDSSwYdAib9TSblMVW7t8bfAxuquKMZ2WPqOWdoMJbLhmkffIkUkOY6+vDb5TdcJhyFiMqTqSwIZ7UaaqaVtewyjnVd2TAQTBoa8iOJxyGQJcrkNwuBjyRxcqgsN5YJFKO8Aax/vpYQ9ZRx0jqF3lEWDa8rB6M9sWQ8YK4LNFzpTKK8Bpx0h5EcV5xmkvHTJ6Vc5f8mccD65HXndI3yOOkfZ7tOX6JV8DbKuSwPxkIuZVc90LcRhG1lbVRNnfeZKjZRxTzQRw7D+kzvO7roWhM7eOSFuNqVxPT4LyYGeE8qCOtpMRHDZpshxh5cFlmS4P8ndB+lvEgrTeJF8Erpt321HzW58LXh2xIF2q5hczV5CmMUcglmX6CARy6MYP5JiXH8jBwkTnf+eSrDMm3b3RlknO7VFWjTbUjLxbcdcXkzsrrxGMx60LaJ1G94PMOC0pZp9WSSGx4LwD3LQ4Tj4QqYZ8kuSJOM4TU2GvpM9XXtNAUD2bqCjhpb8alQYItiT7zJXNLIcgCIIgCIIgCIIgCCoT/AJAjFiF7sh54QAAAABJRU5ErkJggg=="

    useEffect(() => {
      if(mode === 'dark') {
        document.body.style.backgroundColor = '#212529';
        document.body.style.color = '#ffffff';
      }
    }, [])
    function toggleMode() {
      if(mode === 'dark') {
        document.body.style.backgroundColor = '#ffffff';
        document.body.style.color = '#212529';
        setMode('light');
      } else {
        document.body.style.backgroundColor = '#212529';
        document.body.style.color = '#ffffff';
        setMode('dark');
      }
    }
    return (
      <>
        <nav id='navBar'
          className={`navbar navbar-expand-lg bg-body-transparent navbar-${mode} bg-transparent`}
          style={{
            background: "rgba(33, 37, 41, 0.65)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
            boxShadow: "0 2px 12px rgba(0, 0, 0, 0.6)",
          }}
        >
          <div className="container-fluid">
            <a className="navbar-brand mx-4" to='/'>
              {props.title}
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
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
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to='/'
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to='/about'
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to='/contact'>
                    Contact
                  </Link>
                </li>
              </ul>
              <div className="container-fluid d-flex justify-content-end">
                <img id='toggleBtn' style={{cursor: 'pointer'}} onClick={toggleMode} height='48' width='48' src={mode === 'dark' ? lightIcon : darkIcon} alt="external-Light-Mode-interface-linear-outline-icons-papa-vector"/>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
}

export default Nav;
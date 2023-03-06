import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link, Outlet } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import Logo from "../../assets/images/Logo3.png";
import RotatingSphere from '../../assets/SVGs/RotatingSphere'
import "./Navigation.css";

const Navigation = () => {
  const [active, setActive] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const toggleMobileViewActive = {
    display: !active && width < 650 ? "block" : "none",
  };
  const toggleMobileViewInactive = {
    display: active && width < 650 ? "block" : "none",
  };
  const toggleMobileViewInactiveNavbar = {
    display: active || width >= 650 ? "flex" : "none",
  };

  const handleResize = () => {
    setWidth(window.innerWidth);
  };
  const handleActive = () => {
    setActive(!active);
  };

  const handleAnimation = (e) => {
    console.log(e);
    if (active && width < 650) {

    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
    if (width > 650) setActive(false);
  }, [width]);

  // Greensock animations
  const ref = useRef();
//   const glowAnimation = (e) => {
//     console.log(e)
//     gsap.to(e.target, { scale: 2 });
//   };

//   useLayoutEffect(() => {
//     let ctx = gsap.context(() => {}, ref);

//     const glowAnimation = () => {
//       gsap.to("a", { scale: 2 });
//     };

//     window.addEventListener("onMouseEnter", glowAnimation)

//     return () => {
//         ctx.revert();
//         window.removeEventListener("onMouseEnter", glowAnimation)
//     }
//   }, []);

  return (
    <div className="app">
      <header>
        <nav className={active ? "slider active" : "slider"}>
          <div className="menu-icon" style={toggleMobileViewActive}>
            <GiHamburgerMenu
              className="menu"
              style={toggleMobileViewActive}
              onClick={handleActive}
            />
          </div>
          <GrClose
            className={active && width <= 650 ? "close" : ""}
            style={toggleMobileViewInactive}
            onClick={handleActive}
          />
          <ul>
            <div className="main-nav" style={toggleMobileViewInactiveNavbar}>
              <li>
                <Link
                  id="home"
                  className="link"
                  to="/"
                  onClick={handleActive}
                  onMouseEnter={handleAnimation}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link id="about" to="/about" onClick={handleActive}>
                  About
                </Link>
              </li>
              <li>
                <Link id="projects" to="/projects" onClick={handleActive}>
                  Projects
                </Link>
              </li>
              <li>
                <Link id="contact" to="/contact" onClick={handleActive}>
                  Contact
                </Link>
              </li>
            </div>
            <div className="logo-container" style={toggleMobileViewActive}>
              <img id="logo" src={Logo} alt="logo" />
            </div>
          </ul>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};

export default Navigation;

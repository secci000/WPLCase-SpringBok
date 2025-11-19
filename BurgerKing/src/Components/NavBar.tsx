import { useEffect, useState } from "react";
import logoBK from "../assets/navBar/logo-bk.svg";
import iconHamburgerMenu from "../assets/navBar/menu.svg";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  //Shrink navbar
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      {/* Navbar pages */}
      <nav
        className="navbar-main"
        style={{ height: scrolled ? "3.5rem" : "5rem" }}
      >
        <ul className="navbar">
          <li className="nav-hamburger">
            <a><img src={iconHamburgerMenu} alt="menu" /></a>
          </li>

          <li className="nav-pages">
            <NavLink to="/menu">Menu</NavLink>
            <a href="#">Deals</a>
            <NavLink to="/restaurant">Restaurants</NavLink>
            <a href="#">Jobs</a>
            <NavLink to="/" className="nav-myBK">MyBurgerKing</NavLink>
          </li>

          <li className="dropdown">
            <a href="#" className="dropbtn">NL</a>
            <div className="dropdown-content">
              <a href="#">NL</a>
              <a href="#">FR</a>
            </div>
          </li>
        </ul>

        {/* Logo */}
        <div className="nav-logo">
          <a href="#">
            <img
              src={logoBK}
              alt="logo"
              className="logoBK"
              style={{ height: scrolled ? "55px" : "70px" }}
            />
          </a>
        </div>
      </nav>
    </>
  );
};
export default NavBar;
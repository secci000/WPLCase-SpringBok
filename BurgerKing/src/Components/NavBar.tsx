import { useEffect, useRef, useState } from "react";
import logoBK from '../assets/navBar/logo-bk.svg';
import iconHamburgerMenu from '../assets/navBar/menu.svg';

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
        <ul className='navbar'>
          <li className='nav-hamburger'>
            <img src={iconHamburgerMenu} alt="menu" />
          </li>

          <li className='nav-pages'>
            <a href="#">Menu</a>
            <a href="#">Deals</a>
            <a href="#">Restaurants</a>
            <a href="#">Jobs</a>
            <a href="#" className='nav-myBK'>MyBurgerKing</a>
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
          <img
            src={logoBK}
            alt="logo"
            className="logoBK"
            style={{ height: scrolled ? "55px" : "70px" }}
          />
        </div>
      </nav>
    </>
  );
};
export default NavBar;
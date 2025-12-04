import { useEffect, useState } from "react";
import logoBK from "../../assets/navBar/logo-bk.svg";
import iconHamburgerMenu from "../../assets/navBar/menu.svg";
import { NavLink } from "react-router-dom";
import { useLanguage } from "../../i18n/LanguageContext";

const NavBar = () => {
  const {lang, setLang } = useLanguage();
  const switchLang = (l: string) => setLang(l);

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
            <a><img src={iconHamburgerMenu} alt="menu" />
            </a>
          </li>
          <li className="nav-pages">
            <NavLink to="/menu">Menu</NavLink>
            <NavLink to="/deals">Deals</NavLink> {/* 👈 nieuwe route */}
            <NavLink to="/restaurant">Restaurants</NavLink>
            <a href="https://jobs.burgerking.be/nl" target="_blank">Jobs</a>
            <NavLink to="/myBK" className="nav-myBK">MyBurgerKing</NavLink>
          </li>


          <li className="dropdown">
            <a className="dropbtn">{lang.toUpperCase()}</a>
            <div className="dropdown-content">
              <a onClick={() => switchLang("nl")}>NL</a>
              <a onClick={() => switchLang("fr")}>FR</a>
            </div>
          </li>
        </ul>

        {/* Logo */}
        <div className="nav-logo">
          <NavLink to="/">
            <img
              src={logoBK}
              alt="logo"
              className="logoBK"
              style={{ height: scrolled ? "55px" : "70px" }}
            />
          </NavLink>
        </div>
      </nav>
    </>
  );
};
export default NavBar;
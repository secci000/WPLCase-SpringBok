import { useEffect, useRef, useState } from "react";
import './navFoot.css';
import './reset.css';
import logoBK from './assets/logo-bk.svg';
import iconHamburgerMenu from './assets/menu.svg';
import burger from './assets/burger.svg';
import kid from './assets/kid.svg';
import salad from './assets/salad.svg';
import sauce from './assets/sauce.svg';
import dessert from './assets/ice-cream-cone.svg';
import fries from './assets/fries.svg';
import drink from './assets/drink.svg';
import instagram from './assets/instagram.svg';
import xCom from './assets/x-com.svg';
import facebook from './assets/facebook.svg';

function NavbarFooter() {
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

      <main>
        {/* Filter */}
        <nav className="navbar-sub">
          <ul>
            <li><a href="#">Alles</a></li>
            <li><a href="#"><img src={burger} alt="burger" /> Burgers</a></li>
            <li><a href="#"><img src={salad} alt="salad" />Salades</a></li>
            <li><a href="#"><img src={drink} alt="drink" />Drinks</a></li>
            <li><a href="#"><img src={dessert} alt="dessert" />Desserten</a></li>
            <li><a href="#"><img src={fries} alt="fries" />Sides & Snacks</a></li>
            <li><a href="#"><img src={sauce} alt="sauce" />Sauzen</a></li>
            <li><a href="#"><img src={kid} alt="kid" />Kids</a></li>
          </ul>
        </nav>
        <h1 id='test'>MAIN</h1>
      </main>

      {/* Footer */}
      <footer>
        <section className='footer-top'>
<article className="footer-title">
  <h1>
    <span className="rotator">
      <span className="word">Nuggets</span>
      <span className="word">Frietjes</span>
      <span className="word">Burgers</span>
      <span className="word">Sundae</span>
      <span className="word">Bacon</span>
      <span className="word">Whopper</span>
      <span className="word">Chicken</span>
    </span>
    <span className="static-text"> in je mailbox</span>
  </h1>
</article>


        </section>

        <section className='footer-bottom'>
          <ul className='footer-bottom-info'>
            <li><a href="#">Contacteer ons</a></li>
            <li><a href="#">Algemene gebruiksvoorwaarden</a></li>
            <li><a href="#">Privacy en cookies</a></li>
            <li><a href="#">Algemene voorwaarden Click&Collect en My Burger King</a></li>
            <li><a href="#">Cookie-Instellingen</a></li>
          </ul>

          <ul className='footer-bottom-socials-language'>
            <li><a href="#"><img src={instagram} alt="instagram" /></a></li>
            <li><a href="#"><img src={xCom} alt="x" /></a></li>
            <li><a href="#"><img src={facebook} alt="facebook" /></a></li>
            <li className="footer-dropdown">
              <a href="#" className="footer-dropbtn">NL</a>
              <div className="footer-dropdown-content">
                <a href="#">NL</a>
                <a href="#">FR</a>
              </div>
            </li>
          </ul>
        </section>
      </footer>
    </>
  );
}

export default NavbarFooter;

import './navFoot.css'
import './reset.css'
import logoBK from './assets/logoBK.png'
import iconHamburgerMenu from './assets/iconHamburgermenu.webp'
function NavbarFooter() {
  return (
    <>
      <nav>
        <ul className='navbar'>
          <li className='nav-hamburger'><img src={iconHamburgerMenu} alt="menu" /></li>
          <li className='nav-logo'><img src={logoBK} alt="logo" /></li>
          <li className='nav-pages'>
            <a href="#">Menu</a>
            <a href="#">Deals</a>
            <a href="#">Restaurants</a>
            <a href="#">Jobs</a>
            <a href="#" className='nav-myBK'>MyBurgerKing</a>
          </li>
          <li  className="dropdown">
            <a href="#" className="dropbtn">NL</a>
            <div className="dropdown-content">
              <a href="#">NL</a>
              <a href="#">FR</a>
            </div>
          </li>
        </ul>

      </nav>

      <main>
        <h1>MAIN</h1>
      </main>
      <footer>
        <section className='footer-message'>Nuggets in je mailbox</section>
        <section className='footer-signin-mailbox'>Schrijf je in voor de nieuwsbrief</section>
        <section className='footer-links'>
          <ul>
            <li><a href="#">Contacteer ons</a></li>
            <li><a href="#">Algemene gebruiksvoorwaarden</a></li>
            <li><a href="#">Privacy en cookies</a></li>
            <li><a href="#">Algemene voorwaarden Click&Collect en My Burger King</a></li>
            <li><a href="#">Cookie-Instellingen</a></li>
            <li><a href="#">IG</a></li>
            <li><a href="#">X</a></li>
            <li><a href="#">FB</a></li>
            <li><a href="#">NL</a></li>

          </ul>
        </section>
      </footer>
    </>
  )
}

export default NavbarFooter

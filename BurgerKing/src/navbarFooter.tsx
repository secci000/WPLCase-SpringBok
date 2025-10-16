import './navFoot.css'
import './reset.css'
import logoBK from './assets/logoBK.png'
import iconHamburgerMenu from './assets/iconHamburgermenu.webp'
function NavbarFooter() {
  return (
    <>
      <ul className='navbar'>
        <img src={iconHamburgerMenu} alt="iconHamburgerMenu" />
        <section className='section-logo'>
        <img src={logoBK} alt="logoBK" />
        </section>
        <li className="dropdown">
          <a href="#" className="dropbtn">NL</a>
          <div className="dropdown-content">
            <a href="#">NL</a>
            <a href="#">FR</a>
          </div>
        </li>
        <li><a href="#myBurgerKing">MyBurgerKing</a></li>
        <li><a href="#jobs">Jobs</a></li>
        <li><a href="#restaurants">Restaurants</a></li>
        <li><a href="#deals">Deals</a></li>
        <li><a href="#menu">Menu</a></li>

      </ul>
      <h2>Dropdown Menu in Navbar</h2>
      <p>Hover over the "Dropdown" link to see the dropdown menu.</p>
    </>
  )
}

export default NavbarFooter

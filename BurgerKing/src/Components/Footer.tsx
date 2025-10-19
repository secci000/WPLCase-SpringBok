import instagram from '../assets/footer/instagram.svg';
import xCom from '../assets/footer/x-com.svg';
import facebook from '../assets/footer/facebook.svg';
const Footer = () => {
  return (
    <>
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
  )
}
export default Footer;
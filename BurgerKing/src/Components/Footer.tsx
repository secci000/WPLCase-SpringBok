import instagram from "../assets/footer/instagram.svg";
import xCom from "../assets/footer/x-com.svg";
import facebook from "../assets/footer/facebook.svg";
import { useLanguage } from "../i18n/LanguageContext";

const Footer = () => {
  const { t, lang, setLang } = useLanguage();
  return (
    <>
      {/* Footer */}
      <footer>
        <section className="footer-top">
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
              <span className="static-text">{t("footer.rotatorStaticText")}</span>
            </h1>
          </article>
          <article className="footer-signin-mailbox">
            <a href="#">{t("footer.newsletter")}</a>
          </article>

        </section>

        <section className="footer-bottom">
          <ul className="footer-bottom-info">
            <li><a href="#">{t("footer.contact")}</a></li>
            <li><a href="#">{t("footer.terms")}</a></li>
            <li><a href="#">{t("footer.privacy")}</a></li>
            <li><a href="#">{t("footer.cookieSettings")}</a></li>
          </ul>

          <ul className="footer-bottom-socials-language">
            <li><a href="https://www.instagram.com/burgerkingbe/" target="_blank" ><img src={instagram} alt="instagram" /></a></li>
            <li><a href="https://x.com/BurgerKingBE_NL" target="_blank"><img src={xCom} alt="x" /></a></li>
            <li><a href="https://www.facebook.com/profile.php?id=100064496271008&brand_redir=345420055853895#" target="_blank"><img src={facebook} alt="facebook"/></a></li>
            <li className="footer-dropdown">
              <a className="footer-dropbtn">{lang.toUpperCase()}</a>
              <div className="footer-dropdown-content">
                <a onClick={() => setLang("nl")}>NL</a>
                <a onClick={() => setLang("fr")}>FR</a>
              </div>
            </li>
          </ul>
        </section>
      </footer>
    </>
  )
}
export default Footer;
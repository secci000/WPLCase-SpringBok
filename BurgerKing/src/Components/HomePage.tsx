import "../Homepage.css";
import AppSectionHome from "./AppSectionHome";
import Logo from "../assets/logo-bk.svg";
import NavbarFooter from "./navbarFooter";
import HeroSection from "./HeroSectionHome";

function HomePage() {
  return (
    <>
      {/* Zet de banner buiten NavbarFooter */}
      <div className="app-banner-homepage">
        <a
          href="https://burgerking.be/nl/app"
          target="_blank"
          rel="noopener noreferrer"
          className="app-link-homepage"
        >
          <img
            src={Logo}
            alt="Burger King logo"
            className="app-logo-banner-homepage"
          />
          <span className="app-text-homepage">
            Download de<br />My Burger King app!
          </span>
          <span className="arrow-homepage">&#8250;</span>
        </a>
      </div>
      
      <NavbarFooter>
        <HeroSection />
        <AppSectionHome />
      </NavbarFooter>
    </>
  );
}

export default HomePage;

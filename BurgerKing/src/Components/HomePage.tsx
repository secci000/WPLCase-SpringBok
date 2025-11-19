import "../css/Homepage.css";
import AppSectionHome from "./AppSectionHome";
import Logo from "../assets/logo-bk.svg";
import NavbarFooter from "./navbarFooter";
import GrillSection from "./GrillSectionHome";
import CarouselHomePage from "./CarouselHomePage";
import HomeCategory from "./CategoriesHomePage";


function HomePage() {
  return (
    <>
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
        <CarouselHomePage />
        <GrillSection />
        <AppSectionHome />
        <HomeCategory />
    </>
  );
}

export default HomePage;

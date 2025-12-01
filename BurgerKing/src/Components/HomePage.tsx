import "../css/Homepage.css";
import AppSectionHome from "./AppSectionHome";
import Logo from "../assets/logo-bk.svg";
import GrillSection from "./GrillSectionHome";
import CarouselHomePage from "./CarouselHomePage";
import HomeCategory from "./CategoriesHomePage";
import { useNavigate } from "react-router-dom";


function HomePage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="app-banner-homepage">
        <a
          onClick={() => navigate("/myBk")}
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

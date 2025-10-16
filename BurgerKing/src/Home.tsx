import "./Homepage.css"
import AppSectionHome from "./AppSectionHome";
function HomePage(){
    return(
    <><div className="app-banner-homepage">
            <a
                href="https://burgerking.be/nl/app"
                target="_blank"
                rel="noopener noreferrer"
                className="app-link-homepage"
            >
                <img
                    src=""
                    alt="Burger King logo"
                    className="app-logo-banner-homepage" />
                <span className="app-text-homepage">
                    Download de<br />My Burger King app!
                </span>
                <span className="arrow-homepage">&#8250;</span>
            </a>
        </div><AppSectionHome></AppSectionHome></>
    );
}

export default HomePage
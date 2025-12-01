import "../css/AppSectionHome.css"
import AppFoto from "../assets/home/burgerKing-app.png";
import QrCode from "../assets/home/Qr-Code-App.png"
import { useNavigate } from "react-router-dom";
function AppSectionHome(){
    const navigate = useNavigate();
    return(
        <section className="app-section-homepage">
             <div className="app-section-left-homepage">
            <img src={AppFoto} alt="app-phone" className="bk-phone-homepage" />
        </div>

        <div className="app-section-right-homepage">
            <h1>Download de <br />My Burger King <br />app!</h1>
            <p>    
            Verzamel BK Coins bij elke (ja echt <b>élke!</b>) bestelling en spaar voor gratis frietjes, snacks, burgers... of een kortingscoupon.
            </p>
            <button className="bk-app-button-homepage" onClick={() => navigate("/myBK")}>Download!</button>
        </div>
        <img src={QrCode} alt="Qr Code" className="qr-code-homepage" />
        </section>
    );
}

export default AppSectionHome
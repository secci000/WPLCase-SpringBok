import "./AppSectionHome.css"
import AppFoto from "./assets/burgerKing-app.png";
function AppSectionHome(){
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
            <button className="bk-app-button-homepage">Download!</button>
        </div>
        <img src="https://burgerking.be/_nuxt/img/app-download-qr-code.972c9d8.png" alt="Qr Code" className="qr-code-homepage" />
        </section>
    );
}

export default AppSectionHome
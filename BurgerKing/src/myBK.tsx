//import NavbarFooter from "./navbarFooter";
import kingdomPhone from "./assets/myBK/kingdom-phone.webp";
import appQR from "./assets/myBK/app-qr-code.webp";
import arrow from "./assets/myBK/arrow.webp";
import kingdomMechanism from "./assets/myBK/kingdom-mechanism.png"
import "./css/myBK.css"
const MyBK = () => {
    return (
        <div>
            <section className="section-download-app">
                <article className="article-left">
                    <img src={kingdomPhone} alt="kingdomPhone" />
                </article>
                <section className="section-right">
                    <article className="article-qr-wrapper">
                        <img className="img-qr" src={appQR} alt="QR" />
                        <img className="img-arrow" src={arrow} alt="arrow" />
                    </article>
                    <article className="article-text-wrapper">
                        <h1>Download de app nu</h1>
                        <p>Download de My Burger King app, spaar BK Coins, geniet en waan je in het koninkrijk der burgers.</p>
                    </article>
                </section>
            </section>
            <section className="section-kingdom-wrapper">
                <section className="section-kingdom-wrapper-content">
                    <img src={kingdomMechanism} alt="kingdomMechanism" />
                </section>
            </section>
        </div>
    );
};

export default MyBK;

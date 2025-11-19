//import NavbarFooter from "./navbarFooter";
import kingdomPhone from "./assets/myBK/kingdom-phone.webp";
import appQR from "./assets/myBK/app-qr-code.webp";
import arrow from "./assets/myBK/arrow.webp";
import kingdomMechanism from "./assets/myBK/kingdom-mechanism.png"
import crownIcon from "./assets/myBK/mybk-crown-icon.png";
import cardCrownIcon from "./assets/myBK/advantage-crown.png";
import cardCoinIcon from "./assets/myBK/advantage-coin.png";
import cardBurgerIcon from "./assets/myBK/advantage-burger.png";
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
                    <h2>Bestel (en eet) meer, win meer</h2>
                    <img className="mechanism-crown-icon-left" src={crownIcon} />
                    <img className="mechanism-crown-icon-right" src={crownIcon} />

                    <p className="bk-coins-text">Met de My Burger King app spaar je bij elke bestelling BK Coins en scoor je gratis producten (denk: burgers, frietjes, snacks of drankjes) of exclusieve kortingen.</p>
                </section>
            </section>
            <section className="section-kingdom-advantages">
                <div className="container-kingdom-advantages">
                    <img src={crownIcon} className="advantages-crown-icon" />
                    <div className="advantages__left">
                        <div className="advantages-text-wrapper">

                            <h2>Burger King <br /> in je zak!</h2>
                            <p>Met My Burger King heb je Burger King altijd in je zak : ontdek coupons, spaar voor gratis producten of bestel vanuit je luie zetel met King&Collect.</p>
                        </div>
                    </div>
                    <div className="advantages__right">
                        <ul className="advantages-card-list">
                            <li className="advantages-card">
                                <div className="advantages-card-header">
                                    <img src={cardCrownIcon} />
                                    <h3>King&Collect</h3>
                                </div>
                                <p>
                                    Via King &amp; Collect kan je lekker vanuit je luie zetel (of van waar dan ook) je bestelling plaatsen bij je favoriete restaurant. Het enige wat je moet doen, is je bestelling zelf komen ophalen.
                                </p>
                            </li>
                            <li className="advantages-card">
                                <div className="advantages-card-header">
                                    <img src={cardCoinIcon} />
                                    <h3>BK Coins?</h3>
                                </div>
                                <p>
                                    Verzamel onze lokale munteenheid, de BK Coins en spaar voor gratis producten.
                                </p>
                            </li>
                            <li className="advantages-card">
                                <div className="advantages-card-header">
                                    <img src={cardBurgerIcon} />
                                    <h3>Verwen jezelf</h3>
                                </div>
                                <p>
                                    Genoeg punten geven recht op gratis snacks, burgers of zelfs een coupon van 10 euro.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="section-steps-wrapper">
                <div className="steps-container">
                    <div className="steps-left">
                        <div className="steps-qr-container">
                            <img src={appQR} className="" />
                        </div>
                        <h2>In 3 <br />stappen</h2>
                    </div>
                    <div className="steps-right">
                        <ol className="steps-list">
                            <li className="steps-list-item">
                                <span className="number">01</span>
                                <div className="p-container">
                                    <p>Download de app My Burger King</p>
                                </div>
                            </li>
                            <li className="steps-list-item">
                                <span className="number">02</span>
                                <div className="p-container">
                                    <p>Scan je BK ID aan de kiosk, kassa of drive.</p>
                                </div>
                            </li>
                            <li className="steps-list-item">
                                <span className="number">03</span>
                                <div className="p-container">
                                    <p>
                                        Spaar voor producten en verwen jezelf!
                                    </p>
                                </div>
                            </li>
                        </ol>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MyBK;

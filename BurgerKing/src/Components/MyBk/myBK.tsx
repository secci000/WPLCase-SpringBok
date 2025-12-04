import kingdomPhone from "../../assets/myBK/kingdom-phone.webp";
import appQR from "../../assets/myBK/app-qr-code.webp";
import arrow from "../../assets/myBK/arrow.webp";
import kingdomMechanism from "../../assets/myBK/kingdom-mechanism.png"
import crownIcon from "../../assets/myBK/mybk-crown-icon.png";
import cardCrownIcon from "../../assets/myBK/advantage-crown.png";
import cardCoinIcon from "../../assets/myBK/advantage-coin.png";
import cardBurgerIcon from "../../assets/myBK/advantage-burger.png";
import "../../css/BKStyles.css"
import { useLanguage } from "../../i18n/LanguageContext";

const MyBK = () => {
    //Language selector system
    const { t } = useLanguage();

    const cards = [
        {
            icon: cardCrownIcon,
            title: t("mybk.cards.kingCollect.title"),
            text: t("mybk.cards.kingCollect.text")
        },
        {
            icon: cardCoinIcon,
            title: t("mybk.cards.bkCoins.title"),
            text: t("mybk.cards.bkCoins.text")
        },
        {
            icon: cardBurgerIcon,
            title: t("mybk.cards.treatYourself.title"),
            text: t("mybk.cards.treatYourself.text")
        }
    ];

    const steps = [
        t("mybk.step1"),
        t("mybk.step2"),
        t("mybk.step3")
    ];

    return (
        <div>
            {/*download app*/}
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
                        <h1>{t("mybk.downloadTitle")}</h1>
                        <p>{t("mybk.downloadText")}</p>
                    </article>
                </section>
            </section>

            {/*kingdom*/}
            <section className="section-kingdom-wrapper">
                <section className="section-kingdom-wrapper-content">
                    <img src={kingdomMechanism} alt="kingdomMechanism" />
                    <h2>{t("mybk.kingdomTitle")}</h2>
                    <img className="mechanism-crown-icon-left" src={crownIcon} />
                    <img className="mechanism-crown-icon-right" src={crownIcon} />
                    <p className="bk-coins-text">{t("mybk.coinsText")}</p>
                </section>
            </section>

            {/*advantages*/}
            <section className="section-kingdom-advantages">
                <div className="container-kingdom-advantages">
                    <img src={crownIcon} className="advantages-crown-icon" />
                    <div className="advantages__left">
                        <div className="advantages-text-wrapper">
                            <h2>Burger King <br />{t("mybk.advantagesText.title")}</h2>
                            <p>{t("mybk.advantagesText.description")}</p>
                        </div>
                    </div>
                    <div className="advantages__right">
                        <ul className="advantages-card-list">
                            {cards.map((card, idx) => (
                                <li key={idx} className="advantages-card">
                                    <div className="advantages-card-header">
                                        <img src={card.icon} alt={card.title} />
                                        <h3>{card.title}</h3>
                                    </div>
                                    <p>{card.text}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/*3 steps*/}
            <section className="section-steps-wrapper">
                <div className="steps-container">
                    <div className="steps-left">
                        <div className="steps-qr-container">
                            <img src={appQR} alt="QR" />
                        </div>
                        <h2>{t("mybk.threeSteps")}</h2>
                    </div>
                    <div className="steps-right">
                        <ol className="steps-list">
                            {steps.map((stepText, idx) => (
                                <li key={idx} className="steps-list-item">
                                    <span className="number">{String(idx + 1).padStart(2, "0")}</span>
                                    <div className="p-container">
                                        <p>{stepText}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </section>

            {/*FAQ*/}
            <section className="section-faq-wrapper">
                <div className="faq-container">
                    <div className="faq-content">
                        <h2>{t("mybk.faq.title")}</h2>
                        <a>{t("mybk.faq.link")}</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MyBK;

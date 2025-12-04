import React from "react";
import "../../css/BKStyles.css";
import { Link } from "react-router-dom";
import imgWoensDeal from "../../assets/BK-Uploads/600_X286_PX_SLIDERS_PRODUCTS_03_b3d0b3947e.jpg";
import imgKingDeal from "../../assets/BK-Uploads/600_X286_PX_SLIDERS_PRODUCTS_033_62431b7cad.jpg";
import imgMixNMatch8 from "../../assets/BK-Uploads/600_X286_PX_SLIDERS_PRODUCTS_034_70a09d4106.jpg";
import imgMixNMatch4 from "../../assets/BK-Uploads/600_X286_PX_SLIDERS_PRODUCTS_035_fd8564a993.jpg";
import imgDriveDeal from "../../assets/BK-Uploads/600_X286_PX_SLIDERS_PRODUCTS_036_b49620.png";


type Deal = {
  id: number;
  title: string;
  priceLabel: string;
  description: string;
  image: string;
  bgColor: string;
};

const deals: Deal[] = [
  {
    id: 1,
    title: "Mix 'n Match €4",
    priceLabel: "€4",
    description:
      "Tussen 4 King Nuggets met een Hamburger of een Cheeseburger, verzekeren wij u dat als het op kiezen aankomt, er alleen maar goede deals zijn. Geniet ook van 2 producten met de Mix 'n Match voor 4€.",
    image: imgMixNMatch4,
    bgColor: "#502315",
  },
  {
    id: 2,
    title: "Mix 'n Match €8",
    priceLabel: "€8",
    description:
      "2 royale burgers voor het bescheiden bedrag van 8€? Ja, we hebben het over de Mix ’n Match 8€. Kies uit de Big King, Crispy Chicken of King Fish.",
    image: imgMixNMatch8,
    bgColor: "#502315",
  },
  {
    id: 3,
    title: "King Deals €5",
    priceLabel: "€5",
    description:
      "Voor €5 krijg je niet alleen servetten in onze King Deals, je krijgt een hele maaltijd. Met een hamburger, een frietje en een drankje, moet er iets voor je bij zitten. Wie zegt immers dat vrijgevigheid duur moet zijn?",
    image: imgKingDeal,
    bgColor: "#F0843A",
  },
  {
    id: 4,
    title: "Woensdeal €11",
    priceLabel: "€11",
    description:
      "Is het al woensdag? Hoeveel dagen tot woensdag? Is het eindelijk woensdag? Waarom is het nog geen woensdag? Er zijn antwoorden die alleen op woensdag kunnen worden gegeven. Profiteer dan van de Woensdeals, elke woensdag met een menu voor volwassenen + een kindermenu voor slechts 11€. Zoals u ziet, is het moeilijk om over Woensdeal te praten zonder het over woensdag te hebben.<br /><br /> Keuze uit de volgende volwassenenmenu’s: Whopper Large Menu, Veggie Whopper Large Menu, Big King Large Menu, Xtra Long Chili Cheese Large Menu, Long Chicken Large Menu en een Crispy Chicken Large Menu.",
    image: imgWoensDeal,
    bgColor: "#1A8637",
  },
  {
    id: 5,
    title: "Drive Deal",
    priceLabel: "vanaf €1,50",
    description:
      "Alléén in de Drive: 4 King Nuggets voor maar € 1,50, een Texas Bacon voor maar € 2,50 en een Crispy Chicken voor maar € 3,50. Kan je niet kiezen? Natuurlijk niet. Dan trakteer je jezelf toch gewoon op alle drie",
    image: imgDriveDeal,
    bgColor: "#F5EBDC",
  },
];

const DealsPage: React.FC = () => {
  return (
    <main className="deals-page">
      <div className="deals-layout">
        <section className="deals-intro">
          <h1>Welkom in de Kingdom van de royale deals</h1>
          <p>
            Maak je klaar om verbaasd te zijn. Ontdek de meest genereuze
            aanbiedingen van onze restaurants.
          </p>

          <Link to="/restaurant" className="deal-button">
            Vind je dichtsbijzijnde Burger King
          </Link>
        </section>

        <section className="deals-list">
          {deals.map((deal) => (
            <article key={deal.id} className="deal-card">
              <div
                className="deal-image-wrapper"
                style={{ backgroundColor: deal.bgColor }}
              >
                <img
                  src={deal.image}
                  alt={deal.title}
                  className="deal-image"
                />
              </div>
              <div className="deal-content">
                <h2>{deal.title}</h2>
                <p className="deal-price">{deal.priceLabel}</p>
                <p dangerouslySetInnerHTML={{ __html: deal.description }} />
                <Link to="/menu" className="deal-button">
                    Menu Bekijken
                </Link>

              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
};

export default DealsPage;

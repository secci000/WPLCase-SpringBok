import Carousel, { CarouselItem } from "./Carousel";

import SmokingMozza from "../assets/home/smoking-mozza.png";
import Nuggets from "../assets/home/nuggets.png";
import TexasBacon from "../assets/home/texas-bacon.png";
import CrispyChicken from "../assets/home/crispy-chicken.png";
import Shakes from "../assets/home/shakes.png";
import CrispyVeggie from "../assets/home/crispy-veggie.png";
import KingDeal from "../assets/home/kingdeal.png";

const CarouselHomePage = () => {
  return (
    <section className="bk-carousel-wrapper-slides">
      <Carousel>

        <CarouselItem>
          <div className="bk-slide">
            <img src={SmokingMozza} className="bk-image-slide" alt="Smoking Mozza" />
            <h1 className="bk-title-slide">Smoking Mozza</h1>
            <p className="bk-desc-slide">Bijna zo cheesy als je favoriete romcom.</p>
            <button className="bk-btn-slide">Ontdek</button>
          </div>
        </CarouselItem>

        <CarouselItem>
          <div className="bk-slide">
            <div className="bk-deal-row-slide">
              <div>
                <img src={Nuggets} className="bk-small-img-slide" alt="4 nuggets" />
                <p className="bk-price-slide">€1,50</p>
              </div>
              <div>
                <img src={TexasBacon} className="bk-small-img-slide" alt="Texas Bacon" />
                <p className="bk-price-slide">€2,50</p>
              </div>
              <div>
                <img src={CrispyChicken} className="bk-small-img-slide" alt="Crispy Chicken" />
                <p className="bk-price-slide">€3,50</p>
              </div>
            </div>

            <h1 className="bk-title">Exclusief aan de Drive</h1>
            <p className="bk-desc">Kleine (of grote) honger onderweg?</p>
            <button className="bk-btn">Ontdek alle deals</button>
          </div>
        </CarouselItem>

        <CarouselItem>
          <div className="bk-slide">
            <img src={Shakes} className="bk-image-slide" alt="Shakes" />
            <h1 className="bk-title-slide">King Shakes</h1>
            <p className="bk-desc-slide">Ready to go bananas?!</p>
            <button className="bk-btn-slide">Ontdek</button>
          </div>
        </CarouselItem>

        <CarouselItem>
          <div className="bk-slide">
            <img src={CrispyVeggie} className="bk-image-slide" alt="Crispy Veggie" />
            <h1 className="bk-title-slide">Crispy Veggie</h1>
            <p className="bk-desc-slide">No chicks allowed. Echt veggie!</p>
            <button className="bk-btn-slide">Proef hem</button>
          </div>
        </CarouselItem>

        <CarouselItem>
          <div className="bk-slide">
            <img src={KingDeal} className="bk-image-slide" alt="King Deal" />
            <h1 className="bk-title-slide">KingDeal €5</h1>
            <p className="bk-desc-slide">King Size. Small Price.</p>
            <button className="bk-btn-slide">Meer weten</button>
          </div>
        </CarouselItem>

      </Carousel>
    </section>
  );
};

export default CarouselHomePage;

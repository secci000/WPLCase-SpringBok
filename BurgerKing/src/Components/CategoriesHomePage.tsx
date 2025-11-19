import { LuLeafyGreen } from "react-icons/lu";
import { FaHamburger } from "react-icons/fa";
import "../css/CategoriesHomePage.css"
import friesImg from "../assets/home/fries.png"
import lettuceImg from "../assets/home/lettuce.png"
const HomeCategory = () => {
  return (
    <div className="bk-category-container">
      <a href="https://burgerking.be/nl/kaart/snacks" className="bk-category left">
        <div className="bk-content">
          <FaHamburger className="bk-icon" />
          <h2>Really good<br />finger food</h2>
          <p>Ontdek onze heerlijke snacks</p>
        </div>
        <img src={friesImg} alt="Fries" className="bk-bg-image-category" />
      </a>
      <a href="https://burgerking.be/nl/kaart/salades" className="bk-category right">
        <div className="bk-content">
          <LuLeafyGreen className="bk-icon" />
          <h2>Going green?</h2>
          <p>Ontdek onze verse, krokante salades</p>
        </div>
        <img src={lettuceImg} alt="Lettuce" className="bk-bg-image-category" />
      </a>
    </div>
  );
};

export default HomeCategory;
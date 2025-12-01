import { LuLeafyGreen } from "react-icons/lu";
import { FaHamburger } from "react-icons/fa";
import "../css/CategoriesHomePage.css"
import friesImg from "../assets/home/fries.png"
import lettuceImg from "../assets/home/lettuce.png"
import { useNavigate } from "react-router-dom";

const HomeCategory = () => {
  const navigate = useNavigate();
  return (
    <div className="bk-category-container">
      <button className="bk-category left" onClick={() => navigate("/menu")}>
        <div className="bk-content">
          <FaHamburger className="bk-icon" />
          <h2>Really good<br />finger food</h2>
          <p>Ontdek onze heerlijke snacks</p>
        </div>
        <img src={friesImg} alt="Fries" className="bk-bg-image-category" />
      </button>
      <button className="bk-category right" onClick={() => navigate("/menu")}>
        <div className="bk-content">
          <LuLeafyGreen className="bk-icon" />
          <h2>Going green?</h2>
          <p>Ontdek onze verse, krokante salades</p>
        </div>
        <img src={lettuceImg} alt="Lettuce" className="bk-bg-image-category" />
      </button>
    </div>
  );
};

export default HomeCategory;
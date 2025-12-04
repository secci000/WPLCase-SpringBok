import burger from "../../assets/menuFilter/burger.svg";
import kid from "../../assets/menuFilter/kid.svg";
import salad from "../../assets/menuFilter/salad.svg";
import sauce from "../../assets/menuFilter/sauce.svg";
import dessert from "../../assets/menuFilter/ice-cream-cone.svg";
import fries from "../../assets/menuFilter/fries.svg";
import drink from "../../assets/menuFilter/drink.svg"; 

const Filter = () => {
    return (
        <>
            {/* Filter */}
            <nav className="navbar-sub">
                <ul className="filter-menu">
                    <li><a href="#">Alles</a></li>
                    <li><a href="#"><img src={burger} alt="burger" /> Burgers</a></li>
                    <li><a href="#"><img src={salad} alt="salad" />Salades</a></li>
                    <li><a href="#"><img src={drink} alt="drink" />Drinks</a></li>
                    <li><a href="#"><img src={dessert} alt="dessert" />Desserten</a></li>
                    <li><a href="#"><img src={fries} alt="fries" />Sides & Snacks</a></li>
                    <li><a href="#"><img src={sauce} alt="sauce" />Sauzen</a></li>
                    <li><a href="#"><img src={kid} alt="kid" />Kids</a></li>
                </ul>
                <ul className="filter-allergens">
                    <li><a href="#">Allergens</a></li>
                </ul>
            </nav>
        </>
    );
};

export default Filter;
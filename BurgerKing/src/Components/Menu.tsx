import menuData from "../menu.ts"
import '../css/Menu.css'
import burger from '../assets/menuFilter/burger.svg'
import salad from '../assets/menuFilter/salad.svg'
import drink from '../assets/menuFilter/drink.svg'
import dessert from '../assets/menuFilter/ice-cream-cone.svg'
import fries from '../assets/menuFilter/fries.svg'
import sauce from '../assets/menuFilter/sauce.svg'
import kid from '../assets/menuFilter/kid.svg'
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
type MenuItem = {
    id: string;
    name: string;
    category: string;
    description_nl: string;
    description_fr: string;
    price: number;
    allergens: [];
    image: string;
}

type MenuCategory = {
    name: string;
    items: MenuItem[];
}

type MenuType = {
    menuItems: MenuCategory[];
}



const Menu: React.FC = () => {
    const data = menuData as MenuType;
    const [selectedFilter, setSelectedFilter] = useState<string>("Alles")
    const navigate = useNavigate();

    const filteredMenu = selectedFilter === "Alles" ? data.menuItems : data.menuItems.filter((category) => category.name === selectedFilter)
    return (
        <>
            <main>
                {/* Filter */}
                <nav className="navbar-sub">
                    <ul className="filter-menu">
                        <li><a href="#" onClick={() => setSelectedFilter("Alles")} className={selectedFilter === "Alles" ? "active" : ""}>Alles</a></li>
                        <li><a href="#" onClick={() => setSelectedFilter("Burgers")} className={selectedFilter === "Burgers" ? "active" : ""}><img src={burger} alt="burger" /> Burgers</a></li>
                        <li><a href="#" onClick={() => setSelectedFilter("Salads")} className={selectedFilter === "Salads" ? "active" : ""}><img src={salad} alt="salad" />Salades</a></li>
                        <li><a href="#" onClick={() => setSelectedFilter("Drinks")} className={selectedFilter === "Drinks" ? "active" : ""}><img src={drink} alt="drink" />Drinks</a></li>
                        <li><a href="#" onClick={() => setSelectedFilter("Desserts")} className={selectedFilter === "Desserts" ? "active" : ""}><img src={dessert} alt="dessert" />Desserten</a></li>
                        <li><a href="#" onClick={() => setSelectedFilter("Sides & Snacks")} className={selectedFilter === "Sides & Snacks" ? "active" : ""}><img src={fries} alt="fries" />Sides & Snacks</a></li>
                        <li><a href="#" onClick={() => setSelectedFilter("Sauces")} className={selectedFilter === "Sauces" ? "active" : ""}><img src={sauce} alt="sauce" />Sauzen</a></li>
                        <li><a href="#" onClick={() => setSelectedFilter("Kids Menu")} className={selectedFilter === "Kids Menu" ? "active" : ""}><img src={kid} alt="kid" />Kids</a></li>
                    </ul>
                    <ul className="filter-allergens">
                        <li><a href="#">Allergenen</a></li>
                    </ul>
                </nav>
                {/* Menu Items */}
                <section className="menu-section">
                    {filteredMenu.map((category) => (
                        <div key={category.name} className="menu-category">
                            <h2 className="menu-category-title">{category.name}</h2>
                            <div className="menu-grid">
                                {category.items.map((item) => (
                                    <div 
                                        key={item.id} 
                                        className="menu-card"
                                        onClick={() => navigate(`/menu/${item.id}`)}
                                        style={{cursor:'pointer'}}>
                                        {item.image && (
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="menu-item-image"
                                            />
                                        )}
                                        <div className="menu-card-content">
                                            <h3 className="menu-item-name">{item.name}</h3>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </section>
            </main>
        </>
    )
}

export default Menu
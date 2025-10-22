import menuData from "./menu.ts"
import './Menu.css'
import burger from './assets/menuFilter/burger.svg'
import salad from './assets/menuFilter/salad.svg'
import drink from './assets/menuFilter/drink.svg'
import dessert from './assets/menuFilter/ice-cream-cone.svg'
import fries from './assets/menuFilter/fries.svg'
import sauce from './assets/menuFilter/sauce.svg'
import kid from './assets/menuFilter/kid.svg'
import React from "react"

type MenuItem = {
    id: string;
    name: string;
    category: string;
    description_nl: string;
    description_fr: string;
    price: number;
    allergens: null;
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
    return (
        <>
            {/* Filter */}
            <main>
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
                {/* Menu Items */}
                <section className="menu-section">
                    {data.menuItems.map((category) => (
                        <div key={category.name} className="menu-category">
                            <h2 className="menu-category-title">{category.name}</h2>
                            <div className="menu-grid">
                                {category.items.map((item) => (
                                    <div key={item.id} className="menu-card">
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
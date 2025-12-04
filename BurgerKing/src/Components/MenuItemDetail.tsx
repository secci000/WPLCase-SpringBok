import { useParams, useNavigate } from "react-router-dom";
import menuData from "../menu";
import '../css/BKStyles.css'
import type React from "react";

const MenuItemDetail: React.FC = () => {
    const { itemId } = useParams<{ itemId: string }>();
    const navigate = useNavigate();
    const data = menuData.menuItems.flatMap((cat) => cat.items);
    const item = data.find((i) => i.id === itemId)

    if (!item) {
        return <p>Item not found!</p>
    }

    return (
        <div className="menu-item-detail">
            <button onClick={() => navigate(-1)} className="back-button">← Back</button>

            <div className="detail-background">
                <div className="detail-content">
                    <img src={item.image} alt={item.name} className="detail-image" />
                    <div className="detail-info">
                        <h1>{item.name}</h1>
                        <p>{item.description_nl}</p>
                        {item.allergens && <p><strong>Allergenen:</strong> {item.allergens + " "}</p>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuItemDetail
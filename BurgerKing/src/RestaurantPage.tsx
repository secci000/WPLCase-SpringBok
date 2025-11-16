import React, { useMemo, useState } from "react";
import { restaurants, type Restaurant } from "./data/restaurants";
import RestaurantMap from "./RestaurantMap";

const RestaurantPage: React.FC = () => {
  const [search, setSearch] = useState("");
  const [onlyOpen, setOnlyOpen] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);

  const filteredRestaurants = useMemo(() => {
    return restaurants.filter((r) => {
      const matchesSearch =
        `${r.name} ${r.street} ${r.postalCode} ${r.city}`
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesOpen = !onlyOpen || r.isOpenNow;

      return matchesSearch && matchesOpen;
    });
  }, [search, onlyOpen]);

  return (
    <div className="page-wrapper">
      <main className="restaurants-layout">
        {/* Linkerkolom: filters + lijst */}
        <section className="restaurants-sidebar">
          <div className="restaurants-search-box">
            <input
              type="text"
              placeholder="Zoek vestiging"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type="button">Zoeken</button>
          </div>

          <div className="restaurants-checkbox">
            <input
              type="checkbox"
              id="openOnly"
              checked={onlyOpen}
              onChange={(e) => setOnlyOpen(e.target.checked)}
            />
            <label htmlFor="openOnly">Alleen open vestigingen</label>
          </div>

          <div className="restaurants-list">
            {filteredRestaurants.map((restaurant) => (
              <article
                key={restaurant.id}
                className={`restaurants-list-item ${
                  selectedRestaurant?.id === restaurant.id ? "is-active" : ""
                }`}
                onClick={() => setSelectedRestaurant(restaurant)}
              >
                <h3>Burger King</h3>
                <p>{restaurant.street}</p>
                <p>
                  {restaurant.postalCode} {restaurant.city}
                </p>

                <div className="restaurants-status-row">
                  <span className="restaurants-status-icon">🕒</span>
                  {restaurant.isOpenNow ? (
                    <>
                      <span>Nu open: {restaurant.openingHours.open} - {restaurant.openingHours.close}</span>
                      <span className="status-dot status-dot--open" />
                    </>
                  ) : (
                    <>
                      <span>Gesloten - Gaat open om {restaurant.openingHours.open}</span>
                      <span className="status-dot status-dot--closed" />
                    </>
                  )}
                </div>
              </article>
            ))}

            {filteredRestaurants.length === 0 && (
              <p className="restaurants-empty">Geen vestigingen gevonden.</p>
            )}
          </div>
        </section>

        {/* Rechterkolom: map */}
        <section className="restaurants-map">
        <RestaurantMap
          restaurants={filteredRestaurants}
          selectedRestaurant={selectedRestaurant}
          onSelect={setSelectedRestaurant}
        />
      </section>
      </main>
    </div>
  );
};

export default RestaurantPage;

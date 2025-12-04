import React from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import type { LatLngExpression } from "leaflet";
import L from "leaflet";
import type { Restaurant } from "../../data/restaurants";

type RestaurantDetailProps = {
  restaurant: Restaurant;
  onBack: () => void;
};

const orangeMarker: L.DivIcon = L.divIcon({
  className: "bk-marker",
  html: "",
  iconSize: [26, 26],
  iconAnchor: [13, 26],
});

const DAYS_ORDER: string[] = ["zo.", "ma.", "di.", "wo.", "do.", "vr.", "za."];

const RestaurantDetail: React.FC<RestaurantDetailProps> = ({
  restaurant,
  onBack,
}) => {
  const center: LatLngExpression = [
    restaurant.latitude,
    restaurant.longitude,
  ];

  const weeklyScheduleBase =
    restaurant.weeklySchedule ??
    [
      { dayShort: "zo.", hours: "08:00 - 21:00" },
      { dayShort: "ma.", hours: "08:00 - 21:00" },
      { dayShort: "di.", hours: "08:00 - 21:00" },
      { dayShort: "wo.", hours: "08:00 - 21:00" },
      { dayShort: "do.", hours: "08:00 - 21:00" },
      { dayShort: "vr.", hours: "08:00 - 21:00" },
      { dayShort: "za.", hours: "08:00 - 21:00" },
    ];

  const today = new Date();
  const todayIndex = today.getDay();
  const todayShort = DAYS_ORDER[todayIndex];

  const weeklySchedule = weeklyScheduleBase.map((d) => ({
    ...d,
    isToday: d.dayShort === todayShort,
  }));

  const paymentMethods =
    restaurant.paymentMethods ?? ["Visa", "MasterCard", "Debit"];
  const tags = restaurant.tags ?? ["burger", "fastfood"];

  return (
    <div className="restaurant-detail-page">
      <button className="detail-back-btn" onClick={onBack}>
        ← Terug naar de kaart
      </button>

      <section className="detail-hero-card">
        <div className="detail-hero-map">
          <MapContainer
            center={center}
            zoom={14}
            scrollWheelZoom={false}
            className="detail-leaflet-map"
          >
            <TileLayer
              url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
              attribution='&copy; OpenStreetMap-bijdragers &copy; CARTO'
            />
            <Marker position={center} icon={orangeMarker} />
          </MapContainer>
        </div>

        <div className="detail-hero-info">
          <div className="detail-hero-text">
            <h1>{restaurant.name}</h1>

            <div className="detail-hero-address-row">
              <p className="detail-address">
                {restaurant.street}, {restaurant.postalCode} {restaurant.city}
              </p>
              <p
                className={
                  restaurant.isOpenNow
                    ? "detail-open-status detail-open"
                    : "detail-open-status detail-closed"
                }
              >
                {restaurant.isOpenNow ? "Nu open" : "Gesloten"}
              </p>
            </div>
          </div>

          <button
            className="detail-route-btn"
            onClick={() => {
              const lat = restaurant.latitude;
              const lng = restaurant.longitude;

              const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=driving`;

              window.open(url, "_blank");
            }}
          >
            Route
          </button>
        </div>
      </section>

      <section className="detail-main-grid">
        <div className="detail-left-column">
          <div className="detail-card">
            <h2 className="detail-card-title">
              <span className="detail-icon">🕒</span> Openingstijden
            </h2>
            <table className="detail-opening-table">
              <tbody>
                {weeklySchedule.map((d) => (
                  <tr key={d.dayShort}>
                    <td
                      className={
                        d.isToday
                          ? restaurant.isOpenNow
                            ? "detail-day detail-day-today"
                            : "detail-day detail-day-closed"
                          : "detail-day"
                      }
                    >
                      {d.dayShort}
                    </td>

                    <td
                      className={
                        d.isToday
                          ? restaurant.isOpenNow
                            ? "detail-hours detail-hours-today"
                            : "detail-hours detail-hours-closed"
                          : "detail-hours"
                      }
                    >
                      {d.hours}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="detail-card">
            <h2 className="detail-card-title">
              <span className="detail-icon">☰</span> Beschrijving
            </h2>
            <p className="detail-description">
              {restaurant.description ??
                "BURGER KING® serveert flame-grilled burgers, knapperige frietjes en frisse dranken in een moderne omgeving."}
            </p>
          </div>
        </div>

        <div className="detail-right-column">
          <div className="detail-card">
            <h2 className="detail-card-title">Betaalmethoden</h2>
            <ul className="detail-payment-list">
              {paymentMethods.map((method) => (
                <li key={method} className="detail-payment-item">
                  <span className="detail-payment-icon">💳</span>
                  <span>{method}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="detail-card">
            <h2 className="detail-card-title">Trefwoorden</h2>
            <div className="detail-tags">
              {tags.map((tag) => (
                <span key={tag} className="detail-tag-badge">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="detail-card">
            <h2 className="detail-card-title">Vergelijkbare vestigingen</h2>
            <ul className="detail-similar-list">
              <li>
                <strong>Burger King Oudergem</strong>
                <br />
                Boulevard du Souverain 240, 1160 Auderghem
                <br />
                <span className="detail-similar-meta">
                  10,12 km afstand van deze locatie · Nu open: 10:30 - 00:00
                </span>
              </li>
              <li>
                <strong>Burger King De Brouckère</strong>
                <br />
                Boulevard Anspach 5, 1000 Bruxelles
                <br />
                <span className="detail-similar-meta">
                  10,69 km afstand van deze locatie · Nu open: 10:30 - 23:30
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RestaurantDetail;

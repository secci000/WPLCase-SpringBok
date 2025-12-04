import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import type { LatLngExpression } from "leaflet";
import L from "leaflet";
import type { Restaurant } from "../../data/restaurants";

type RestaurantMapProps = {
  restaurants: Restaurant[];
  selectedRestaurant: Restaurant | null;
  onSelect: (restaurant: Restaurant) => void;
  onOpenDetail: (restaurant: Restaurant) => void;
};

const defaultCenter: LatLngExpression = [50.85, 4.35];

const orangeMarker: L.DivIcon = L.divIcon({
  className: "bk-marker",
  html: "",
  iconSize: [26, 26],
  iconAnchor: [13, 26],
});

const RestaurantMap: React.FC<RestaurantMapProps> = ({
  restaurants,
  selectedRestaurant,
  onSelect,
  onOpenDetail,
}) => {
  const center: LatLngExpression = selectedRestaurant
    ? [selectedRestaurant.latitude, selectedRestaurant.longitude]
    : defaultCenter;

  return (
    <MapContainer
      center={center}
      zoom={8}
      className="restaurants-leaflet-map"
      scrollWheelZoom={true}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; OpenStreetMap-bijdragers &copy; CARTO'
      />

      {restaurants.map((restaurant) => (
        <Marker
          key={restaurant.id}
          position={[restaurant.latitude, restaurant.longitude]}
          icon={orangeMarker}
          eventHandlers={{
            click: () => onSelect(restaurant),
          }}
        >
          <Popup>
            <div className="map-popup">
              <strong>Burger King</strong>
              <br />
              {restaurant.street}
              <br />
              {restaurant.postalCode} {restaurant.city}
              <br />
              <button
                className="map-popup-detail-btn"
                onClick={() => onOpenDetail(restaurant)}
              >
                Bekijk details
              </button>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default RestaurantMap;

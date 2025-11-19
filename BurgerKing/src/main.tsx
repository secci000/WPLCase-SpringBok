import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./css/index.css";
import "./css/restaurants.css";
import "leaflet/dist/leaflet.css";
import "./leafletFix";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/*<Menu />*/}
    {/*<MyBK/>*/}
    <App/>
  </StrictMode>
);
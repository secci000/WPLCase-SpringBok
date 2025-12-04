import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/BKStyles.css";
import "leaflet/dist/leaflet.css";
import "./leafletFix";
import App from "./App";
import { LanguageProvider } from "./i18n/LanguageContext";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>
);
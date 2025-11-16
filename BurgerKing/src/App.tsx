import { Routes, Route } from "react-router-dom";
import Menu from "./menu.tsx";
import RestaurantPage from "./RestaurantPage.tsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/restaurants" element={<RestaurantPage />} />
      </Routes>
    </>
  );
};

export default App;

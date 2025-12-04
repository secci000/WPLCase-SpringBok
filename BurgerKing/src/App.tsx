import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import MyBK from "./Components/MyBk/myBK.tsx";
import Menu from "./Components/Menu/Menu.tsx";
import NavbarFooter from "./Components/NavbarFooter/navbarFooter.tsx";
import RestaurantPage from "./Components/Restaurant/RestaurantPage.tsx";
import HomePage from "./Components/Home/HomePage.tsx";
import MenuItemDetail from "./Components/Menu/MenuItemDetail.tsx";
import DealsPage from "./Components/Deals/DealsPage.tsx";

const RootLayout = () => {
  return (
    <NavbarFooter>
      <Outlet />
    </NavbarFooter>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/menu", element: <Menu /> },
      { path: "/restaurant", element: <RestaurantPage /> },
      { path: "/myBK", element: <MyBK /> },
      { path: "/menu/:itemId", element: <MenuItemDetail /> },
      { path: "/deals", element: <DealsPage /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

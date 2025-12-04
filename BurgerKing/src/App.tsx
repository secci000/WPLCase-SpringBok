import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import MyBK from "./Components/MyBk/myBK";
import Menu from "./Components/Menu/Menu";
import NavbarFooter from "./Components/NavbarFooter/navbarFooter";
import RestaurantPage from "./Components/Restaurant/RestaurantPage";
import HomePage from "./Components/Home/HomePage";
import MenuItemDetail from "./Components/Menu/MenuItemDetail";
import DealsPage from "./Components/Deals/DealsPage";
import ScrollToTop from "./Components/ScrollToTop";

const RootLayout = () => {
  return (
    <>
      <ScrollToTop />   {/* <== hier plaatsen, BINNEN de router-context */}
      <NavbarFooter>
        <Outlet />
      </NavbarFooter>
    </>
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

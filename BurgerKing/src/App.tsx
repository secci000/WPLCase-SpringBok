import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import MyBK from "./myBK";
import Menu from "./Components/Menu.tsx";
import NavbarFooter from "./Components/navbarFooter";
import RestaurantPage from "./RestaurantPage";
import HomePage from "./Components/HomePage.tsx";
import MenuItemDetail from "./Components/MenuItemDetail.tsx";
// Root-layout: nav + footer staan hier, inhoud via <Outlet/>
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
      { path: "/menu/:itemId", element:<MenuItemDetail/>},

    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import MyBK from "./myBK";
import Menu from "./menu";
import NavbarFooter from "./navbarFooter";

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
      { path: "/", element: <MyBK /> },
      { path: "/menu", element: <Menu /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
<<<<<<< HEAD
import "./index.css";
//import Menu from "./menu.tsx";
import MyBK from "./myBK";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/*<Menu />*/}
    <MyBK/>
=======
import "./css/index.css";
import Menu from "./menu.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Menu />
>>>>>>> main
  </StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css";
//import Menu from "./menu.tsx";
import MyBK from "./myBK";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/*<Menu />*/}
    <MyBK/>
  </StrictMode>
);

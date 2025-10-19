import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
//import Menu from "./menu.tsx";
import MyBK from "./myBK";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/*<Menu />*/}
    <MyBK/>
  </StrictMode>
);

import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import "./css/navFoot.css";
import "./css/reset.css";

const NavbarFooter = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default NavbarFooter;


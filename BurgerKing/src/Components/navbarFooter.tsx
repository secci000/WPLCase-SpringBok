import "../css/reset.css"
import NavBar from "./NavBar";
import Footer from "./Footer";
import "../css/navFoot.css";

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
import "../../css/BKStyles.css"
import NavBar from "./NavBar";
import Footer from "./Footer";

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
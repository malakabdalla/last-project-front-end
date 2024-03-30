import { NavLink, Outlet } from "react-router-dom";
import { Link } from "react-scroll";
import "./PageWrapper.css";
import Footer from "../../components/Footer";

const PageWrapper = () => {
  return (
    <>
      <div>
        <nav className="navigation">
          <div className="logo-scroll">
            <NavLink className="logo" to="/">
              <img
                src="./MotherTongue.svg"
                alt="Mother Tongue Logo"
              />
            </NavLink>

            <Link className="scrollBtn" to="Learn" smooth={true} duration={500}>
              <button>Learn Languages</button>
            </Link>
            <Link className="scrollBtn" to="about" smooth={true} duration={500}>
              <button>About Us</button>
            </Link>
          </div>
          <NavLink to="/login">
            <button className="loginBtn">Get Started</button>
          </NavLink>
        </nav>
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default PageWrapper;

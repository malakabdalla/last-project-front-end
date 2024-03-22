import { NavLink, Outlet } from "react-router-dom";
import { Link } from "react-scroll";
import "./PageWrapper.css";
import Footer from "../../components/Footer";

const PageWrapper = () => {
  return (
    <>
      <div>
        <nav>
          <div>
            <NavLink to="/">
              <img
                src="../../../public/MotherTongue.svg"
                alt="Mother Tongue Logo"
              />
            </NavLink>
          </div>
          <ul>
            <div>
              <Link to="Learn" smooth={true} duration={500}>
                <button>Learn Languages</button>
              </Link>
              <Link to="about" smooth={true} duration={500}>
                <button>About Us</button>
              </Link>
              <NavLink to="/login">
                <button>Get Started</button>
              </NavLink>
            </div>
          </ul>
        </nav>
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default PageWrapper;

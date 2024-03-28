import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "../../../Public/MotherTongue.svg";
import { useAuth } from "../../hooks/useAuth";
import "./header.css";

export default function Header() {
  const { token, logout } = useAuth();

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const options = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: token })
      };
      const response = await fetch(
        `http://localhost:3000/tokens/${token}`,
        options
      );
      await logout();
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <>
      <div>
        <header className="header">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <nav>
            {token && <NavLink to="/language">Learn Languages</NavLink>}
            <NavLink to="/about">About Us</NavLink>
            {token && (
              <NavLink onClick={handleLogout} to="/login">
                Logout
              </NavLink>
            )}
          </nav>
        </header>
      </div>
      <Outlet />
    </>
  );
}

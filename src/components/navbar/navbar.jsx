import "./navbar.scss";
import { HiOutlineMenu } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo image" />
        </div>

        <div className={isActive ? "links_con active " : "links_con"}>
          <NavLink to="/" onClick={() => setIsActive(false)}>
            home
          </NavLink>
          <NavLink to="/about" onClick={() => setIsActive(false)}>
            about us
          </NavLink>
          <NavLink to="/services" onClick={() => setIsActive(false)}>
            services
          </NavLink>
          <NavLink to="/products" onClick={() => setIsActive(false)}>
            products
          </NavLink>
          <NavLink to="/contact" onClick={() => setIsActive(false)}>
            contact us
          </NavLink>
        </div>

        <div className="menu_btn" onClick={() => setIsActive(!isActive)}>
          {isActive ? <IoCloseSharp /> : <HiOutlineMenu />}
        </div>
      </div>
    </nav>
  );
};

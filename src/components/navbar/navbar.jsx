import { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./navbar.scss";

export const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav>
      <div className="container">
        <Link className="logo" to="/">
          <div>
            <img src={logo} alt="logo image" />
          </div>
        </Link>

        <div className={isActive ? "links_con active " : "links_con"}>
          <a href="#" onClick={() => setIsActive(false)}>
            home
          </a>

          <a href="#products" onClick={() => setIsActive(false)}>
            products
          </a>
          <a href="#contact" onClick={() => setIsActive(false)}>
            contact us
          </a>
        </div>

        <div className="menu_btn" onClick={() => setIsActive(!isActive)}>
          {isActive ? <IoCloseSharp /> : <HiOutlineMenu />}
        </div>
      </div>
    </nav>
  );
};

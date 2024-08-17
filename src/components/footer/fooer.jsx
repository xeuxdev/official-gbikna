import "./footer.scss";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { MdLocalPhone } from "react-icons/md";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer>
      <div className="section1">
        <div className="container">
          <div className="txt">
            <p>Ride with us, your future is waiting.</p>
            <h2>ready to work with us?</h2>
          </div>

          <Link to={"/contact"}>
            <button>contact us</button>
          </Link>
        </div>
      </div>

      <div className="section2">
        <div className="container">
          {/* box1 */}
          <div className="box1">
            <div className="logo">
              <img src={logo} alt="logo image" />
            </div>

            <p>
              We're committed to building a better future through technology.
              Our solutions drive business growth while creating positive social
              impact.
            </p>
          </div>

          {/* box2 */}

          <div className="box2">
            <h3>quick links</h3>

            <div className="links">
              <Link to="/">home</Link>
              <Link to="/about">about</Link>
              <Link to="/services">sevices</Link>
              <Link to="/products">products</Link>
              <Link to="/contact">contact us</Link>
            </div>
          </div>

          {/* box3 */}

          <div className="box3">
            <h3>contact</h3>

            <div className="div">
              <p>
                <span>
                  <CiLocationOn />
                </span>
                adress
              </p>
              <p>
                <span>
                  <MdLocalPhone />
                </span>
                081013308
              </p>
              <p>
                <span>
                  <CiMail />
                </span>
                gbikna@gmail.com
              </p>
            </div>
          </div>

          {/* box4 */}

          <div className="box4">
            <h3>socials</h3>

            <div className="div">
              <span>
                <FaFacebookSquare />
              </span>

              <span>
                <FaXTwitter />
              </span>

              <span>
                <FaLinkedin />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="section3">
        <p>&copy; Copyrights. Gbikna. 2024</p>
      </div>
    </footer>
  );
};

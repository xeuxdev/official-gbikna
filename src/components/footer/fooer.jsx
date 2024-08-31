import "./footer.scss";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaInstagram, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot, FaXTwitter } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer>
      <div className="section1">
        <div className="container">
          {/* box1 */}
          <div className="box">
            <h3>products</h3>

            <div className="con">
              <Link to="/" target="_blank">
                olivia
              </Link>
              <Link to="/" target="_blank">
                megaclus
              </Link>
            </div>
          </div>

          {/* box2 */}
          <div className="box">
            <h3>quick links</h3>

            <div className="con">
              <a href="#">home</a>
              <a href="#products">products</a>
              <a href="#contact">contact us</a>
            </div>
          </div>

          {/* box3 */}
          <div className="box">
            <h3>contact</h3>

            <div className="con">
              <p>
                <span>
                  <FaLocationDot />
                </span>
                Lagos, Nigeria
              </p>
              <p>
                <span>
                  <FaPhoneAlt />
                </span>
                09021474294
              </p>
              <p>
                <span>
                  <MdEmail />
                </span>
                info@gbikna.com
              </p>
            </div>
          </div>

          {/* box4 */}
          <div className="box">
            <h3>socials</h3>

            <div className="con2">
              <span>
                <FaInstagram />
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

      <div className="section2">
        <p>&copy; Copyrights. Gbikna. {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

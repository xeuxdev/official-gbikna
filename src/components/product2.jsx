import { ImCheckmark } from "react-icons/im";
import { RiExternalLinkFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import olivia_img from "../assets/olivia.webp";

export const Product2 = () => {
  return (
    <div className="product_con olivia">
      <div className="txt_con" data-aos="fade-left">
        <h3>olivia</h3>
        <div className="txt">
          <p>
            Olivia is an e-commerce solution designed and built to help business
            attain greater heights. With a brilliant suite of tools and
            services, Olivia empowers entrepreneurs and businesses to reach
            their full potential, giving the flexibility and scalability you
            need to thrive in the business world.
          </p>
        </div>
        <ul className="list_con">
          <li>
            <span className="check_mark">
              <ImCheckmark />
            </span>
            Comprehensive Retail Solutions
          </li>
          <li>
            <span className="check_mark">
              <ImCheckmark />
            </span>
            Advanced Self-Service Kiosks
          </li>
          <li>
            <span className="check_mark">
              <ImCheckmark />
            </span>
            Enhanced Agency Banking
          </li>

          <li>
            <span className="check_mark">
              <ImCheckmark />
            </span>
            Checkout by crypto
          </li>

          <li>
            <span className="check_mark">
              <ImCheckmark />
            </span>
            Fully Customizable Website Templates
          </li>
        </ul>

        <div className="btn">
          <Link to="">
            <button>
              learn more{" "}
              <span>
                <RiExternalLinkFill />
              </span>
            </button>
          </Link>
        </div>
      </div>

      <div className="img" data-aos="fade-right">
        <img src={olivia_img} alt="megaclus" />
      </div>
    </div>
  );
};

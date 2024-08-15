import { ImCheckmark } from "react-icons/im";
import { RiExternalLinkFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import olivia_img from "../assets/olivia.webp";

export const Product2 = () => {
  return (
    <div className="product_con olivia">
      <div className="txt_con">
        <h3>olivia</h3>
        <p>
          Olivia is more than just a platform; it's a strategic partner designed
          to drive your business forward. With a comprehensive suite of tools
          and services, Olivia empowers entrepreneurs and businesses to achieve
          their goals. From managing your online store and expanding your
          customer base through agency banking to automating operations with
          AI-powered self-service kiosks, Olivia offers the flexibility and
          scalability you need to succeed. Experience the future of business
          with Olivia.
        </p>
        <ul>
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
            Enhanced Agency Banking for Nigeria
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

      <div className="img">
        <img src={olivia_img} alt="megaclus" />
      </div>
    </div>
  );
};

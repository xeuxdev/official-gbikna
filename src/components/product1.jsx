import { ImCheckmark } from "react-icons/im";
import { RiExternalLinkFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import megaclus_img from "../assets/megaclus.png";

export const Product1 = () => {
  return (
    <div className="product_con megaclus">
      <div className="txt_con" data-aos="fade-right">
        <h3>megaclus</h3>
        <p>
          Megaclus is more than just a social media platform. It's a vibrant
          community where you can connect with friends, discover amazing
          products, and shop effortlessly. Enjoy a seamless blend of social
          interaction and e-commerce as you explore and purchase from a vast
          array of brands and creators.
        </p>
        <ul>
          <li>
            <span className="check_mark">
              <ImCheckmark />
            </span>
            social networking
          </li>
          <li>
            <span className="check_mark">
              <ImCheckmark />
            </span>
            Live Shopping Experiences
          </li>
          <li>
            <span className="check_mark">
              <ImCheckmark />
            </span>
            Interactive Live Shopping
          </li>
          <li>
            <span className="check_mark">
              <ImCheckmark />
            </span>
            secure Payment Integration
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

      <div className="img" data-aos="fade-left">
        <img src={megaclus_img} alt="megaclus" />
      </div>
    </div>
  );
};

import { ImCheckmark } from "react-icons/im";
import { RiExternalLinkFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import megaclus_img from "../assets/megaclus.png";

export const Product1 = () => {
  return (
    <div className="product_con megaclus">
      <div className="txt_con" data-aos="fade-right">
        <h3>megaclus</h3>
        <div className="txt">
          <p>
            Welcome to MEGACLUS, where the world unites in one vibrant social
            space! MEGACLUS connects friends, family, and new acquaintances from
            around the globe, all while offering a bustling marketplace of goods
            and services.
          </p>
          {/* <p>
            Share your stories, explore new cultures, and dive into engaging
            conversations within a friendly, interactive environment. MEGACLUS
            is more than just a social platform; it brings shopping right to
            your fingertips. Browse and order a wide range of products and
            services, and interact with businesses and users in real-time.
          </p> */}

          <p>
            From discovering unique local treasures to connecting with your
            favorite global brands, every interaction on MEGACLUS is an
            opportunity to explore and connect.
          </p>

          {/* <p>Dive in and experience the world like never before.</p> */}
        </div>
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

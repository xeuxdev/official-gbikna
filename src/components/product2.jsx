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
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
          aliquam voluptas odit esse quam maxime saepe minima. Debitis,
          molestiae maiores nemo quia excepturi nam repellendus beatae pariatur
          id dolor voluptatem.
        </p>
        <ul>
          <li>
            <span className="check_mark">
              <ImCheckmark />
            </span>
            Collect one-time and recurring payments from your app or website
          </li>
          <li>
            <span className="check_mark">
              <ImCheckmark />
            </span>
            Make instant transfers
          </li>
          <li>
            <span className="check_mark">
              <ImCheckmark />
            </span>
            Retrieve all your transaction and customer data
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

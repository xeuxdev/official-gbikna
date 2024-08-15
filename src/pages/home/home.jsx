import "./home.scss";
import about_image from "../../assets/about.jpg";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="home_page">
      <section className="home_section">
        <div className="wrapper">
          <div className="container">
            <div className="txt_con">
              <h1>
                Integrated Technology <span>Solutions</span> for Business and
                Society
              </h1>
              <p>
                We provide integrated technology solutions that bridge the gap
                between business efficiency and societal progress. Our offerings
                span across industries, empowering organizations to achieve
                their goals while contributing to a better world.
              </p>

              <div className="btns">
                <button className="trans_btn">contact us</button>
                <button className="trans_btn">our service</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about_section">
        <div className="container">
          <div className="txt_con">
            <span>welcome</span>
            <h2>about gbikna</h2>
            <p>
              Our mission extends beyond profit. We are dedicated to crafting
              innovative technology solutions that not only drive business
              success but also contribute meaningfully to society. By seamlessly
              integrating technology into various sectors, we aim to optimize
              operations, enhance efficiency, and create a positive impact. Our
              commitment lies in building a future where technology serves as a
              catalyst for both economic growth and social progress.
            </p>

            <Link to={"/about"}>
              <button>learn more</button>
            </Link>
          </div>

          <div className="img_con">
            <img src={about_image} alt="about image" />
          </div>
        </div>
      </section>
    </div>
  );
};

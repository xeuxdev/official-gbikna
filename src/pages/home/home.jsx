import "./home.scss";
import about_image from "../../assets/about.jpg";
import { Link } from "react-router-dom";
import { ImCheckmark } from "react-icons/im";
import finance_image from "../../assets/finance.jpg";
import business_image from "../../assets/business.webp";
import infrast_image from "../../assets/infrast.jpg";

export const Home = () => {
  return (
    <div className="home_page">
      <section className="home_section">
        <div className="wrapper">
          <div className="container">
            <div className="txt_con">
              <h1>
                {/* Integrated Technology <span>Solutions</span> for Business and
                Society */}
                Integrated <span>Solutions</span> for a Better World
              </h1>
              <p>
                {/* We provide integrated technology solutions that bridge the gap
                between business efficiency and societal progress. Our offerings
                span across industries, empowering organizations to achieve
                their goals while contributing to a better world. */}
                We offer a comprehensive suite of technology solutions designed
                to drive business growth and societal impact. From financial
                services to infrastructure, we're your partner in innovation.
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

      <div className="services_wrapper">
        <section className="financial_solution_section service_con">
          <div className="container">
            <div className="txt_con">
              <small>Financial Solutions</small>
              <h2>Your Comprehensive Financial Partner</h2>

              <p>
                Gbikna offers a comprehensive suite of financial solutions
                designed to streamline operations and enhance customer
                experiences. We provide innovative tools and platforms to manage
                financial transactions, mitigate risks, and optimize financial
                performance.
              </p>

              <ul>
                <li>
                  <span className="check_mark">
                    <ImCheckmark />
                  </span>
                  POS and ATM Payment Applications Development
                </li>

                <li>
                  <span className="check_mark">
                    <ImCheckmark />
                  </span>
                  Core banking Applications
                </li>

                <li>
                  <span className="check_mark">
                    <ImCheckmark />
                  </span>
                  Payment Gateway
                </li>

                <li>
                  <span className="check_mark">
                    <ImCheckmark />
                  </span>
                  Agency Banking Services
                </li>
                <li>
                  <span className="check_mark">
                    <ImCheckmark />
                  </span>
                  Transport Fare Solutions
                </li>
              </ul>
            </div>

            <div className="img_con">
              <img src={finance_image} alt="image" />
            </div>
          </div>
        </section>

        <section className="business_solution_section service_con">
          <div className="container">
            <div className="txt_con">
              <small>enterprise Solutions</small>
              <h2>Driving Business Efficiency</h2>

              <p>
                Gbikna empowers businesses to achieve operational excellence and
                strategic growth through our enterprise solutions. We offer a
                range of tools and platforms to optimize business processes,
                manage resources effectively, and make data-driven decisions.
              </p>

              <ul>
                <li>
                  <span className="check_mark">
                    <ImCheckmark />
                  </span>
                  Enterprise solutions
                </li>

                <li>
                  <span className="check_mark">
                    <ImCheckmark />
                  </span>
                  Tax management Application
                </li>

                <li>
                  <span className="check_mark">
                    <ImCheckmark />
                  </span>
                  Data Analytics
                </li>
              </ul>
            </div>

            <div className="img_con">
              <img src={business_image} alt="image" />
            </div>
          </div>
        </section>

        <section className="infrastructure_solution_section service_con">
          <div className="container">
            <div className="txt_con">
              <small>infrastructure & operations</small>
              <h2> Empowering Your Enterprise</h2>

              <p>
                Gbikna provides essential infrastructure and operational support
                for business growth and efficiency. We offer solutions to
                optimize systems and processes.
              </p>

              <ul>
                <li>
                  <span className="check_mark">
                    <ImCheckmark />
                  </span>
                  Terminal Management System
                </li>

                <li>
                  <span className="check_mark">
                    <ImCheckmark />
                  </span>
                  Traffic Management Solutions
                </li>
              </ul>
            </div>

            <div className="img_con">
              <img src={infrast_image} alt="image" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

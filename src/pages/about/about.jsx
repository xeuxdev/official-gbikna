import { teams } from "../../components/info";
import "./about.scss";
import image1 from "../../assets/about.jpg";
import image2 from "../../assets/about.png";

export const About = () => {
  return (
    <div className="about_page">
      <div className="header">
        <div className="wrapper">
          <div className="container">
            <h2>about us</h2>
            <p>
              Discover Gbikna's mission to drive progress through technology.
            </p>
          </div>
        </div>
      </div>

      <div className="main_wrapper">
        <div className="container">
          <div className="about_wrapper">
            <div className="about_us con">
              <div className="txt_con">
                <h2>about gbikna</h2>
                <div className="txt">
                  <p>
                    Gbikna is a forward-thinking technology company dedicated to
                    delivering innovative solutions that drive business growth
                    and societal progress. With a focus on financial services,
                    enterprise solutions, and infrastructure, Gbikna empowers
                    organizations to achieve their full potential.
                  </p>
                  <p>
                    Through a comprehensive suite of products and services,
                    Gbikna offers cutting-edge solutions that address the
                    evolving needs of businesses and communities. From
                    developing robust payment systems to optimizing complex
                    operations, Gbikna is committed to providing reliable and
                    efficient technology solutions.
                  </p>

                  <p>
                    With a strong emphasis on innovation and customer
                    satisfaction, Gbikna is shaping the future of technology by
                    delivering exceptional value and creating a lasting impact.
                  </p>
                </div>
              </div>

              <div className="img_con">
                <img src={image1} alt="image" />
              </div>
            </div>

            <div className="our_mission con">
              <div className="txt_con">
                <h2>our mission</h2>
                <div className="txt">
                  <p>
                    Our mission is to be a catalyst for progress by delivering
                    transformative technology solutions. We are dedicated to
                    empowering businesses and communities to achieve their full
                    potential through innovation, efficiency, and
                    sustainability. By leveraging cutting-edge technology and
                    industry expertise, we create value, drive growth, and
                    foster positive change. Gbikna is committed to building a
                    future where technology is a force for good, enhancing lives
                    and strengthening economies.
                  </p>

                  <p>
                    Our solutions extend across various sectors, including
                    finance, enterprise, and infrastructure. Whether it's
                    optimizing financial operations, streamlining business
                    processes, or building robust infrastructure, Gbikna offers
                    tailored solutions to meet the unique needs of our clients.
                    We are committed to fostering long-term partnerships based
                    on trust, reliability, and shared success.
                  </p>
                </div>
              </div>

              <div className="img_con">
                <img src={image2} alt="image" />
              </div>
            </div>
          </div>

          <div className="team_wrapper">
            <h2>our teams</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Assumenda consequatu
            </p>

            <div className="teams_box_con">
              {teams.map((i, key) => {
                return (
                  <div className="box" key={key}>
                    <div className="img">
                      <img src={i.img} alt="image" />
                    </div>

                    <div className="txt">
                      <h4>{i.name}</h4>
                      <p>{i.role}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import { teams } from "../../components/navbar/info";
import "./about.scss";
import image1 from "../../assets/homebg.jpg";
import image2 from "../../assets/1.avif";
import { Parallax } from "react-parallax";

export const About = () => {
  return (
    <div className="about_page">
      <div className="header">
        <div className="wrapper">
          <div className="container">
            <h2>about us</h2>
            <p>
              Because we are simply obsessed with adding value to our client’s
              lives
            </p>
          </div>
        </div>
      </div>

      <div className="main_wrapper">
        <div className="about_wrapper">
          <div className="txt_con">
            <div className="container">
              <h3>about gbikna</h3>
              <div className="txt">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Consequuntur nostrum, laudantium perferendis dolorum, minus
                  illum minima soluta, natus omnis fuga pariatur repudiandae.
                  Fugit, provident. Nulla adipisci corrupti cumque excepturi
                  tempora?
                </p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Consequuntur nostrum, laudantium perferendis dolorum, minus
                  illum minima soluta, natus omnis fuga pariatur repudiandae.
                  Fugit, provident. Nulla adipisci corrupti cumque excepturi
                  tempora?
                </p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Consequuntur nostrum, laudantium perferendis dolorum, minus
                  illum minima soluta, natus omnis fuga pariatur repudiandae.
                  Fugit, provident. Nulla adipisci corrupti cumque excepturi
                  tempora?
                </p>
              </div>
            </div>
          </div>

          {/* <Parallax
            bgImage={image1}
            bgImageAlt="the cat"
            strength={100}
            className="img_con"
          /> */}

          <div className="img_con">
            <img src={image1} alt="image" />
          </div>

          <div className="txt_con">
            <div className="container">
              <h3>our mission</h3>

              <div className="txt">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequatur doloribus eveniet perferendis illum aut magnam
                  placeat quibusdam sint dolores nam, sit velit accusamus
                  praesentium quasi corporis aliquam eius voluptatum excepturi!
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequatur doloribus eveniet perferendis illum aut magnam
                  placeat quibusdam sint dolores nam, sit velit accusamus
                  praesentium quasi corporis aliquam eius voluptatum excepturi!
                </p>
              </div>
            </div>
          </div>

          {/* <Parallax
            bgImage={image2}
            bgImageAlt="the cat"
            strength={100}
            className="img_con"
          /> */}

          <div className="img_con">
            <img src={image2} alt="image" />
          </div>
        </div>

        <div className="team_wrapper">
          <div className="container">
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

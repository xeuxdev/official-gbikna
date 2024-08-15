import { teams } from "../../components/info";
import "./about.scss";
import image1 from "../../assets/homebg.jpg";
import image2 from "../../assets/1.avif";

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
        <div className="container">
          <div className="about_wrapper">
            <div className="about_us con">
              <div className="txt_con">
                <h2>about gbikna</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                  officia velit dolorem accusantium amet quidem id quas ratione
                  maiores distinctio illo sunt voluptatibus, saepe,
                  reprehenderit, mollitia aut! Nisi, reiciendis est! Voluptatum
                  exercitationem laudantium corrupti repudiandae dolor
                  reiciendis repellat aliquid, molestias explicabo ipsam, modi
                  fugit placeat. Quia quam quos iure quod odit laborum corrupti
                  culpa, aliquid excepturi! Hic praesentium ipsa nesciunt! Non
                  quia ullam velit, quasi, in laudantium pariatur nulla fuga
                  voluptate officia laboriosam, possimus est nostrum ipsam eos
                  quidem aperiam? Neque ipsam dolore deleniti suscipit ipsa
                  aperiam id, praesentium aspernatur!
                </p>
              </div>

              <div className="img_con">
                <img src={image1} alt="image" />
              </div>
            </div>

            <div className="our_mission con">
              <div className="txt_con">
                <h2>our mission</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum, incidunt? Iure blanditiis laboriosam ratione totam
                  optio tempore excepturi quas? Quidem impedit atque sint, quod
                  nemo laboriosam omnis. Cumque, quaerat esse? Corrupti veniam
                  amet magni ipsa rem exercitationem alias explicabo tempore, ad
                  consequatur nulla, ex culpa, doloribus tenetur voluptatibus
                  consequuntur facilis praesentium ab modi. Corrupti veritatis
                  ipsam velit adipisci sit hic. Reprehenderit facere natus
                  dolorem eaque possimus id deleniti, laboriosam a quibusdam!
                  Sint quidem eum, dicta expedita necessitatibus eaque! Modi
                  commodi optio voluptate aspernatur esse adipisci dolores,
                  molestias rerum facilis tempore!
                </p>
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

import { services_data } from "../../components/info";
import "./services.scss";

export const Services = () => {
  return (
    <div className="services_page">
      <div className="header">
        <div className="wrapper">
          <div className="container">
            <h2>our services</h2>

            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consequuntur nostrum,
            </p>
          </div>
        </div>
      </div>

      <div className="main_wrapper">
        <div className="container">
          {services_data.map((i, key) => {
            return (
              <div className="box" key={key}>
                <div className="img">
                  <img src={i.img} alt="img" />
                </div>

                <div className="txt_con">
                  <h3>{i.title}</h3>

                  <div
                    className="txt"
                    dangerouslySetInnerHTML={{ __html: i.desc }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

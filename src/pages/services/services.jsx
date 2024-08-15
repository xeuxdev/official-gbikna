import { services_data } from "../../components/info";
import "./services.scss";

export const Services = () => {
  return (
    <div className="services_page">
      {/* header */}
      <div className="header">
        <div className="wrapper">
          <div className="container">
            <h2>our services</h2>

            <p>
              Uncover the solutions that drive your success. Explore our
              services.
            </p>
          </div>
        </div>
      </div>

      {/* main */}

      <div className="main_wrapper">
        {services_data.map((i, key) => {
          return (
            <div className="box" key={key} data-aos="fade-up">
              <div className="container">
                <div className="img" data-aos="fade-right">
                  <img src={i.img} alt="img" />
                </div>

                <div className="txt_con" data-aos="fade-left">
                  <h3>{i.title}</h3>

                  <div
                    className="txt"
                    dangerouslySetInnerHTML={{ __html: i.desc }}
                  ></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

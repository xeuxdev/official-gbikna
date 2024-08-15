import "./home.scss";

export const Home = () => {
  return (
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
              span across industries, empowering organizations to achieve their
              goals while contributing to a better world.
            </p>

            <div className="btns">
              <button className="trans_btn">contact us</button>
              <button className="trans_btn">our service</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

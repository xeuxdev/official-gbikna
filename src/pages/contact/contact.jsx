import { FaSquareFacebook, FaXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";
import { MdLocalPhone, MdOutlineMarkEmailUnread } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import "./contact.scss";

export const Contact = () => {
  return (
    <div className="contact_page">
      {/* header */}
      <div className="header">
        <div className="wrapper">
          <div className="container">
            <h2>contact us</h2>
            <p>
              Reach out to our dedicated team for inquiries, support, or
              partnership opportunities.
            </p>
          </div>
        </div>
      </div>

      {/* main */}

      <div className="main_wrapper">
        <div className="container">
          <div className="txt_con" data-aos="fade-right">
            <div className="info_box">
              <div className="box">
                <span>
                  <SlLocationPin />
                </span>

                <div className="txt">
                  <h4>address</h4>
                  <p>lagos state, nigeria</p>
                </div>
              </div>

              {/* box2 */}

              <div className="box">
                <span>
                  <MdLocalPhone />
                </span>

                <div className="txt">
                  <h4>phone</h4>
                  <p>09021474294</p>
                </div>
              </div>

              {/* box3 */}

              <div className="box">
                <span>
                  <MdOutlineMarkEmailUnread />
                </span>

                <div className="txt">
                  <h4>email</h4>
                  <p>info@gbikna.com</p>
                </div>
              </div>
            </div>

            <div className="work_hours">
              <h4>working hours</h4>
              <p>monday - friday: 8:00am - 5:30pm WAT</p>
            </div>

            <div className="socials_con">
              <h4>follow us </h4>
              <div className="con">
                <span>
                  <FaXTwitter />
                </span>

                <span>
                  <IoLogoLinkedin />
                </span>

                <span>
                  <FaSquareFacebook />
                </span>
              </div>
            </div>
          </div>
          <div className="form_section" data-aos="fade-left">
            <h4>leave a message</h4>

            <form action="#">
              <div className="box_con">
                <div className="input_con">
                  <input type="text" placeholder="Your Name" />
                </div>

                <div className="input_con">
                  <input type="email" placeholder="Your Email" />
                </div>
              </div>
              <div className="input_con">
                <textarea placeholder="Your Message" />
              </div>
              <div className="btn">
                <button>send</button>
              </div>{" "}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

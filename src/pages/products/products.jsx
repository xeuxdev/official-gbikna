import { Product1 } from "../../components/product1";
import { Product2 } from "../../components/product2";
import "./products.scss";

export const Products = () => {
  return (
    <section className="products_page" id="products">
      {/* header */}
      <div className="head">
        <div className="wrapper">
          <div className="container">
            <h2>our products</h2>
            <p>
              Unleash your business potential. Discover our game-changing
              solutions.
            </p>
          </div>
        </div>
      </div>

      {/* main */}

      <div className="main_wrapper">
        <div className="container">
          <Product2 />
          <Product1 />
        </div>
      </div>
    </section>
  );
};

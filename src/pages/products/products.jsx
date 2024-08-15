import { Product1 } from "../../components/product1";
import { Product2 } from "../../components/product2";
import "./products.scss";

export const Products = () => {
  return (
    <div className="products_page">
      {/* header */}
      <div className="header">
        <div className="wrapper">
          <div className="container">
            <h2>our products</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consequuntur nostrum,
            </p>
          </div>
        </div>
      </div>

      {/* main */}

      <div className="main_wrapper">
        <div className="container">
          <Product1 />
          <Product2 />
        </div>
      </div>
    </div>
  );
};

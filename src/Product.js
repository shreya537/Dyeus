import "./Product.css";
import cover from "./cover.png";

import Rating from "./Rating";

function Product() {
  return (
    <>
      <div className="main-image">
        <img src={cover} width="auto" />
      </div>
      <div className="main-text">
        <label>Everyday rinse and reload</label>
      </div>
      <div className="main-text-desc">
        <label>
          Achieve your dream skin goal with this complete package of skincare
          products that will rejuvenate your day.
        </label>
      </div>
      <div className="main-rating">
        <Rating rating={4.5} />
      </div>
      <div className="price">
        <label className="price-og">₹899</label>
        <label className="price-dp">
          <s>₹1299</s>
        </label>
      </div>
    </>
  );
}
export default Product;

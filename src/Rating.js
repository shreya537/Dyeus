import ReactStars from "react-rating-stars-component";
import "./Rating.css";

function Rating(props) {
  return (
    <div className="rating">
      <div className="rating-main">
        <ReactStars
          count={5}
          size={24}
          value={props.rating}
          isHalf={true}
          emptyIcon={<i className="far fa-star"></i>}
          halfIcon={<i className="fa fa-star-half-alt"></i>}
          fullIcon={<i className="fa fa-star"></i>}
          activeColor="#fff"
          color="#217844"
        />
      </div>

      <label className="rating-value">{props.rating}</label>
      <label className="rating-review">Click to read reviews {">"}</label>
    </div>
  );
}

export default Rating;

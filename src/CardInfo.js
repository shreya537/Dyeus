import { AiFillStar } from "react-icons/ai";
import { GiCheckMark } from "react-icons/gi";
import "./Cards.css";
import { useState } from "react";

function CardInfo(props) {
  const [check, setCheck] = useState(false);

  const checker = () => {
    if (check) {
        setCheck(false);
        props.setUpCheck(false);
    }
    else {
        if(!props.upCheck){
            setCheck(true);
            props.setUpCheck(true);
        }
    }
  };

  if (props.offerList.mostPopular === true) {
    return (
      <div className="card-info">
        <GiCheckMark
          style={check ? { color: `white` } : { color: `black` }}
          className="card-tick"
        />
        <div
          className="most-popular"
          onClick={checker}
          style={
            check
              ? { backgroundColor: "#374B5B", border: `3px solid white` }
              : { backgroundColor: "#21272c" }
          }
        >
          <div className="most-popular-left">
            <div className="most-popular-top">
              <AiFillStar />
              <label> MOST POPULAR </label>
              <AiFillStar />
            </div>
            <div className="most-popular-header">{props.offerList.header}</div>
            <div className="most-popular-save-price">
              <label>{props.offerList.savings}</label>
            </div>
            <div className="most-popular-save">
              <label style={{ color: "#24D069" }}>
                {props.offerList.saved}
              </label>
              <label style={{ color: "#DB9D24", marginLeft: `15px` }}>
                Best Results
              </label>
            </div>
          </div>
          <div className="most-popular-right">
            <label style={{ color: "#fff", marginBottom: `5px` }}>
              ₹{props.offerList.price}
            </label>
            <label>
              <s>₹{props.offerList.discPrice}</s>
            </label>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="card-info">
        <GiCheckMark
          style={check ? { color: `white` } : { color: `black` }}
          className="card-tick"
        />

        <div
          className="most-popular"
          onClick={checker}
          style={
            check
              ? { backgroundColor: "#374B5B", border: `3px solid white` }
              : { backgroundColor: "#21272c" }
          }
        >
          <div className="most-popular-left">
            <div className="most-popular-header">{props.offerList.header}</div>
            <div className="most-popular-save-price">
              <label>{props.offerList.savings}</label>
            </div>
            <div className="most-popular-save">
              <label style={{ color: "#24D069" }}>
                {props.offerList.saved}
              </label>
            </div>
          </div>
          <div className="most-popular-right">
            <label style={{ color: "#fff", marginBottom: `5px` }}>
              ₹{props.offerList.price}
            </label>
            <label>
              <s>₹{props.offerList.discPrice}</s>
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default CardInfo;

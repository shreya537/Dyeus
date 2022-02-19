import { useState } from "react";
import CardInfo from "./CardInfo";
import "./Cards.css";

function CardCarouse(){
    const[upCheck,setUpCheck] = useState(false)

    const offerList = [
        {
            id: 1,
            mostPopular: true,
            header: "1 Months Pack ( 4 tubes )",
            savings: "Savings: ₹200",
            saved: "38% Saved",
            isBestResult: true,
            price: 595,
            discPrice: 795,
        },
        {
            id: 2,
            mostPopular: false,
            header: "3 Months Pack ( 12 tubes )",
            savings: "Savings: ₹100",
            saved: "12% Saved",
            isBestResult: false,
            price: 899,
            discPrice: 999,
        }
    ]

    return(
        <div className="cards">
            {offerList.map(data=>(
               <CardInfo offerList={data} upCheck={upCheck} setUpCheck={setUpCheck}/> 
            ))}
        
      </div>
    );

}

export default CardCarouse;
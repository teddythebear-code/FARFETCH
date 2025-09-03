import "./CardItems.css";
import {Link} from "react-router-dom"

import svgIcon1 from "../../../Assets/Svg/favoritesvg/favorite-svgrepo-com.svg";
import svgIcon2 from "../../../Assets/Svg/favoritesvg/favorite-filled-svgrepo-com.svg";

import { useState } from "react";

const CardItems = (props) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="CardItems"> 
      <Link to={props.CardItemLink}>
          <div className="CardItemsImage">
            <img src={props.image} alt={props.image} />

            <p className="Extra">
              
              {props.Extra}

              {/*! Note: add the value to the (<span className="ExtraSpan">Extra 20% off</span>) Extra props if you want to use it*/}

            </p>

            <div
              className="svgIcon"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <div className={hovered ? "onMouseLeavesvgIcon1" : "svgIcon1"}>
                <img src={svgIcon1} alt="icon1" />
              </div>
              <div className={hovered ? "onMouseLeavesvgIcon2" : "svgIcon2"}>
                <img src={svgIcon2} alt="icon2" />
              </div>
            </div>
          </div>

          <div className="CardItemsInfo">
            <div className="CardItemsInfoName">
              <h3>{props.CardItemsInfoName1}</h3>
              <p>{props.CardItemsInfoName2}</p>
            </div>

            <div className="CardItemsInfoPrice">
              <p className="CardItemsInfoPriceOldprice">{props.CardItemsInfoPriceOldprice}</p>
              <p>{props.CardItemsInfoPrice1}</p>
              <p>{props.CardItemsInfoPrice2}</p>
              <p>
                <span className="spanprice">{props.CardItemsInfoPrice3}</span>
              </p>
            </div>
          </div>
        </Link>
    </div>
  );
};

export default CardItems;

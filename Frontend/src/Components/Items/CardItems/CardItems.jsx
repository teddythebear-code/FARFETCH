import "./CardItems.css";
import image from "../../../Assets/Image/1a32a6bf83c17b862cbbfba9fd776f3c.jpg";
import {Link} from "react-router-dom"

import svgIcon1 from "../../../Assets/Svg/favoritesvg/favorite-svgrepo-com.svg";
import svgIcon2 from "../../../Assets/Svg/favoritesvg/favorite-filled-svgrepo-com.svg";

import { useState } from "react";

const CardItems = (props) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="CardItems">
      <div className="CardItemsImage">
        <img src={image} alt="" width={20} />

        <p className="Extra">
          <span className="ExtraSpan">Extra 20% off</span>
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
          <h3>savette</h3>
          <p>small tondo shoulder bag</p>
        </div>

        <div className="CardItemsInfoPrice">
          <p className="CardItemsInfoPriceOldprice">$213</p>
          <p>-20%</p>
          <p>$244</p>
          <p>
            <span className="spanprice">$2,240</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardItems;

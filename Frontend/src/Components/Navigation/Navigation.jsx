import ButtonNav from "./ButtonNav/ButtonNav"
import React, { useState } from "react";

import "./Navigation.css"

const Navigation = (props) => {
  
    function MouseLeave() {
     let dropdown = document.getElementById("dropdown");
     dropdown.classList.add("dropdownhidden")
     dropdown.classList.remove("dropdown")
    }
    
    function MouseEnter() {  
      let dropdown = document.getElementById("dropdown");
      dropdown.classList.add("dropdown")
      dropdown.classList.remove("dropdownhidden")
    }

  

  return (
    <div className="Navigation">


      <nav>
            <ul className="RightNav">
                <li>womenswear</li>
                <li>menswear</li>
                <li>kidswear</li>
            </ul>
            <div className="LogoNav">
                <h1 className="LogoNavname">FARFETCH</h1>
            </div>
            <ul className="LeftNav" >
                <li></li>
                <li><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/></svg></li>
                <li><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg></li>
                <li><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Zm0-80h480v-480h-80v80q0 17-11.5 28.5T600-520q-17 0-28.5-11.5T560-560v-80H400v80q0 17-11.5 28.5T360-520q-17 0-28.5-11.5T320-560v-80h-80v480Zm160-560h160q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720ZM240-160v-480 480Z"/></svg></li>
            </ul>
      </nav>

      <div className="nav2">

        <div className="searchnav">
            <ul>
                <li onMouseEnter={MouseEnter} onMouseLeave={MouseLeave}>20% off </li>
                <li>New in </li>
                <li >Brand </li>
                <li >Clothing </li>
                <li >Shoes </li>
                <li >Bags </li>
                <li >Accessories</li>
                <li >Jewelry </li>
                <li >Homewear </li>
                <li >Pre-owned </li>
                <li >Sale </li>
            </ul>

            <div className="Search">
              <div >

                <div className="svginput" >
                  <label htmlFor="Search"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg></label>
                 <input type="text" id="Search" placeholder="What are you looking for?" />
                </div>
                 <hr />
              </div>
              <div className="addbutton">
                <button className="Searchbutton"></button>
              </div>
            </div>

        </div>



      </div>

      <div id="dropdown" className="dropdown">
        <ButtonNav />
      </div>

    </div>
  )
}


export default Navigation

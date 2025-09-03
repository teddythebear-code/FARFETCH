import './Find_Out_Move.css';
import React, { Links } from 'react-router-dom'

import CardButton from "../Card button/CardButton"

const Find_Out_Move = (props) => {

  return (
    <div className='Find_Out_Move'>
      <div className='Find_Out_Move_info'>
        <Links to={props.Find_Out_Move_link}> <h2>{props.h2.infor}</h2> </Links>
       <Links to={props.Find_Out_Move_link}> <p>{props.p.infor}</p> </Links> 
        <div className='Find_Out_Move_but'>
         <Links to={props.Find_Out_Move_link}> <CardButton/> </Links> 
        </div>
          </div>
      <div className='Find_Out_Move_image'>
        <Links to={props.Find_Out_Move_link}> <img src={props.image} alt={props.imageName} /></Links>
      </div>
    </div>
  )
}

export default Find_Out_Move
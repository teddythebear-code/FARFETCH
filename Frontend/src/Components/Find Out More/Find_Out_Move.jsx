import './Find_Out_Move.css';
import image from "../../Assets/Image/1a32a6bf83c17b862cbbfba9fd776f3c.jpg"
const Find_Out_Move = (props) => {
  
  return (
    <div className='Find_Out_Move'>
      <div className='Find_Out_Move_info'>
        <h2>The best of the new season</h2>
        <p>Discover fall's key pieces from Prada, Miu Miu, Jil Sander and more</p>
        <div className='Find_Out_Move_but'>
          <button>Find Out Move</button>
        </div>
          </div>
      <div className='Find_Out_Move_image'>
        <img src={image} alt="" />
      </div>
    </div>
  )
}

export default Find_Out_Move

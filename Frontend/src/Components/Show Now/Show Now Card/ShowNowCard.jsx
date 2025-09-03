import "./ShowNowCard.css"
import image from "../../../Assets/Image/1a32a6bf83c17b862cbbfba9fd776f3c.jpg"

const ShowNowCard = () => {
  return (
    <div className="ShowNowCard">
        <div className="ShowNowCardImage">
            <img src={image} alt="" />
        </div>
      
      <div className="ShowNowCardText">
        <p className="ShowNowCardTextOne">Le sila</p>
        <p className="ShowNowCardTextTwo">Show Now</p>
      </div>
    </div>
  )
}

export default ShowNowCard

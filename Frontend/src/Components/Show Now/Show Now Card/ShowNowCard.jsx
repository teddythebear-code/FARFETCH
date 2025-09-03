import "./ShowNowCard.css"

const ShowNowCard = (props) => {
  return (
    <div className="ShowNowCard">
        <div className="ShowNowCardImage">
            <img src={props.ShowNowCardImage} alt={props.ShowNowCardImageAlt} />
        </div>
      
      <div className="ShowNowCardText">
        <p className="ShowNowCardTextOne">{props.ShowNowCardTextOne}</p>
        <p className="ShowNowCardTextTwo">{props.ShowNowCardTextOne}</p>
      </div>
    </div>
  )
}

export default ShowNowCard

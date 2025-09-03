import "./ShowNow.css"
import ShowNowCard from "./Show Now Card/ShowNowCard"
import {Link} from "react-router-dom"


const ShowNow = (props) => {
  return (
    <div className="ShowNow">

        <Link to ={props.ShowNowLinkOne}>
            <ShowNowCard/>
        </Link>

        <Link to ={props.ShowNowLinkTwo}>
            <ShowNowCard/>
        </Link>
        
    </div>
  )
}

export default ShowNow

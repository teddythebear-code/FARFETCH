import './Items.css'

import { Link } from 'react-router-dom'

import CardItems from './CardItems/CardItems'
import CardButton from "../Card button/CardButton"

const Items = (props) => {
  return (
    <div className='Items' >
      <div className='ItemsTop'>

        <div className='ItemsTopText'>
          <h2>{props.ItemsTopText}</h2>
        </div>
        <div ><Link to={props.ItemsTopText.Link} >
        <CardButton/>
        </Link>
        </div>
      </div>
      <div className='ItemsCard'>
      <CardItems/>
      <CardItems/>
      <CardItems/>
      <CardItems/>
      </div>
      
    </div>
  )
}

export default Items

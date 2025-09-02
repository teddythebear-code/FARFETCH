import { Link }from 'react-router-dom'
import PropTypes from 'prop-types'

import "./TopBar.css"

const TopBar = (props) => {
  return (
    <div className="TopBar">
      <Link className="LinkTopBar" to={props.LinkTopBar}><p>{props.TopBarName}</p></Link>
    </div>
  )
}
export default TopBar

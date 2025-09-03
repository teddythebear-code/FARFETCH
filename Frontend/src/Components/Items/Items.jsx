import './Items.css'

import CardItems from './CardItems/CardItems'

const Items = () => {
  return (
    <div className='Items' >
      <div className='ItemsTop'>

        <div className='ItemsTopText'>
          <h2>Enjoy 20% off selected styles</h2>
        </div>
        <div >
          <button className='ItemsTopButton'>Shon Now</button>
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

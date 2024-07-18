import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

import './index.css'

const SimpleSlider = props => {
  const {planetsList} = props
  return (
    <div className="background-container" data-testid="planets">
      <Slider>
        {planetsList.map(eachItem => (
          <PlanetItem eachItem={eachItem} key={eachItem.id} />
        ))}
      </Slider>
    </div>
  )
}
export default SimpleSlider

/* 
{planetsList.map(eachItem => (
          <PlanetItem eachItem={eachItem} key={eachItem.id} />
        ))}
*/

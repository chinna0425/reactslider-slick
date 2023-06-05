import './index.css'

const PlanetItem = props => {
  const {eachItem} = props
  const {name, imageUrl, description} = eachItem
  return (
    <div className="inner-background">
      <img src={imageUrl} alt={`planet ${name}`} className="planetImage" />
      <h1 className="headingtitle">{name}</h1>
      <p className="paradescription">{description}</p>
    </div>
  )
}
export default PlanetItem

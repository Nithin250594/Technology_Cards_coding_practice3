// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardTitle, cardDescription, imageUrl, className} = props

  return (
    <li className={`card-container ${className}`}>
      <h1 className="card-title">{cardTitle}</h1>
      <p className="card-description">{cardDescription}</p>
      <img className="image-size" src={imageUrl} alt={cardTitle} />
    </li>
  )
}

export default CardItem

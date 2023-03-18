import { useState } from 'react';
import Card from 'react-bootstrap/Card'
import ReactCardFlip from 'react-card-flip'
import './Card.css'

interface Props {
  imgUrl: string;
}

const CardItem = ({ imgUrl }: Props) => {
  const [hidden, showHidden] = useState(false)
  const [cardClass, setCardClass] = useState('p-0 m-0');

  const handleClick = () => {
    showHidden(true);
  }

  return (
    <ReactCardFlip
      isFlipped={hidden}
      flipSpeedBackToFront={1}
      flipSpeedFrontToBack={1}>
      <Card className={cardClass} onClick={handleClick}>
        <Card.Img style={{ height: "139px" }} src="/images/pokeball.png" />
      </Card>
      <Card className={cardClass} onClick={handleClick}>
        <Card.Img style={{ height: "139px" }} src={imgUrl} />
      </Card>
    </ReactCardFlip>
  )
}

export default CardItem;

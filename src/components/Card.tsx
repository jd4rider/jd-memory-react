import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card'
import ReactCardFlip from 'react-card-flip'
import './Card.css'
import { CardType } from '../App';

interface Props {
  card: CardType;
  onClick: Function;
  index: number;
}

const CardItem = ({ card, onClick, index }: Props) => {
  const [hidden, showHidden] = useState(false)
  const [cardClass, _setCardClass] = useState('p-0 m-0');

  const handleClick = () => {
    showHidden(true);
  }


  return (
    <ReactCardFlip
      isFlipped={!card?.hidden}
      flipSpeedBackToFront={1}
      flipSpeedFrontToBack={1}>
      <Card className={cardClass} onClick={() => { onClick(index) }}>
        <Card.Img style={{ height: "139px" }} src={`${window.location.href}/images/pokeball.png`} />
      </Card>
      <Card className={cardClass}>
        <Card.Img style={{ height: "139px" }} src={window.location.href + card?.image} />
      </Card>
    </ReactCardFlip>
  )
}

export default CardItem;

import { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import CardItem from './Card';
import { CardType } from '../App';

interface Props {
  cards: CardType[];
  setCards: Function;
}


const GridJD = ({ cards, setCards }: Props) => {

  const [prevCardIdx, setPrevCardIdx] = useState<number | null>(null);

  const cardFix = (curridx: number, previdx: number) => {

    let cardsCopy1: CardType[] = [...cards];

    setTimeout(() => {
      cardsCopy1[curridx].hidden = true;
      cardsCopy1[previdx].hidden = true;
      setCards([...cardsCopy1])
    }, 1100)
    setPrevCardIdx(null);
  }

  const handleClick = (idx: number) => {
    let cardsCopy: CardType[] = [...cards];
    cardsCopy[idx].hidden = false;
    if (prevCardIdx != null) {
      if (cardsCopy[idx].type != cardsCopy[prevCardIdx].type) {
        cardFix(idx, prevCardIdx);
      } else {
        setPrevCardIdx(null);
      }
    } else {
      setPrevCardIdx(idx);
    }
    setCards([...cardsCopy]);
  }


  if (cards.length < 1) {
    return <></>
  }


  return (
    <>
      < Row xs={5} className="g-4 p-0 m-0" >
        <Col className="p-0 m-1">
          <CardItem card={cards[0]} onClick={handleClick} index={0} />
        </Col>
        <Col className="p-0 m-1">
          <CardItem card={cards[1]} onClick={handleClick} index={1} />
        </Col>
        <Col className="p-0 m-1">
          <CardItem card={cards[2]} onClick={handleClick} index={2} />
        </Col>
        <Col className="p-0 m-1">
          <CardItem card={cards[3]} onClick={handleClick} index={3} />
        </Col>
      </Row >
      <Row xs={5} className="g-4 p-0 m-0">
        <Col className="p-0 m-1">
          <CardItem card={cards[4]} onClick={handleClick} index={4} />
        </Col>
        <Col className="p-0 m-1">
          <CardItem card={cards[5]} onClick={handleClick} index={5} />
        </Col>
        <Col className="p-0 m-1">
          <CardItem card={cards[6]} onClick={handleClick} index={6} />
        </Col>
        <Col className="p-0 m-1">
          <CardItem card={cards[7]} onClick={handleClick} index={7} />
        </Col>
      </Row>
      <Row xs={5} className="g-4 p-0 m-0">
        <Col className="p-0 m-1">
          <CardItem card={cards[8]} onClick={handleClick} index={8} />
        </Col>
        <Col className="p-0 m-1">
          <CardItem card={cards[9]} onClick={handleClick} index={9} />
        </Col>
        <Col className="p-0 m-1">
          <CardItem card={cards[10]} onClick={handleClick} index={10} />
        </Col>
        <Col className="p-0 m-1">
          <CardItem card={cards[11]} onClick={handleClick} index={11} />
        </Col>
      </Row>
    </>
  )
}

export default GridJD;

import { Row, Col } from 'react-bootstrap'
import CardItem from './Card';
import { CardType } from '../App';

interface Props {
  cards: CardType[];
}


const GridJD = ({ cards }: Props) => {
  console.log(cards[0].image);

  return (
    <>
      <Row xs={5} className="g-4 p-0 m-0">
        <Col className="p-0 m-1">
          <CardItem imgUrl={cards[0]?.image} />
        </Col>
        <Col className="p-0 m-1">
          <CardItem imgUrl={cards[1]?.image} />
        </Col>
        <Col className="p-0 m-1">
          <CardItem imgUrl={cards[2]?.image} />
        </Col>
        <Col className="p-0 m-1">
          <CardItem imgUrl={cards[3]?.image} />
        </Col>
      </Row>
      <Row xs={5} className="g-4 p-0 m-0">
        <Col className="p-0 m-1">
          <CardItem imgUrl={cards[4]?.image} />
        </Col>
        <Col className="p-0 m-1">
          <CardItem imgUrl={cards[5]?.image} />
        </Col>
        <Col className="p-0 m-1">
          <CardItem imgUrl={cards[6]?.image} />
        </Col>
        <Col className="p-0 m-1">
          <CardItem imgUrl={cards[7]?.image} />
        </Col>
      </Row>
      <Row xs={5} className="g-4 p-0 m-0">
        <Col className="p-0 m-1">
          <CardItem imgUrl={cards[8]?.image} />
        </Col>
        <Col className="p-0 m-1">
          <CardItem imgUrl={cards[9]?.image} />
        </Col>
        <Col className="p-0 m-1">
          <CardItem imgUrl={cards[10]?.image} />
        </Col>
        <Col className="p-0 m-1">
          <CardItem imgUrl={cards[11]?.image} />
        </Col>
      </Row>
    </>
  )
}

export default GridJD;

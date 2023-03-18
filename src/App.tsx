import { useEffect, useState } from 'react'
import './App.css'
import GridJD from './components/Grid'
import { Container } from 'react-bootstrap'

export interface CardType {
  id: number
  type: string
  image: string
  hidden: boolean
}

const cardList: CardType[] = [
  {
    id: 0,
    type: 'Pickachu',
    image: '/images/Pickachu.png',
    hidden: true
  },
  {
    id: 1,
    type: 'Bulbasaur',
    image: '/images/Bulbasaur.png',
    hidden: true
  },
  {
    id: 2,
    type: 'ButterFree',
    image: '/images/ButterFree.png',
    hidden: true
  },
  {
    id: 3,
    type: 'Charmander',
    image: '/images/Charmander.png',
    hidden: true
  },
  {
    id: 4,
    type: 'Pidgetto',
    image: '/images/Pidgetto.png',
    hidden: true
  },
  {
    id: 5,
    type: 'Squirtle',
    image: '/images/Squirtle.png',
    hidden: true
  },
  {
    id: 6,
    type: 'Pickachu',
    image: '/images/Pickachu.png',
    hidden: true
  },
  {
    id: 7,
    type: 'Bulbasaur',
    image: '/images/Bulbasaur.png',
    hidden: true
  },
  {
    id: 8,
    type: 'ButterFree',
    image: '/images/ButterFree.png',
    hidden: true
  },
  {
    id: 9,
    type: 'Charmander',
    image: '/images/Charmander.png',
    hidden: true
  },
  {
    id: 10,
    type: 'Pidgetto',
    image: '/images/Pidgetto.png',
    hidden: true
  },
  {
    id: 11,
    type: 'Squirtle',
    image: '/images/Squirtle.png',
    hidden: true
  }

];

function App() {
  const [count, setCount] = useState(0)
  const [cards, setCards] = useState<CardType[]>([])

  useEffect(() => {

    const shuffledCards: CardType[] = cardList.sort(() => Math.random() - 0.5);

    setCards(shuffledCards)

  }, [])


  return (
    <>
      <Container fluid className="p-0" style={{ maxWidth: "650px" }} >
        <h1>JD Memory Game</h1>
        <GridJD cards={cards} setCards={setCards} />
      </Container>
    </>
  )
}

export default App

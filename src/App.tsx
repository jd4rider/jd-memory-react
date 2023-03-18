import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GridJD from './components/Grid'
import { Container } from 'react-bootstrap'

export interface CardType {
  type: string
  image: string
}

function App() {
  const [count, setCount] = useState(0)

  const cardList: CardType[] = [
    {
      type: 'Pickachu',
      image: '/images/Pickachu.png'
    },
    {
      type: 'Bulbasaur',
      image: '/images/Bulbasaur.png'
    },
    {
      type: 'ButterFree',
      image: '/images/ButterFree.png'
    },
    {
      type: 'Charmander',
      image: '/images/Charmander.png'
    },
    {
      type: 'Pidgetto',
      image: '/images/Pidgetto.png'
    },
    {
      type: 'Squirtle',
      image: '/images/Squirtle.png'
    }
  ]

  let doubledCards = cardList.concat(cardList);

  const shuffledCards = doubledCards.sort(() => Math.random() - 0.5);


  return (
    <>
      <Container fluid className="p-0" style={{ maxWidth: "650px" }} >
        <h1>JD Memory Game</h1>
        <GridJD cards={shuffledCards} />
      </Container>
    </>
  )
}

export default App

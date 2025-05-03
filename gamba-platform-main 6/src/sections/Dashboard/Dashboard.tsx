import React from 'react'
import styled from 'styled-components'
import { SlideSection } from '../../components/Slider'
import { GAMES } from '../../games'
import { GameCard } from './GameCard'
import { NewsCarousel } from '../../components/Carousel'
import gambleAware from '../../../public/gambleaware.png'
import MainPage from '../../components/Dashboard'

export function GameSlider() {
  return (
    <SlideSection>
      {GAMES.map((game) => (
        <div key={game.id} style={{ width: '160px', display: 'flex' }}>
          <GameCard game={game} />
        </div>
      ))}
    </SlideSection>
  )
}

const Grid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  @media (min-width: 600px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media (min-width: 800px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
`

export function GameGrid() {
  return (
    <Grid>
      {GAMES.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </Grid>
  )
}

export default function Dashboard() {
  return (
    <>
      <MainPage />
      <NewsCarousel />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src={gambleAware} alt="Gamble Aware" width={300} />
      </div>
      <h1 style={{ textAlign: 'center' }}>GAMES</h1>
      <GameGrid />
    </>
  )
}

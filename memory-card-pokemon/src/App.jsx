import { useState, useEffect } from 'react'
import { PokemonCard } from './components/PokemonCard'
import './App.css'


function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const pokemonNames = ["rattata", "pidgeotto", "beedrill", "weedle", "metapod", "blastoise"]
  return (<>
    <header>
      <div className="game-title">Pokemon Memory Card</div>
      <div className="score-container">
        <div className="score">Score: {score}</div>
        <div className="best-score">Best Score: {bestScore}</div>
      </div>
    </header>
    <div className="pokemon-section">
      {pokemonNames.map(name => (
        <PokemonCard 
        score={score}
        setScore={setScore}
        key={name} 
        name={name}></PokemonCard>
      )
      )}
    </div>
    </>
  )
}

export default App

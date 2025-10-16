import { useState, useEffect } from 'react'
import { PokemonCard } from './components/PokemonCard'
import './App.css'


function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  let pokemonNames = ["rattata", "pidgeotto", "beedrill", "weedle", "metapod", "blastoise"]
  function shuffle(){
    for(let i = 0; i < pokemonNames.length; i++){
      const j = Math.floor(Math.random() * (i + 1));
      [pokemonNames[i], pokemonNames[j]] = [pokemonNames[j], pokemonNames[i]]
    }
    pokemonNames.reverse()
}
shuffle()
  
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

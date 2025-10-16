import { useState, useEffect } from 'react'
import { PokemonCard } from './components/PokemonCard'
import './App.css'


function App() {
  const pokemonNames = ["rattata", "pidgeotto", "beedrill", "weedle", "metapod", "blastoise"]
  return (<>
    <header>
      <div className="game-title">Pokemon Memory Card</div>
      <div className="score-container">
        <div className="score">Score: </div>
        <div className="best-score">Best Score:</div>
      </div>
    </header>
    <div className="pokemon-section">
      {pokemonNames.map(name => (
        <PokemonCard key={name} name={name}></PokemonCard>
      )
      )}
    </div>
    </>
  )
}

export default App

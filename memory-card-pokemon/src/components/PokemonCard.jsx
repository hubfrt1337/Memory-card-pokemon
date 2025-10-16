import { useState, useEffect } from "react"
import "./PokemonCard.css"
export function PokemonCard({name}) {
    const [pokemonData, setPokemonData] = useState(null);
    useEffect(() => {
        const fetchPokemonData = async () => {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
                const data = await response.json()
                setPokemonData(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchPokemonData()
    }, [name])

    return (
        <div className="pokemon-container">{!pokemonData ? ("Loading...")
            : (<>
                <div className="image-container">
                    <img
                        src={pokemonData.sprites.other.dream_world.front_default}
                        alt={pokemonData.name}
                        className="pokemon-image">
                    </img>
                </div>
                <div className="pokemon-name">{pokemonData.name}</div>
            </>
            )
        }</div>
    )
}
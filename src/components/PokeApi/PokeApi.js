import { useEffect, useState } from 'react'

export const PokeApi = () => {

    const [pokemon, setPokemon] = useState(null)
    const [id, setId] = useState(5)

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/' + id)
            .then( (resp) => resp.json() )
            .then((data) => {
                setPokemon(data)
            })
    }, [id])

    const handleSiguiente = () => {
        setId(id+1)
    }

    const handleAnterior = () => {
        setId(id-1)
    }

    return (
        <div>
            <h2>PokeAPi</h2>
            <hr/>
            { pokemon && 
                <div>
                    <h4>{pokemon.name}</h4>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                </div>
            }
            <div>
                <button className="btn btn-danger" onClick={handleAnterior}>Anterior</button>
                <button className="btn btn-danger" onClick={handleSiguiente}>Siguiente</button>
            </div>
        </div>
    )
}
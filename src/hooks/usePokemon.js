import { useState, useEffect } from 'react';

export function usePokemon(id) {
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((res) => res.json())
            .then((data) => setPokemon(data));
    }, [id]);

    return { pokemon };
}

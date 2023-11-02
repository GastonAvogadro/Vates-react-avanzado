import { useState } from 'react';
import { useCounter } from './hooks/useCounter';
import Counter from './components/Counter';
import './App.css';
import Character from './components/Character';
import CountryList from './components/CountryList';
import { usePokemon } from './hooks/usePokemon';
import { useFetch } from './hooks/useFetch';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
    const {counter, increment, decrement} = useCounter(1)
    //const {pokemon} = usePokemon(counter)
    const [data, error, loading] = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`)
    const [value, updateValue] = useLocalStorage('User', "Usuario")

    const handleClick = () => {
        updateValue('Miguel')
    }

    return (
        <>
            {/* <div>
                {loading ? 'loader' : 'renderizas el JSX'}
                <p>{counter}</p>
                
                
                <button onClick={decrement}>-</button>
                <button onClick={increment}>+</button>
                <p>{data?.name}</p>
                <img src={data?.sprites.front_default} alt="" />
            </div> */}

            <div>
                <button onClick={handleClick}>Click</button>
                <h3>Hola {value}!</h3>
            </div>
        </>
    );
}

export default App;

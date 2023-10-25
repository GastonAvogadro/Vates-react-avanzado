import { useState, useEffect } from 'react'

function Counter(props) {
    const [counter, setCounter] = useState(0)

    useEffect(()=> {
        console.log('Corrió la función del useEffect');
    }, []) // Si dejamos el array vacío el useEffect se ejecutará 1 sola vez

    return (
        <div>
            <h3>{props.name}</h3>
            <p>{counter}</p>
            {/* El evento onClick ejecturá una función al hacer click */}
            <button onClick={()=> setCounter(counter + 1)}>+</button>
        </div>
    );
}

export default Counter;

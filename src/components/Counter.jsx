import { useState, useEffect } from 'react';

function Counter(props) {
    const [counter, setCounter] = useState(0);

    useEffect(()=> {
        console.log('Corrió la función del useEffect');
    }, []) // Si dejamos el array vacío el useEffect se ejecutará 1 sola vez

    const handleCounter = () => {
        setCounter((prevCounter) => prevCounter + 1);
        // PrevCounter nos da el estado actualizado

        if (counter >= 5) {
            setCounter((prevCounter) => prevCounter + 1);
        }
    };

    console.log('Render de Counter');

    return (
        <div>
            <h3>{props.name}</h3>
            <p>{counter}</p>
            {/* El evento onClick ejecutará una función al hacer click */}
            <button onClick={handleCounter}>+</button>
        </div>
    );
}

export default Counter;

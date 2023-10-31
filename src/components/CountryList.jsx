import { useState, useRef } from 'react';
import FormattedData from './FormattedData';

const data = [
    { id: 1, name: 'Argentina' },
    { id: 2, name: 'Estados Unidos' },
    { id: 3, name: 'España' },
    { id: 4, name: 'Francia' },
    { id: 5, name: 'Italia' },
];

function CountryList() {
    const [countries, setCountries] = useState(data);
    const [counter, setCounter] = useState(0)
    const inputRef = useRef(null)
    
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(inputRef.current.value)
        const newObj = {id: `${countries.length + 1}`, name: inputRef.current.value}
        setCountries([...countries, newObj])
        inputRef.current.value = ''
    }

    console.log('Render de CountryList');

    return (
        <div>
            <button onClick={()=> setCounter(prev => prev + 1)}>{counter}</button>
            <form onSubmit={handleSubmit}>
                <input ref={inputRef} type="text" placeholder='Add city...' />
                <button type='submit'>Send</button>
            </form>
            <FormattedData countries={countries} />
        </div>
    );
}

export default CountryList;

//--- Formulario controlado con useState ---

// const data = [
//     { id: 1, name: 'Argentina' },
//     { id: 2, name: 'Estados Unidos' },
//     { id: 3, name: 'España' },
//     { id: 4, name: 'Francia' },
//     { id: 5, name: 'Italia' },
// ];

// function CountryList() {
//     const [countries, setCountries] = useState(data);
//     const [input, setInput] = useState('')
    
//     const handleSubmit = (event) => {
//         event.preventDefault()
//         const newObj = {id: `${countries.length + 1}`, name: input}
//         setCountries([...countries, newObj])
//     }

//     const handleChange = (event)=> {
//         const value = event.target.value
//         setInput(value)
//         console.log(value);
//     }

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <input onChange={handleChange} value={input} type="text" placeholder='Add city...' />
//                 <button type='submit'>Send</button>
//             </form>
//             <ol>
//                 {countries.map((country) => (
//                     <li key={country.id}>{country.name}</li>
//                 ))}
//             </ol>
//         </div>
//     );
// }

// export default CountryList;
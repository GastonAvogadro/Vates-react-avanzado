import { useState } from 'react';
import Counter from './components/Counter';
import './App.css';
import Character from './components/Character';

function App() {
    const [toggle, setToggle] = useState(false)

    console.log('Render de App');
    return (
        <>
            {/* Llamamos al componente Counter y le pasamos un nombre por props /> */}
            {/* <button onClick={()=> setToggle(!toggle)}>{toggle ? 'Off' : 'On'}</button>
            <Counter name='Counter'/> */}
            <Character />
        </>
    );
}

export default App;

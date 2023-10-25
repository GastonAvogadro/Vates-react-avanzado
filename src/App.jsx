import Counter from './components/Counter';
import Character from './components/Character';
import './App.css';

function App() {
    return (
        <>
            {/* Llamamos al componente Counter y le pasamos un nombre por props /> */}
            <Counter name='Counter'/>
        </>
    );
}

export default App;

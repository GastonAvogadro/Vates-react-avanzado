import { useEffect, useState } from 'react';

function Character() {
    const [data, setData] = useState({});
    const [id, setId] = useState(1);

    const abortController = new AbortController()
    const signal = abortController.signal

    useEffect(() => {
        setTimeout(()=> fetch(`https://rickandmortyapi.com/api/character/${id}`, {signal})
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch(error => console.error(error)), 2000)

        return () => abortController.abort()
    
    }, [id]);    

    useEffect(()=> {
        // Creamos el evento del navegador document.body.addEventListener('scroll', function)

        return () => {
            //Removemos el evento document.body.removeEventListener('scroll', function)
        }
        
    }, [])

    const handleCounter = () => {
        setId((prevId) => prevId + 1);
    }

    return (
        <section>
            <div>
                <p>{id}</p>
                <button onClick={handleCounter}>+</button>
            </div>
            <article>
                <p>{data.name}</p>
                <img src={data.image} alt={data.name} />
            </article>
        </section>
    );
}

export default Character;

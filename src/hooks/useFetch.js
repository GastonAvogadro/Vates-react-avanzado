import { useState, useEffect } from 'react';

export function useFetch(url) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        fetch(url)
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((err)=> setError(true))
            .finally(()=> setLoading(false))
    }, [url]);

    return [ data, error, loading ];
}

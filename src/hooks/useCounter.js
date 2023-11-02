import { useState } from 'react';

export function useCounter(initialValue = 0) {
    const [counter, setCounter] = useState(initialValue);

    const increment = () => {
        if (counter < 10) {
            setCounter((prev) => prev + 1);
        }
    };

    const decrement = () => {
        if (counter > 0) {
            setCounter((prev) => prev - 1);
        }
    };

    return { counter, increment, decrement };
}

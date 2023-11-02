import { useState } from 'react';

export function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        try {
            const storedValue = window.localStorage.getItem(key);
            return storedValue !== null ? JSON.parse(storedValue) : initialValue;
        } catch {
            return initialValue;
        }
    });

    const updateValue = (newValue) => {
        try {
            setValue(newValue);
            window.localStorage.setItem(key, JSON.stringify(newValue));
        } catch (err) {
            console.log(err);
        }
    };

    return [value, updateValue];
}

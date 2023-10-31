import { useMemo } from 'react';

function FormattedData({ countries }) {
    console.log('Render de FormattedData');

    // La función sólo se ejecutará cuando la dependencia "countries" sea modificada
    const data = useMemo(() => {
        console.log('Se formateó la información');
        return countries.map((country) => <li key={country.id}>{country.name}</li>);
    }, [countries]);

    return data;
}
export default FormattedData;

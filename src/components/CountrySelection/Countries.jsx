import {useState, useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';
import {fetchCountries} from '../../api';

import s from './countySelection.module.css'


const Countries = ({handleCountyChange}) => {
    const [fetchedCountries, setFetchCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchCountries(await fetchCountries());
        }
        fetchAPI();
    }, [setFetchCountries])

    return (
        <FormControl className={s.formControl}>
            <NativeSelect defaultValue='' onChange={(e) => handleCountyChange(e.target.value)}>
                <option value="">Весь мир</option>
                {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default Countries;
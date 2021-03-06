import {useEffect, useState} from 'react';
import {Cards, Chart, Countries} from './components';
import {fetchData} from './api'

import s from './App.module.css'
import covid from './images/image.png';



function App() {
    const [data, setData] = useState({}),
          [country, setCountry] = useState('');

    useEffect (   ()  =>  {
       const getData = async () => {
           setData(await fetchData())
       }
       getData();
    }, [])

    const handleCountyChange = async (country) => {
        const fetchedData = await fetchData(country);

      setData(fetchedData);
      setCountry(country);
    }

    return (
    <div className={s.container}>
      <img src={covid} className={s.image} alt="COVID-19"/>
      <Cards data={data}/>
      <Countries handleCountyChange={handleCountyChange}/>
      <Chart data={data} country={country}/>
    </div>
  );
}
export default App;

import {useState, useEffect} from 'react';
import {fetchDailyData} from '../../api';
import {Line, Bar} from 'react-chartjs-2';

import s from './chart.module.css';

const Chart = ({data: {confirmed, recovered, deaths}, country}) => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData())
        }
        fetchAPI();
    }, []);
    const lineChart = (
       dailyData.length  ? <Line
            data={{
                labels: dailyData.map(({date}) => date),
                datasets: [{
                    data: dailyData.map(({confirmed}) => confirmed),
                    label: 'Число инфецированых',
                    borderColor: '#3333ff',
                    fill:true
                }, {
                    data: dailyData.map(({deaths}) => deaths),
                    label: 'Число летальных исходов',
                    borderColor: 'red',
                    backgroundColor: 'rgba(255, 0, 0, .5)',
                    fill:true
                }],

            }}
        /> : null
    );
    const barChart = (
      confirmed
      ? (
          <Bar
              data={{
                labels: ['Инфецировано', 'Выздоровело', 'Летальные исходы'],
                datasets: [{
                    label: 'Люди',
                    backgroundColor: [
                        'rgba(0, 0, 255, .5)',
                        'rgba(0, 255, 0, .5)',
                        'rgba(255, 0, 0, .5)'
                    ],
                    data: [confirmed.value, recovered.value, deaths.value]
                }]
              }}
              options={{
                  legend: { display: false },
                  title: { display: true, text:`Актуальная статистика  ${country}`}
              }}
          />
          ) : null
    );

    return <div className={s.container}>
        {country ? barChart : lineChart}
    </div>
}

export default Chart;
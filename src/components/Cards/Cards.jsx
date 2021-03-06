import {Card, CardContent, Typography, Grid} from "@material-ui/core";
import CountUp from "react-countup";

import cx from 'classnames';
import s from './cards.module.css';

const Cards = ({data: {confirmed, recovered, deaths, lastUpdate}}) => {
    if(!confirmed) {
        return 'Loading...'
    }
    console.log()
    return <div className={s.container}>
        <Grid container spacing={3} justify="center">
            <Grid item component={Card} xs={12} md={3} className={cx(s.card, s.infected)}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Инфецировано</Typography>
                    <Typography variant="h5">
                        <CountUp
                        start={0}
                        end={confirmed.value}
                        duration={2.5}
                        separator={','}
                        />
                    </Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toLocaleDateString()}</Typography>
                    <Typography variant="body2">Число заболевших на COVID-19</Typography>
                </CardContent>
            </Grid>
            <Grid item component={Card} xs={12} md={3} className={cx(s.card, s.recovered)}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Выздоровело</Typography>
                    <Typography variant="h5"> <CountUp
                        start={0}
                        end={recovered.value}
                        duration={2.5}
                        separator={','}
                    /></Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toLocaleDateString()}</Typography>
                    <Typography variant="body2">Число вылечившихся от  COVID-19</Typography>
                </CardContent>
            </Grid>
            <Grid item component={Card} xs={12} md={3} className={cx(s.card, s.deaths)}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Летальные исходы</Typography>
                    <Typography variant="h5"> <CountUp
                        start={0}
                        end={deaths.value}
                        duration={2.5}
                        separator={','}
                    /></Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toLocaleDateString()}</Typography>
                    <Typography variant="body2">Число умерших от  COVID-19</Typography>
                </CardContent>
            </Grid>
        </Grid>
    </div>
}

export default Cards;
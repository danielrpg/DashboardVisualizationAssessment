import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
import CardHeader from './CardHeader';
import { RootState } from '../redux/reducers/rootReducer';
import { fetchMetricsRequest } from '../redux/actions/metricsActions/metricsActions';
import { IMetric } from '../model/IMetric'
import ChartViewer from './ChartViewer';

const useStyles = makeStyles({
    card: {
        margin: '5% 5%',
    },
});

export default () => {
    const dispatch = useDispatch();
    const { metrics } = useSelector(
        (state: RootState) => state.metrics
    );
    const classes = useStyles();
    const [metricValue, setMetricValue] = useState<IMetric[]>([]);
    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];

    useEffect(() => {
        dispatch(fetchMetricsRequest());
    }, []);

    const handleChange = (event: any) => {
        setMetricValue(event.target.value);
    };
    return (
        <Card className={classes.card}>
            <CardHeader title="Daniel's Visualization" />
            <CardContent>
                <InputLabel id="demo-mutiple-name-label">Visualization</InputLabel>
                <Select
                    labelId="demo-customized-select-label"
                    id="demo-customized-select"
                    value={metricValue}
                    onChange={handleChange}
                    input={<Input />}
                >
                    <MenuItem value=''><em>Select one of the option</em></MenuItem>
                    {metrics.length > 0 && metrics.map((metric) => (
                        <MenuItem key={metric.value} value={metric.value}>
                            {metric.metric}
                        </MenuItem>
                    ))}
                </Select>
                <ChartViewer data={data} />
            </CardContent>
        </Card>
    );
};

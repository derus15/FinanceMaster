import React from 'react';
import {useEffect, useState} from "react";
import {Line} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Legend,
} from 'chart.js';

const Chart = ({price}) => {

    const width = '82%';
    const height = '90%';

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Legend,
    );

    const options = {
        animation: {
            duration: 500,
        },
        plugins: {
            legend: {
                display: false,
                labels: {
                    font: {
                        size: 14,
                        family: 'Montserrat, sans-serif',
                    },
                },
            },
        },
    };

    const [data, setData] = useState({
        labels: [],
        datasets: [
            {
                label: 'cost',
                data: [],
                fill: false,
                backgroundColor: 'rgb(75, 192, 192)',
                borderColor: 'rgb(75, 192, 192)',
            }
        ]
    });

    const generateLabel = () => {

        const newLabels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'n - 1', 'n'];

        for (let i = 11; i < data.datasets[0].data.length + 1; i++) {
            newLabels.push(i);
        }
        return newLabels;
    };

    useEffect(() => {

        setData(prevData => {

            const newData = {...prevData};

            newData.datasets[0].data.push(price);
            newData.labels = generateLabel();

            return newData;
        });

    }, [data.datasets[0].data, price]);

    return (
        <div style={{width: width, height: height}}>
            <Line options={options} data={data} style={{width: width, height: height}}/>
        </div>
    );
};

export default Chart;
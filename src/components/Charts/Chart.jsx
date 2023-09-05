import React from 'react';
import {Line} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

const Chart = () => {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend,
    );

    const options = {
        labels: [1,2,3],
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    font: {
                        size: 15,
                        family: 'Montserrat, sans-serif',
                    },
                },
            },
        },
    };

    const data = {
        datasets: [
            {
                id: 1,
                backgroundColor: 'red',
                borderColor: 'red',
                label: '11',
                data: [1,2],
            },
            {
                id: 2,
                backgroundColor: 'red',
                borderColor: 'red',
                label: '112',
                data: [1,3],
            },
        ],
    }

    return (

        <div style={{width: '90wh', height: '90vh'}}>
            <Line options={options} data={data}/>
        </div>
    );
};

export default Chart;
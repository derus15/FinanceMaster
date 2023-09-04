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
            labels: [],
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
                    label: '11',
                    data: [5, 6, 7],
                },
                {
                    id: 2,
                    label: '112',
                    data: [3, 2, 1],
                },
            ],
        }


        return (

            <div style={{width: '100wh', height: '90vh'}}>
                <Line options={options} datasetIdKey='id' data={data}/>
            </div>
        );
    }
;

export default Chart;
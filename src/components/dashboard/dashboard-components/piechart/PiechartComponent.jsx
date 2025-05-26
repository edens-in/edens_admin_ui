import React from 'react';
import './Styles.css';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { useState } from 'react';

// ChartJS.register(ArcElement, Tooltip, Legend);
const PiechartComponent = ({ dataSets }) => {
    const [timeframe, setTimeframe] = useState("today");
    const labels = ["Facebook", "Google", "Twitter"]; 
    const backgroundColors = ["#FF6384", "#36A2EB", "#FFCE56"];
    const data = {
        labels: [],
        datasets: [
            {
                data: dataSets[timeframe],
                backgroundColor:  backgroundColors,
            },
        ],
    };

    return (
        <div className="piechart-container">
            <div className='piechart-parameter'>
                <span className='paragrph1'>Marketing</span>
                <div className="custom-select" >
                    <select onChange={(e) => setTimeframe(e.target.value)} value={timeframe}>
                        <option value="today">Today</option>
                        <option value="week">This Week</option>
                        <option value="month">This Month</option>
                    </select>
                </div>
            </div>
            <div className="custom-labels">
                {labels.map((label, index) => (
                    <div key={index} className="label-item">
                        <span className="label-color" style={{ backgroundColor: backgroundColors[index] }}></span>
                        <span className="label-text">{label}</span>
                    </div>
                ))}
            </div>
            <div className='piechart'>
                <Doughnut
                    data={data}
                    style={{width: '200px', height: '200px'}}
                />
            </div>

        </div>
    )
}

export default PiechartComponent
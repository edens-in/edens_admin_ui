import React from 'react'
import { Bar } from 'react-chartjs-2';
import { useState } from 'react';
import "./Styles.css"


const generateData = (days, type) => {
    // Get today's date
    const today = new Date();

    const labels = Array.from({ length: days }, (_, i) => {
        // Subtract i days from the current date
        const date = new Date(today);
        date.setDate(today.getDate() - i);

        // Format the date to get "17th Sept", "16th Sept", etc.
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'short' }); // Get the month abbreviation (e.g., "Sept")
        const suffix = (day % 10 === 1 && day !== 11) ? 'st' :
            (day % 10 === 2 && day !== 12) ? 'nd' :
                (day % 10 === 3 && day !== 13) ? 'rd' : 'th';

        return `${day}${suffix} ${month}`;
    });
    labels.reverse();
    const data = Array.from({ length: days }, () =>
        type === "Sales Amount" ? Math.floor(Math.random() * 1000) : Math.floor(Math.random() * 100)
    );

    return { labels, data };
};



const Barchart = ({ timeRanges, dataTypes }) => {
    const [selectedRange, setSelectedRange] = useState("Last 7 Days");
    const [selectedType, setSelectedType] = useState("Sales Amount");
    const { labels, data } = generateData(timeRanges[selectedRange], selectedType);

    const chartData = {
        labels,
        datasets: [
            {
                label: `${selectedRange} - ${selectedType}`,
                data,
                backgroundColor: "rgba(75, 192, 192, 0.6)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,
            },
        ],
    };
    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            x: {
                grid: {
                    display: false, // Disable grid lines on x-axis
                },
            },
            y: {
                grid: {
                    display: false, // Disable grid lines on y-axis
                },
            },
        },
    };
    return (
        <div className="barchart-container">
            <div className='barchart-select'>
                <div className="barchart-dropdown-group">
                    <select onChange={(e) => setSelectedRange(e.target.value)} value={selectedRange}>
                        {Object.keys(timeRanges).map((range) => (
                            <option key={range} value={range}>{range}</option>
                        ))}
                    </select>
                </div>
                <div className="barchart-dropdown-group">
                    <select onChange={(e) => setSelectedType(e.target.value)} value={selectedType}>
                        {dataTypes.map((type) => (
                            <option key={type} value={type}>{type}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className='barchart'> <Bar data={chartData} options={chartOptions} /></div>
        </div>
    )
}

export default Barchart; 
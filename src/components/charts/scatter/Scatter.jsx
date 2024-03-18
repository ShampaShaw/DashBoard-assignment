import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './scatter.css';

const data = [
    { year: 2015, customerName: 5 },
    { year: 2016, customerName: 1 },
    { year: 2017, customerName: 2 },
    { year: 2015, customerName: 2 },
    { year: 2016, customerName: 5 },
    { year: 2017, customerName: 1 },
    { year: 2018, customerName: 1 },
    { year: 2019, customerName: 5 },
    { year: 2020, customerName: 5 },
    { year: 2021, customerName: 8 },
    { year: 2022, customerName: 10 },
    { year: 2023, customerName: 1 },
    { year: 2024, customerName: 1 },
];

function Circular() {
    // Find the maximum value of customerName in the data array
    const maxValue = Math.max(...data.map(entry => entry.customerName));
    // Calculate the domain for the Y-axis
    const yDomain = [0, maxValue > 8 ? maxValue + 2 : 10]; // Adjust the domain if maxValue is greater than 8

    return (
        <div className='circular'>
        <div className='title1'>New Customers</div>
            <ResponsiveContainer width="100%" aspect={2 / 1.5}>
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <YAxis domain={yDomain} />
                    <XAxis dataKey="year" />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="customerName" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
                <div className='title1'>New Customers VS Year</div>
            </ResponsiveContainer>
        </div>
    );
}

export default Circular;

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './line.css';

const data = [
    { name: 'Jan', Revenue: 4000 },
    { name: 'Feb', Revenue: 3000 },
    { name: 'Mar', Revenue: 2000 },
    { name: 'Apr', Revenue: 2780 },
    { name: 'May', Revenue: 1890 },
    { name: 'Jun', Revenue: 2390 },
    { name: 'Jul', Revenue: 3490 },
    { name: 'Aug', Revenue: 3490 },
    { name: 'Sep', Revenue: 3490 },
    { name: 'Oct', Revenue: 3490 },
    { name: 'Nov', Revenue: 3490 },
    { name: 'Dec', Revenue: 3490 },
];

function LineC() {
    return (
        <div className='line'>
            <div className='title1'>Revenue</div>
            <ResponsiveContainer width="100%" aspect={2 / 1.5}>
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Revenue" stroke="#82ca9d" />
                </LineChart>
                <div className='title1'>Revenue VS Month</div>
            </ResponsiveContainer>
        </div>
    );
}

export default LineC;

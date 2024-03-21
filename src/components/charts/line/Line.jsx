import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './line.css';

function LineC({ data }) {
  // Preprocess the data to contain only 'Revenue' and 'month' properties
  const randm = Math.floor(Math.random() * 100); 
  const chartData = data.map(item => ({ year: item.year, Revenue: item.sales*randm }));

  return (
    <div className='line'>
      <div className='title1'>Revenue</div>
      <ResponsiveContainer width="100%" aspect={2 / 1.5}>
        <LineChart
          width={500}
          height={300}
          data={chartData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Revenue" stroke="#82ca9d" />
        </LineChart>
        <div className='title1'>Revenue VS Year</div>
      </ResponsiveContainer>
    </div>
  );
}

export default LineC;

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './scatter.css';

function Circular({ data }) {
console.log(data)

  // Calculate maximum value for Y-axis domain
  const maxValue = Math.max(...data.map(entry => entry.User_Name));
  const yDomain = [0, maxValue > 8 ? maxValue + 2 : 10];

  return (
    <div className='circular'>
      <div className='title1'>New Users</div>
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
          <XAxis dataKey="year" className='xaxis'/>
          <YAxis domain={yDomain} className='yaxis'/>
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="User_Name" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
        <div className='title1'>New Users VS Year</div>
      </ResponsiveContainer>
    </div>
  );
}

export default Circular;

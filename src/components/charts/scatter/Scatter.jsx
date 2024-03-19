import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './scatter.css';

function Circular({ data }) {
  // Define static data as a fallback if data is undefined
  const staticData = [
    { year: 2015, User_Name: 5 },
    { year: 2016, User_Name: 1 },
    { year: 2017, User_Name: 2 },
    { year: 2015, User_Name: 2 },
    { year: 2016, User_Name: 5 },
    { year: 2017, User_Name: 1 },
    { year: 2018, User_Name: 1 },
    { year: 2019, User_Name: 5 },
    { year: 2020, User_Name: 5 },
    { year: 2021, User_Name: 8 },
    { year: 2022, User_Name: 10 },
    { year: 2023, User_Name: 1 },
    { year: 2024, User_Name: 1 },
  ];

  // Combine static data with new data, if available
  const combinedData = data ? [...staticData, ...data] : staticData;

  // Calculate maximum value for Y-axis domain
  const maxValue = Math.max(...combinedData.map(entry => entry.User_Name));
  const yDomain = [0, maxValue > 8 ? maxValue + 2 : 10];

  return (
    <div className='circular'>
      <div className='title1'>New Users</div>
      <ResponsiveContainer width="100%" aspect={2 / 1.5}>
        <LineChart
          width={500}
          height={300}
          data={combinedData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis domain={yDomain} />
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

import React from 'react';
import './areac.css';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { FcSalesPerformance } from "react-icons/fc";

function AreaC({ data }) {
  const staticdata = [
    {
      year: '2015',
      Laptop: 4000,
      Mobile: 2400,
      Tablet: 2400,
      Desktop: 2400,
      Watch: 2400,
      Camera: 2400,
    },
    {
      year: '2016',
      Laptop: 3000,
      Mobile: 1398,
      Tablet: 2210,
      Desktop: 2400,
      Watch: 2400,
      Camera: 2400,
    },
    {
      year: '2017',
      Laptop: 2000,
      Mobile: 9800,
      Tablet: 2290,
      Desktop: 2400,
      Watch: 2400,
      Camera: 2400,
    },
    {
      year: '2018',
      Laptop: 2780,
      Mobile: 3908,
      Tablet: 2000,
      Desktop: 2400,
      Watch: 2400,
      Camera: 2400,
    },
    {
      year: '2019',
      Laptop: 1890,
      Mobile: 4800,
      Tablet: 2181,
      Desktop: 2400,
      Watch: 2400,
      Camera: 2400,
    },
    {
      year: '2020',
      Laptop: 2390,
      Mobile: 3800,
      Tablet: 2500,
      Desktop: 2400,
      Watch: 2400,
      Camera: 2400,
    },
  ];

  const productNames = Object.keys(staticdata[0]).filter(key => key !== 'year');

  // Generate random background colors
  const backgroundColors = Array.from({ length: productNames.length }, () => `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.6)`);

  // Ensure data is always an array
  const chartData = Array.isArray(data) && data.length > 0 ? data : staticdata;

  return (
    <div className='areaC'>
      <div className='title1'><FcSalesPerformance />Overall View</div>
      <ResponsiveContainer width="100%" aspect={2 / 1.5}>
        <AreaChart width={730} height={250} data={chartData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            {productNames.map((name, index) => (
              <linearGradient key={name} id={name} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={backgroundColors[index]} stopOpacity={0.8} />
                <stop offset="95%" stopColor={backgroundColors[index]} stopOpacity={0} />
              </linearGradient>
            ))}
          </defs>
          {/* Render areas dynamically */}

          {productNames.map((name, index) => (
            <Area key={name} type="monotone" dataKey={name} stackId="1" stroke={backgroundColors[index]} fillOpacity={1} fill={`url(#${name})`} />
          ))}
          <XAxis dataKey="year" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
        </AreaChart>
        <div className='title1'>Sales VS Year</div>
      </ResponsiveContainer>
    </div>
  );
}

export default AreaC;

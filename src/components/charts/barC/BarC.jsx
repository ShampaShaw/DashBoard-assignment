import React from 'react';
import './barC.css';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { FcSalesPerformance } from "react-icons/fc";

function BarC({ data }) {
  const staticData = [ // Static data
    {
      sales: 4000,
      product: 'Laptop'
    },
    {
      sales: 3000,
      product: 'Mobile'
    },
    {
      sales: 2000,
      product: 'Tablet'
    },
    {
      sales: 2780,
      product: 'Desktop'
    },
    {
      sales: 1890,
      product: 'Watch'
    },
    {
      sales: 2390,
      product: 'Camera'
    }
  ];

  const mergedData = [...staticData, ...data]; // Merge static data with new data

  return (
    <div className='barC'>
      <div className='title1'><FcSalesPerformance /> Sales</div>
      <ResponsiveContainer width="100%" aspect={2 / 1.5}>
        <BarChart
          width={500}
          height={300}
          data={mergedData} // Use merged data
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="product" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="sales" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
        </BarChart>
        <div className='title1'>Sales VS Product</div>
      </ResponsiveContainer>
    </div>
  );
}

export default BarC;

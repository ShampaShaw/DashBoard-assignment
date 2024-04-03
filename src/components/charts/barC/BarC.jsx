import React from 'react';
import './barC.css';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { FcSalesPerformance } from "react-icons/fc";

function BarC({ data }) {

  return (
    <div className='barC'>
      <div className='title1'><FcSalesPerformance /> Sales</div>
      <ResponsiveContainer width="100%" aspect={2 / 1.5}>
        <BarChart
          width={500}
          height={300}
          data={data} // Use merged data
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="productName" className='xaxis' />
          <YAxis className='yaxis'/>
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

import React from 'react'
import './areac.css'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const data = [
    {
        Year: '2015',
        Mobile: 4000,
        Desktop: 2400,
        Tablet: 2400,
        Headphone: 2400,
        Laptop: 2400,
        },
        {
        Year: '2016',
        Mobile: 3000,
        Desktop: 1398,
        Tablet: 2210,
        Headphone: 2210,
        Laptop: 2210,
        },
        {
        Year: '2017',
        Mobile: 2000,
        Desktop: 9800,
        Tablet: 2290,
        Headphone: 2290,
        Laptop: 2290,
        },
        {
        Year: '2018',
        Mobile: 2780,
        Desktop: 3908,
        Tablet: 2000,
        Headphone: 2000,
        Laptop: 2000,
        },
        {
        Year: '2019',
        Mobile: 1890,
        Desktop: 4800,
        Tablet: 2181,
        Headphone: 2181,
        Laptop: 2181,
        },
        {
        Year: '2020',
        Mobile: 2390,
        Desktop: 3800,
        Tablet: 2500,
        Headphone: 2500,
        Laptop: 2500,
        },
        {
        Year: '2021',
        Mobile: 3490,
        Desktop: 4300,
        Tablet: 2100,
        Headphone: 2100,
        Laptop: 2100,
        },
  ];

function AreaC() {
  return (
    <div className='areaC'>
    <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Year" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="Mobile" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="Desktop" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="Tablet" stackId="1" stroke="#ffc658" fill="#ffc658" />
          <Area type="monotone" dataKey="Headphone" stackId="1" stroke="#ff7300" fill="#ff7300" />
          <Area type="monotone" dataKey="Laptop" stackId="1" stroke="#ff0000" fill="#ff0000" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AreaC
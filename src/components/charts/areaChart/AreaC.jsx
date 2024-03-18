import React from 'react'
import './areac.css'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { FcSalesPerformance } from "react-icons/fc";



const data = [
    {
      year :'2015',
      Laptop: 4000,
      Mobile : 2400,
      Tablet: 2400,
      Desktop: 2400,
      Watch: 2400,
      Camera: 2400,
    },
    {
      year :'2016',
      Laptop: 3000,
      Mobile : 1398,
      Tablet: 2210,
      Desktop: 2400,
      Watch: 2400,
      Camera: 2400,
    },
    {
      year : '2017',
      Laptop: 2000,
      Mobile : 9800,
      Tablet: 2290,
      Desktop: 2400,
      Watch: 2400,
      Camera: 2400,
    },
    {
      year : '2018',
      Laptop: 2780,
      Mobile : 3908,
      Tablet: 2000,
      Desktop: 2400,
      Watch: 2400,
      Camera: 2400,
    },
    {
      year :  '2019',
      Laptop: 1890,
      Mobile : 4800,
      Tablet: 2181,
      Desktop: 2400,
      Watch: 2400,
      Camera: 2400,
    },
    {
      year : '2020',
      Laptop: 2390,
      Mobile : 3800,
      Tablet: 2500,
      Desktop: 2400,
      Watch: 2400,
      Camera: 2400,
    },
   
];

function AreaC() {
  return (
    <div className='areaC'>
    <div className='title1'><FcSalesPerformance />          Overall View</div>
    <ResponsiveContainer width="100%" aspect={2/1.5}>
    <AreaChart width={730} height={250} data={data}
    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
    <defs>
    <linearGradient id="Laptop" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="Mobile" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="Desktop" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#ffc658" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#ffc658" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="Watch" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#ff7300" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#ff7300" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="Camera" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#ff0000" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#ff0000" stopOpacity={0}/>
    </linearGradient>
   <linearGradient id="Tablet" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#ff7700" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#ff7700" stopOpacity={0}/>
    </linearGradient>
    </defs>
    <XAxis dataKey="year" />
    <YAxis />
    <CartesianGrid strokeDasharray="3 3" />
    <Tooltip />
    <Area type="monotone" dataKey="Laptop" stackId="1" stroke="#8884d8" fillOpacity={1} fill="url(#Laptop)" />
    <Area type="monotone" dataKey="Mobile" stackId="1" stroke="#82ca9d" fillOpacity={1} fill="url(#Mobile)" />
    <Area type="monotone" dataKey="Desktop" stackId="1" stroke="#ffc658" fillOpacity={1} fill="url(#Desktop)" />
    <Area type="monotone" dataKey="Watch" stackId="1" stroke="#ff7300" fillOpacity={1} fill="url(#Watch)" />
    <Area type="monotone" dataKey="Camera" stackId="1" stroke="#ff0000" fillOpacity={1} fill="url(#Camera)" />
    <Area type="monotone" dataKey="Tablet" stackId="1" stroke="#ff7700" fillOpacity={1} fill="url(#Tablet)" />
    <Legend />
  </AreaChart>
  <div className='title1'>Sales VS Year</div>
      </ResponsiveContainer>
      
    </div>
  )
}

export default AreaC


/*<div className='title'>Last 1 Year (Revenue)</div>
    <ResponsiveContainer width="100%" aspect={2/1.5}>
    <AreaChart width={730} height={250} data={data}
    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
    <defs>
    <linearGradient id="Shampa" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="Priya" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="Rita" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#ffc658" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#ffc658" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="Rupa" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#ff7300" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#ff7300" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="Raj" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#ff0000" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#ff0000" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="Rahul" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#ff0000" stopOpacity={0.8}/>
        <stop offset="95%" stopColor="#ff0000" stopOpacity={0}/>
    </linearGradient>
    </defs>
    <XAxis dataKey="customer" />
    <YAxis />
    <CartesianGrid strokeDasharray="3 3" />
    <Tooltip />
    <Area type="monotone" dataKey="sales" stackId="1" stroke="#8884d8" fillOpacity={1} fill="url(#Shampa)" />
    <Area type="monotone" dataKey="sales" stackId="1" stroke="#82ca9d" fillOpacity={1} fill="url(#Priya)" />
    <Area type="monotone" dataKey="sales" stackId="1" stroke="#ffc658" fillOpacity={1} fill="url(#Rita)" />
    <Area type="monotone" dataKey="sales" stackId="1" stroke="#ff7300" fillOpacity={1} fill="url(#Raj)" />
    <Area type="monotone" dataKey="sales" stackId="1" stroke="#ff0000" fillOpacity={1} fill="url(#Rahul)" />
  </AreaChart>
      </ResponsiveContainer> */
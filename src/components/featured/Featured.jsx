import React from 'react'
import './featured.css'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FcBullish } from 'react-icons/fc';
import { FcBearish } from 'react-icons/fc';
import { FcDonate } from "react-icons/fc";


function Featured() {
  return (
    <div className='featured'>
        <div className='top'>
            <h1 className='title'>Total Revenue</h1>
            <FcDonate className='i'/>
        </div>
        <div className='bottom'>
            <div className='featuredChart'>
                <CircularProgressbar value={75} text={`75%`} strokeWidth={5}/>
            </div>
            <div className='featuredDetail'>
                <div className='featuredDetailsItem'>
                <div className='featuredItem'>
                    <span className='featuredTitle'>Total sales made today</span>
                    <span className='featuredMoney'>$2,415</span>
                    <p className='featuredDetailsTitle'>Previous transactions processing.Last payment may not be included.</p>
                </div>   
                </div>
                <div className='featuredDetails'>
                    <div className='featuredDetailsItem'>
                        <span className='featuredDetailsTitle'>Last Month</span>
                        <span className='featuredDetailsMoney'><FcBullish/>     11%</span>
                    </div>
                    <div className='featuredDetailsItem'>
                        <span className='featuredDetailsTitle'>Last Year</span>
                        <span className='featuredDetailsMoney'><FcBearish/>     11%</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured
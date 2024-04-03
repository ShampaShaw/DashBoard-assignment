import React, { useState} from 'react'
import './dashboard.css'
import { FcBullish } from "react-icons/fc";
import { FcBearish } from "react-icons/fc";
import cart from '../../assests/cart.png'
import customer from '../../assests/customer.png'
import product from '../../assests/product.png'
import Form from '../../components/form/Form';
import DataTable from '../../components/table/dataTable/DataTable';
import earning from '../../assests/income.png'
import Featured from '../../components/featured/Featured';
import LineC from '../../components/charts/line/Line';
import AreaC from '../../components/charts/areaChart/AreaC';
import BarC from '../../components/charts/barC/BarC';
import Scatter from '../../components/charts/scatter/Scatter';
import Contact from '../../components/table/contact/Contact';
import { data } from '../../assests/data';

function Dashboard() {

  const [tableData, setTableData] = useState(data);

  const handleFormSubmit = (formData) => {
    const newData = {
      id: tableData.length + 1,
      ...formData
    }
    setTableData([...tableData, newData]);
    console.log(tableData)
  };


  return (
    <div className='dashboard'>
      <div className='container'>
        <div className='salesBox'>
          <div className='logo'>
            <img src={cart} alt='cart' />
          </div>
          <div className='title'>Sales</div>
          <div className='number'>60</div>
          <div className='icon'><FcBullish />      60% from Last Year</div>
        </div>
        <div className='customer'>
          <div className='logo'><img src={customer} alt='' /></div>
          <div className='title'>Users</div>
          <div className='number'>50</div>
          <div className='icon'><FcBearish/>      20% from Last Year</div>
        </div>
        <div className='earning'>
          <div className='logo'><img src={earning} alt='' /></div>
          <div className='title'>Earning</div>
          <div className='number'>$1000</div>
          <div className='icon'><FcBullish/>10% from Last Year</div>
        </div>
        <div className='product'>
          <div className='logo'><img src={product} alt='' /></div>
          <div className='title'>Top Selling Item</div>
          <h1 className='productName'>Laptop</h1>
        </div>
      </div>
      <div className='others'>
      <div className='charts'>
        <Featured/>
        <LineC data = {tableData}/>
      </div>
      <div className='form-dataTable'>
        <div><Form onSubmit={handleFormSubmit}/></div>
        <div className='dataTableItem'>
          <h1>DATA TABLE</h1>
          <DataTable data={tableData}/>
        </div>
      </div>
      <div className='chart-table'>
        <Scatter data={tableData}/>
        <BarC data={tableData} />
      </div>
      <div className='circular-contact'>
        <AreaC/>
        <Contact/>
      </div>
      </div>
    </div>
  )
}

export default Dashboard
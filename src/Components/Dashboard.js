import React, {useState} from 'react'
import { Datepicker } from './Datepicker';
import { Batchtable } from './Batchtable';
import { Locationtable } from './Locationtable';
import { Batchchart } from './Batchchart';
import { Locationchart } from './Locationchart';

export const Dashboard = () => {

    const [dateRange, setDateRange] = useState([new Date('1 Jan 2022'), new Date('4 Jan 2022')]);
    const [startDate, endDate] = dateRange;

    const [showchart, setShowchart] = useState(true)

    console.log("Dashboard::", startDate, endDate)

    const ctstyles = {
      color: showchart ? '#334BFF' : 'black' ,
      fontWeight: showchart ? "bold" : "normal",
      borderColor: '#334BFF'
    }

    const tbstyles = {
      color: !showchart ? '#334BFF' : 'black' ,
      fontWeight: !showchart ? "bold" : "normal",
      borderColor: '#334BFF'
    }

  return (
    <div className="container mt-3">

    <div className="row">
      <div className='col-4'></div>
      <div className="col-4 buttons align-center">
          {<button style={ctstyles} type="button" onClick={() => setShowchart(true)} className="btn btn-lg bg-white btn-light border-1 rounded mb-3" >Chart</button> }
          {<button style={tbstyles} type="button" onClick={() => setShowchart(false)} className="btn btn-lg bg-white btn-light border-1 rounded mb-3" >Table</button> }
      </div>
      <Datepicker className='col-4' startDate={startDate} endDate={endDate} dateRange={dateRange} setDateRange={setDateRange} />
    </div>
    
    <div className="content mt-3">
      {!showchart && endDate && <Locationtable startDate={startDate} endDate={endDate} />}
      {!showchart && !endDate  && <Batchtable startDate={startDate}/>}
      {showchart  && !endDate && <Batchchart startDate={startDate} endDate={endDate} />}
      {showchart  && endDate && <Locationchart startDate={startDate} endDate={endDate} />}
    </div>
    

    </div>    
  )
}

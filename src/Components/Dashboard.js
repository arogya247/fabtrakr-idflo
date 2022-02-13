import React, {useState} from 'react'
import { Datepicker } from './Datepicker';
import { Batchtable } from './Batchtable';
import { Locationtable } from './Locationtable';
import { Batchchart } from './Batchchart';
import { Locationchart } from './Locationchart';

export const Dashboard = () => {

    const [startDate, setStartDate] = useState(new Date('1 Jan 2022'));
    const [endDate, setEndDate] = useState(new Date('4 Jan 2022'));

    const [showchart, setShowchart] = useState(true)

    console.log("Dashboard::", startDate, endDate)

    const ctstyles = {
      color: showchart ? 'blue' : 'black' ,
      fontWeight: showchart ? "bold" : "normal"
    }

    const tbstyles = {
      color: !showchart ? 'blue' : 'black' ,
      fontWeight: !showchart ? "bold" : "normal"
    }

    console.log(startDate)

  return (
    <div className="m-3">

    {<button style={ctstyles} type="button" onClick={() => setShowchart(true)} className="btn btn-lg btn-light border border-dark border-2 rounded mb-3" >Chart</button> }
    {<button style={tbstyles} type="button" onClick={() => setShowchart(false)} className="btn btn-lg btn-light border border-dark border-2 rounded mb-3" >Table</button> }

    <Datepicker className='col-4' startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate} />
    
    {!showchart && endDate && <Locationtable startDate={startDate} endDate={endDate} />}
    {!showchart && !endDate  && <Batchtable startDate={startDate}/>}
    {showchart  && !endDate && <Batchchart startDate={startDate} endDate={endDate} />}
    {showchart  && endDate && <Locationchart startDate={startDate} endDate={endDate} />}

    </div>    
  )
}

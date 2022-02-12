import React, {useState} from 'react'
import { Datepicker } from './Datepicker';
import { Batchtable } from './Batchtable';
import { Locationtable } from './Locationtable';
import { Batchchart } from './Batchchart';
import { Locationchart } from './Locationchart';

export const Dashboard = () => {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);

    const [showchart, setShowchart] = useState(true)

    console.log("Dashboard::", startDate, endDate)

  return (
    <div className="m-3">
    {showchart && <button type="button" onClick={() => setShowchart(true)} class="btn btn-lg btn-light text-info border border-dark border-2 rounded fw-bold mb-3" >Chart</button> }
    {!showchart && <button type="button" onClick={() => setShowchart(true)} class="btn btn-lg btn-light border border-dark border-2 rounded mb-3" >Chart</button> }

    {showchart && <button type="button" onClick={() => setShowchart(false)} class="btn btn-lg btn-light border border-dark border-2 rounded mb-3" >Table</button> }
    {!showchart && <button type="button" onClick={() => setShowchart(false)} class="btn btn-lg btn-light text-info border border-dark border-2 rounded fw-bold mb-3" >Table</button> }

    <Datepicker startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate} />

    {!showchart && endDate && <Locationtable startDate={startDate} endDate={endDate} />}
    {!showchart && !endDate  && <Batchtable startDate={startDate}/>}
    {showchart  && !endDate && <Batchchart startDate={startDate} endDate={endDate} />}
    {showchart  && endDate && <Locationchart startDate={startDate} endDate={endDate} />}

    </div>    
  )
}

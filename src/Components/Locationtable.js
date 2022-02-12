import React, {useState, useEffect} from 'react'
import data from '../sample.json'
import { dateutil } from '../dateutil'
import { Locationtableitem } from './Locationtableitem'

export const Locationtable = ({startDate, endDate}) => {
  
    const [finalarray, setFinalarray] = useState([])

    useEffect(() => {
        filterbyDate()
    }, [startDate, endDate])

    // filter objects whose date exists b/w start date and end date
    const filterbyDate = () => {
        const fdata = data.filter((e) => {
            return (Date.parse(dateutil(endDate)) >= Date.parse(e.date) &&  Date.parse(e.date) >= Date.parse(dateutil(startDate)) )
        })

        finalData(fdata)
    }

    // this function will prepare data needed to feed into table 
    const finalData = (fdata) => {
        let temp_arr = []

        // make an array of distinct dates in our dataset for the given date range
        let result = fdata.map(a => a.date);
        function onlyUnique(value, index, self) {
            return self.indexOf(value) === index;
        }
        let unique = result.filter(onlyUnique);


        for(let i=0;i<unique.length;i++){
            const temp = {
                date: unique[i],
                firsthour: fdata.reduce((total, item) => {
                    const target = item.hourlyDetails.find((e) => e.startTime==="9:00AM")
                    return(item.date === unique[i] ? target.outputQuantity + total : total)
                }, 0),
                secondhour: fdata.reduce((total, item) => {
                    const target = item.hourlyDetails.find((e) => e.startTime==="10:00AM")
                    return(item.date === unique[i] ? target.outputQuantity + total : total)
                }, 0),
                thirdhour: fdata.reduce((total, item) => {
                    const target = item.hourlyDetails.find((e) => e.startTime==="11:00AM")
                    return(item.date === unique[i] ? target.outputQuantity + total : total)
                }, 0),
                fourthhour: fdata.reduce((total, item) => {
                    const target = item.hourlyDetails.find((e) => e.startTime==="12:00PM")
                    return(item.date === unique[i] ? target.outputQuantity + total : total)
                }, 0),
                fifthhour: fdata.reduce((total, item) => {
                    const target = item.hourlyDetails.find((e) => e.startTime==="1:00PM")
                    return(item.date === unique[i] ? target.outputQuantity + total : total)
                }, 0),
                sixthhour: fdata.reduce((total, item) => {
                    const target = item.hourlyDetails.find((e) => e.startTime==="2:00PM")
                    return(item.date === unique[i] ? target.outputQuantity + total : total)
                }, 0),
                seventhhour: fdata.reduce((total, item) => {
                    const target = item.hourlyDetails.find((e) => e.startTime==="3:00PM")
                    return(item.date === unique[i] ? target.outputQuantity + total : total)
                }, 0),
                Total: fdata.reduce((total, item) => {
                    return(item.date === unique[i] ? item.totalOutputQuantity + total : total)
                }, 0),
                Efficiency: "NA"
            }
            temp_arr.push(temp)
        }
        setFinalarray(temp_arr)
    }

    return (
    <div className='container'>

        <h2 className='p-3'>Location Efficiency Table</h2>

        <div className="row py-4 fw-bold text-white bg-danger border border-dark border-3 rounded">
            <div className="col-2">Date</div>
            <div className="col-1">1st Hour</div>
            <div className="col-1">2nd Hour</div>
            <div className="col-1">3rd Hour</div>
            <div className="col-1">4th Hour</div>
            <div className="col-1">5th Hour</div>
            <div className="col-1">6th Hour</div>
            <div className="col-1">7th Hour</div>
            <div className="col-2">Total</div>
            <div className="col-1">Efficiency</div>
        </div>

        {finalarray.map((e) => {
        return (
          <div key={e.date}>
            <Locationtableitem e={e} />
          </div>
        )
        })}
    </div>
  )
}

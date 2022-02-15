import React, { useEffect, useState } from 'react'
import data from '../sample.json'
import { dateutil } from '../dateutil'
import { Batchtableitem } from './Batchtableitem'

export const Batchtable = ({startDate, endDate}) => {

    //const [fdata, setFdata] = useState([])
    const [finalarray, setFinalarray] = useState([])
    
    useEffect(() => {
        filterbyDate()
    }, [startDate])

    const filterbyDate = () => {
        const fdata = data.filter((e) => {
            return (e.date == dateutil(startDate))
        })

        finalData(fdata)
    }
    
    const finalData = (fdata) => {
        let temp_arr = []
        const start_batch = ["9:00AM", "10:00AM", "11:00AM","12:00PM","1:00PM","2:00PM","3:00PM"]
        const end_batch = ["10:00AM", "11:00AM","12:00PM","1:00PM","2:00PM","3:00PM","4:00PM"]

        for(let i=0;i<start_batch.length;i++){
            let temp = {
                start: start_batch[i],
                end: end_batch[i],
                A: fdata.reduce((total, item) => {
                    const target = item.hourlyDetails.find((e) => e.startTime===start_batch[i])
                    return (item.batchNumber==='A' ? target.outputQuantity + total : total)
                }, 0),
                B: fdata.reduce((total, item) => {
                    const target = item.hourlyDetails.find((e) => e.startTime===start_batch[i])
                    return (item.batchNumber==='B' ? target.outputQuantity + total : total)
                }, 0),
                C: fdata.reduce((total, item) => {
                    const target = item.hourlyDetails.find((e) => e.startTime===start_batch[i])
                    return (item.batchNumber==='C' ? target.outputQuantity + total : total)
                }, 0),
                D: fdata.reduce((total, item) => {
                    const target = item.hourlyDetails.find((e) => e.startTime===start_batch[i])
                    return (item.batchNumber==='D' ? target.outputQuantity + total : total)
                }, 0),
                Total: (fdata.reduce((total, item) => {
                    const target = item.hourlyDetails.find((e) => e.startTime===start_batch[i])
                    return (target.outputQuantity + total)
                }, 0)),
                Efficiency:  (fdata.reduce((total, item) => {
                    const target = item.hourlyDetails.find((e) => e.startTime===start_batch[i])
                    return (target.hourEfficiency + total)
                }, 0))/(fdata.length)
                
            }
            
            temp_arr.push(temp)
        }
        setFinalarray(temp_arr)
    }

    const tabstyle = {
        color: '#334BFF'
    }

    return (
        <div style={tabstyle} className='tab container'>

        <h2 className='p-3'>Batch Efficiency Table</h2>
        <div className="row py-4 fw-bold">
            <div className="col-4">Time</div>
            <div className="col-1">A</div>
            <div className="col-1">B</div>
            <div className="col-1">C</div>
            <div className="col-1">D</div>
            <div className="col-2">Total</div>
            <div className="col-2">Efficiency</div>
        </div>

        {finalarray.map((e) => {
        return (
          <div key={e.start}>
            <Batchtableitem start={e.start} end={e.end}
                A={e.A} B={e.B} C={e.C} D={e.D}
                Total={e.Total} Efficiency={e.Efficiency}
            />
          </div>
        )
        })}

        </div>
    )
    }

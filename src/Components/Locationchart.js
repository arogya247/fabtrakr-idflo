import React,{useState, useEffect} from 'react'
import data from '../sample.json'
import { dateutil } from '../dateutil'
import { Linechart } from './Linechart'

export const Locationchart = ({startDate, endDate}) => {

  const [fdata, setFdata] = useState([])

  useEffect(() => {
      filterbyDate()
  }, [startDate, endDate])

  const filterbyDate = () => {
      setFdata(data.filter((e) => {
          return (Date.parse(dateutil(endDate)) >= Date.parse(e.date) &&  Date.parse(e.date) >= Date.parse(dateutil(startDate)) )
      }))

  }


  return (
    <div>
      <h2 className='p-3'>Location Efficiency Chart</h2>
      <Linechart fdata={fdata} />
    </div>
  )
}

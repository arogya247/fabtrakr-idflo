import React,{useState, useEffect} from 'react'
import data from '../sample.json'
import { dateutil } from '../dateutil'
import { Barchart } from './Barchart'


export const Batchchart = ({startDate, endDate}) => {

  const [fdata, setFdata] = useState([])

    useEffect(() => {
      filterbyDate()
    }, [startDate])

  //console.log(fdata);

    const filterbyDate = () => {
      setFdata(data.filter((e) => {
          return (e.date == dateutil(startDate))
      }))
    }

    // const dataHandler = (fdata) => {

    //   console.log(fdata)
    //   let result = fdata.map(a => a.batchNumber);

    //   function onlyUnique(value, index, self) {
    //       return self.indexOf(value) === index;
    //   }

    //   let unique = result.filter(onlyUnique);
    //   console.log("Unique",unique)

    // }


    return (
      <div>
        <h2 className='p-3'>Batch Efficiency Chart</h2>
        <Barchart fdata={fdata} />
      </div>
    )
}

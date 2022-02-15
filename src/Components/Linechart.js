import React from 'react'
import { Chart } from "react-google-charts";

export const Linechart = ({fdata}) => {

    // make an array of distinct dates in our dataset for the given date range
    let result = fdata.map(a => a.date);
    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
      }
    let unique = result.filter(onlyUnique);


    let temp_arr = [[
        "Date",
        "Efficiency"
      ]]

    for(let i=0;i<unique.length;i++){
        let temp = []
        temp.push(unique[i])
        let res = fdata.filter(function (item) {
            return item.date === unique[i];
          }).map(function (item) {
            return item.efficiency;
          })
        
        const average = e => e.reduce((a,b) => a + b, 0) / e.length;
        res = average(res)
        temp.push(res)
        temp_arr.push(temp)
    }
      
    const options = {
        chart: {
          title: "",
          subtitle: "",
        },
      };

    return (
        <div className='container fw-bold p-3'>
            <Chart
                chartType="Line"
                width="100%"
                height="400px"
                data={temp_arr}
                options={options}
            />
        </div>
    )
}

import React from 'react'
import { Chart } from "react-google-charts";

export const Barchart = ({fdata}) => {

    console.log(fdata)
    const average = e => e.reduce((a,b) => a + b, 0) / e.length;

    const temp = {
        A: fdata.filter(function (item) {
            return item.batchNumber === 'A';
          }).map(function (item) {
            return item.efficiency;
          }),
        B: fdata.filter(function (item) {
            return item.batchNumber === 'B';
            }).map(function (item) {
            return item.efficiency;
            }),
        C: fdata.filter(function (item) {
            return item.batchNumber === 'C';
            }).map(function (item) {
            return item.efficiency;
            }),
        D: fdata.filter(function (item) {
            return item.batchNumber === 'D';
            }).map(function (item) {
            return item.efficiency;
            })
    }

    const data = [
        ["Batch", "Efficiency", { role: 'style' } ],
        ["A", average(temp.A), 'color: gray'],
        ["B", average(temp.B), 'color: gray'],
        ["C", average(temp.C), 'color: gray'],
        ["D", average(temp.D), 'color: gray'],
        ];
        
        
    const options = {
        chart: {
            title: "",
            subtitle: ""
        },
    };

    return (
    <div  className="container fw-bold">
    <Chart
      chartType="Bar"
      width= '100%'
      height="400px"
      data={data}
      options={options}
    />
    </div>
    
    )
}

import React, { useEffect } from 'react'
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
        ["Batch", "Efficiency"],
        ["A", average(temp.A)],
        ["B", average(temp.B)],
        ["C", average(temp.C)],
        ["D", average(temp.D)],
        ];
        
    const options = {
    chart: {
        title: "Batch Efficiency Chart",
        subtitle: "Batch Number, Efficiency",
    },
    };

    return (
    <div className="container fw-bold">
    <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
    </div>
    
    )
}

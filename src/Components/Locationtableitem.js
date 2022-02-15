import React from 'react'


export const Locationtableitem = ({e}) => {

    const {date, firsthour, secondhour, thirdhour, fourthhour, fifthhour, sixthhour, seventhhour, Total, Efficiency} = e

  return (
    <div className='py-1'>
      <div className="row py-1">
        <div className="col-2 fw-bold">{date}</div>
        <div className="col-1">{firsthour}</div>
        <div className="col-1">{secondhour}</div>
        <div className="col-1">{thirdhour}</div>
        <div className="col-1">{fourthhour}</div>
        <div className="col-1">{fifthhour}</div>
        <div className="col-1">{sixthhour}</div>
        <div className="col-1">{seventhhour}</div>
        <div className="col-2">{Total}</div>
        <div className="col-1">{Efficiency}</div>
      </div>
  </div>
  )
}

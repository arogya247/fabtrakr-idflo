import React from 'react'

export const Batchtableitem = ({start, end, A,B,C,D,Total, Efficiency}) => {
  return (
    <div className='py-1'>
      <div className="row py-1">
        <div className="col-4 fw-bold">{start} - {end}</div>
        <div className="col-1">{A}</div>
        <div className="col-1">{B}</div>
        <div className="col-1">{C}</div>
        <div className="col-1">{D}</div>
        <div className="col-2">{Total}</div>
        <div className="col-2">{Efficiency}</div>
      </div>
  </div>
  )
}

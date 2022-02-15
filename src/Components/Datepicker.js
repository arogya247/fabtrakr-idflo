import React from 'react'
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";  
import "./datepick.css"
export const Datepicker = ({startDate,endDate,dateRange,setDateRange}) => {

  
  return (
    <DatePicker

    style={{color: 'blue'}}

      selectsRange={true}
      startDate={startDate}
      endDate={endDate}
      onChange={(update) => {
        setDateRange(update);
      }}
    />
  )
}

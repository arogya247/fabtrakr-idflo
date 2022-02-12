import React from 'react'
import ReactDatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";  

export const Datepicker = ({startDate, setStartDate,endDate, setEndDate}) => {

    const onChange = (dates) => {
      const [start, end] = dates;
      setStartDate(start);
      setEndDate(end);
    };

    return (
    <ReactDatePicker
      selected={startDate}
      onChange={onChange}
      startDate={startDate}
      endDate={endDate}
      selectsRange
      inline
    />
    )
}

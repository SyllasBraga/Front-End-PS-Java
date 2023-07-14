import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateInput = () => {
    const [selectedDate, setSelectedDate] = useState(null);
  
    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
  
    return (
        <DatePicker
          selected={selectedDate}
          placeholderText='00/00/0000'
          onChange={handleDateChange}
          dateFormat="dd/MM/yyyy"
          className='input'
        />
    );
  };
  
  export default DateInput;
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import '../Styles/Calendar.css';

export default function CalendarComp() {
  const [value, onChange] = useState(new Date());

  return (
    <div style={{marginLeft: "40px"}}>
      <Calendar
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
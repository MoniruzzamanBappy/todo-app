import React, { useState } from 'react';
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const Calendar = () => {
    const [date, setDate] = useState(new Date());
    let footer = <p>Please pick a day.</p>;
    if (date) {
      footer = <p className=" fs-4 fw-bold">You picked <span className="text-danger">{format(date, "PP")}</span></p>;
    }
    
    return (
        <div className="d-flex justify-content-center align-items-center">
             <DayPicker
            mode="single"
            selected={date}
            onSelect={setDate}
            footer={footer}
          />
        </div>
    );
};

export default Calendar;
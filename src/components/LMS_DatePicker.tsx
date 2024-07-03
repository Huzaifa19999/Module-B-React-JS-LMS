import  { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import 'bootstrap/dist/css/bootstrap.css'


function LMS_DatePicker() {

    const  [ selectedDate, setSelectedDate ] = useState<any>()
    console.log(selectedDate)

  return (
    <>
        <DatePicker
            className='fw-bold form-control p-2'
            placeholderText='Click to Enter Date'
            selected={selectedDate}
            onChange={date => setSelectedDate(date)}
            dateFormat={"yyyy/MM/dd"}
            maxDate={new Date()}
             /> 
    </>
  )
}

export default LMS_DatePicker
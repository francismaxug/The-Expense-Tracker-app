import React from 'react'
import './Expenses'
import './Subsection.css'

const CheckForDate = (props) => {
  const local = navigator.language
  const options = {
    month: 'long',
  }
  const month = new Intl.DateTimeFormat(local, options).format(props.date)
  const day = new Intl.DateTimeFormat(local, {
    day: "2-digit"
  }).format(props.date)
  const year = new Intl.DateTimeFormat(local, {
    year: "numeric"
  }).format(props.date)
  return (
    <div className='set subdate'>
      <div className='say samonth'>{month}</div>
      <div  className='say sayear'>{year}</div>
        <div  className='say saday'>{day}</div>
        
    </div>
  )
}

export default CheckForDate

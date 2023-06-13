import React from  'react'
import './Subsection.css'
import './Expenses'
import CheckForDate from './CheckForDate'
const Subsections = (props) => {
  return (
    <div className='sub'>
      <CheckForDate date={props.date}/>
      <div className='set subtitle'>{props.title}</div>
      <div className='set subamount'>${props.amount}</div>
    </div>
  )
}

export default Subsections

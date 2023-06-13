import React, {useState} from 'react'
import './Main.css'
import Subsections from './Subsections'
import './Expenses'
import FilterByYear from './FilterByYear'

const Mainpage = (props) => {
  
  const [filteredYear, setFilteredYear] = useState('All');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  })

  return (
    <div className='main'>
      <FilterByYear  selected={filteredYear} onChangeFilter={filterChangeHandler } />

      {filteredYear==="All" ? props.item.map((search,index)=> <Subsections key={index} date = {search?.date} amount = {search?.amount} title= {search?.title} dateIn={search?.filtt} />) : filteredExpenses.length ===0 ? <h1 className="you">No Expense Available</h1> : (filteredExpenses.map((search,index)=> <Subsections key={index} date = {search?.date} amount = {search?.amount} title= {search?.title} dateIn={search?.filtt} />) )}

      {/* {filteredExpenses.map((search,index)=> <Subsections key={index} date = {search?.date} amount = {search?.amount} title= {search?.title} dateIn={search?.filtt} />)} */}
    </div>
  )
}

export default Mainpage

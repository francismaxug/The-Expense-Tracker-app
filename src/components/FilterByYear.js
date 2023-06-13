import './Filter.css'

const FilterByYear = (props) => {


const getAllValues2016 = (e) => {
// setChangeYear2016([...changeYear2016, e.target.value])
const comeOn= e.target.value
props.onChangeFilter(comeOn)
}
// const getAllValues2014= (e) => {
//   setChangeYear2014([...changeYear2014, e.target.value])
//   }
//   const getAllValues2019 = (e) => {
//     setChangeYear2019([...changeYear2019, e.target.value])
//     }

  return (
    <div className='filter'>
      <div className='filtyear'>Filter by year</div>
      <div className='saves'>
        <select value={props.selected}  onChange={getAllValues2016}>
        <option value="All" >All</option>
        <option value="2020" >2020</option>
        <option value ="2016">2016</option>
        <option value="2017">2017</option>
        <option value="2014">2014</option>
        <option value="2019">2019</option>
        <option value="2023">2023</option>
        </select></div>
        </div>
  )
}

export default FilterByYear

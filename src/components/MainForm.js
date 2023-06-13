import React, {useState} from 'react'
import './Expenses'
import './TakeForm.css'
const MainForm = (props) => {

const [puTitle, setTitle] = useState("")
const [putAmount, setAmount] = useState("")
const [putDate, setDate] = useState("")

//Alternatively, we can also use the approach below
// const [userInput, setUserInput]=useState({
//   title: "",
//   amount: "",
//   date : ""
// })


const changeTitleHandler=(event)=>{
setTitle(event.target.value)
// setUserInput({
//   title: event.target.value,
//   ...userInput
// })

// setUserInput((previousState)=>{
//   return {
//     ...previousState,
//     title: event.target.value
//   }
// })
// }
}
const changeAmountHandler=(event)=>{
  setAmount(event.target.value)
// setUserInput({
//   amount: event.target.value,
//   ...userInput
// })

// setUserInput((previousState)=>{
//   return {
//     ...previousState,
//     amount: event.target.value
//   }
// }) 
  }
  const changeDateHandler=(event)=>{
    setDate(event.target.value)
    // setUserInput({
    //   date: event.target.value,
    //   ...userInput
    // })

    // setUserInput((previousState)=>{
    //   return {
    //     ...previousState,
    //     date: event.target.value
    //   }
    // })
    }
const checkAll = (e)=>{
  e.preventDefault()
  if(putAmount && puTitle && putDate !==""){
  const correct ={
  title: puTitle.toLowerCase().split(" ").map((each)=> each[0].toUpperCase()+each.slice(1)).join(" "),
  date :  new Date(putDate),
  amount: putAmount
  }
  props.onAcceptAllInput(correct)
  
setAmount("")
setDate("")
setTitle("")
}

}  
  return (
      <form className='rotate' onSubmit={checkAll}>
        <div >
          <label>Title</label>
          <div>
            <input  type="text" value={puTitle} placeholder='Enter title here' onChange={changeTitleHandler}/>
          </div>
        </div>
        <div>
        <label>Amount</label>
          <div>
            <input type="number" value={putAmount} min="0.01" step="0.01" placeholder='Enter amount here' onChange={changeAmountHandler}/>
          </div>
          </div>
          <div >
          <label>Date</label>
          <div>
            <input className='shrink' value={putDate} type="date" min="2019-02-29" max="2023-12-31" onChange={changeDateHandler} />
          </div>
        </div>
        <div>
          <button type="submit" >Add Expense</button>
        </div>
      </form>
    
  )
}

export default MainForm

import React from 'react'
import MainForm from './MainForm'
import './TakeForm.css'
const TakeFormInput = (props) => {

const takeALLInputVale = (getPreviousInput)=>{
  const getExpenseData = {
    ...getPreviousInput
  }
props.onAppTake(getExpenseData)

}
  return (
    <div className='form'>
     <MainForm onAcceptAllInput = {takeALLInputVale}/> 
    </div>
  )
}

export default TakeFormInput

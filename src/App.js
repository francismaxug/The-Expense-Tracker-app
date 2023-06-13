import './App.css';
import Mainpage from './components/Mainpage';
import { useState } from 'react';
import TakeFormInput from './components/TakeFormInput'

const expenses=[{
  title: "Toilet Paper",
  date: new Date(2020, 9, 20),
  amount: 200,
  filtt : 30
},
{
  title: "Chapter Ten",
  date: new Date(2019, 5, 16),
  amount: 750,
  filtt :50
},
{
  title: "Car Insurance",
  date: new Date(2016, 10, 10),
  amount: 70
},
{
  title: "New Desktop",
  date:new Date(2014, 7, 2),
  amount: 320
},
{
  title: "PharmYard",
  date:new Date(2023, 7, 2),
  amount: 13.2
}
]
function App() {
    // const expenses=[{
    //   title: "Toilet Paper",
    //   date: new Date(2020, 9, 20),
    //   amount: 200,
    //   filtt : 30
    // },
    // {
    //   title: "Chapter Ten",
    //   date: new Date(2019, 5, 16),
    //   amount: 750,
    //   filtt :50
    // }
    // // {
    // //   title: "Car Insurance",
    // //   date: new Date(2016, 10, 10),
    // //   amount: 70
    // // },
    // // {
    // //   title: "New Desktop",
    // //   date:new Date(2014, 7, 2),
    // //   amount: 320
    // // },
    // // {
    // //   title: "PharmYard",
    // //   date:new Date(2023, 7, 2),
    // //   amount: 13.2
    // // }
    // ]
  
  const [newExpence, setNewExpence] = useState(
    
    // [{
    //   title: "Toilet Paper",
    //   date: new Date(2020, 9, 20),
    //   amount: 200
    // },
    // {
    //   title: "Chapter Ten",
    //   date: new Date(2019, 5, 16),
    //   amount: 750
    // },
    // {
    //   title: "Car Insurance",
    //   date: new Date(2016, 10, 10),
    //   amount: 70
    // },
    // {
    //   title: "New Desktop",
    //   date:new Date(2014, 7, 2),
    //   amount: 320
    // },
    // {
    //   title: "PharmYard",
    //   date:new Date(2023, 7, 2),
    //   amount: 13.2
    // }
    // ]
    expenses
  )


  

  // let manage;
  const takeAllPrevInput = (searchAll)=>{
    // manage = {
    //   ...searchAll,
    // }
  setNewExpence((prevoisIn)=>{
    return [searchAll, ...prevoisIn]
  })}
 
  // const difer = newExpence.slice()
  // console.log(difer);
  // const takAway= (previosInput) => {
  //   const store1 = previosInput
  //   console.log(store1)
  //   console.log(`aman`);
  // }


  return (
    <div className="App">
      <TakeFormInput onAppTake = {takeAllPrevInput} />
     {/* <Mainpage item={expenses}/> */}
     <Mainpage item={newExpence}  />
    </div>
  )
}

export default App;

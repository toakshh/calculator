
import { useState } from 'react'
import './App.css';
const buttonArr= [7,8,9,'+',4,5,6,'-',1,2,3,'*',"C",0,"=","/"]

function App() {
const [inputVal,setInputVal]= useState("");
const [displayAns,setDisplayAns]= useState("");
const handleInputVal= (e)=>{
  setInputVal(e.target.value)
}
const handleBtnClick= (e)=>{
  setInputVal(prev=>prev+e.target.value)
}

const handleReset=()=>{
  setInputVal("")
}
const handleResult= ()=>{
  const total= eval(inputVal)
  setDisplayAns(total)
}

  return (
    <div className='main'>
      <h1>React Calculator</h1>
      <div>
        <input type="text" value={inputVal} onChange={handleInputVal}/>
      </div>
      <div>
        {displayAns}
      </div>
      <div className='btnDiv'>
        {buttonArr?.map(btn=>{
        
            return (<button key={btn} value={btn} onClick={(e)=>{
              if (btn === "C") {
                handleReset();
              } else if (btn === "=") {
                handleResult();
              } else {
                handleBtnClick(e);
              }
            }}>
              {btn}
            </button>)
        })}
      </div>
    </div>
  )
}

export default App

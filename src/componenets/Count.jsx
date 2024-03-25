import { useState } from "react"

const Count=()=>{

    const [count, setCount] = useState(0)
    const [factor,setFactor]=useState(0)
  
   function increment() {
      
      setCount(count+factor)
     }
  
     function decrement(){
      setCount(count-factor)
     }
  
     function factIncrement(){
      setFactor(factor+1);
      setCount(0)
     }
  
     function factDecreemnt(){
      setFactor(factor-1);
      setCount(0)
     }
    
    return (
      <div className='main'>
        <h1>set the Factor {factor}</h1>
        <div className='button'>
       <button onClick={factIncrement} className='btn'>factor Add</button>
       <button onClick={factDecreemnt} className='btn'>factor Remove</button>
       </div>
       <h1>Number increment and decrement : {count}</h1>
       <div className='button'>
       <button onClick={increment} className='btn'>Add</button>
       <button onClick={decrement} className='btn'>Remove</button>
       </div>
      
      </div>
    )
}
export default Count;
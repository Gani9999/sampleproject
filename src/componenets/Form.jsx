

import { useState } from "react";

const Form=()=>{
    // const[name, setName]=useState('')
    const [name, setName]=useState({firstName:'',lastName:''})

    function submitHandler(e){
        e.preventDefault();
        console.log(name)
    }

    return(
        <div>
            
            <h1>hello {name.firstName} - {name.lastName}</h1>
            {/* <input type="text"  value={name} onChange={e=>setName(e.target.value)}/> */}
            <label> FirstName :</label>
            <input type="text" onChange={e=>setName({...name,firstName:e.target.value})}/> <br/><br/>
            <label>LastName </label>
            <input type="text" onChange={e=>setName({...name,lastName:e.target.value})} /> <br/><br/>

            <button onClick={submitHandler}>submit</button>


        </div>
    )
}
export default Form;
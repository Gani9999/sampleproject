

const InputContainer=({inputVal,writeTodo,addTodo})=>{
    return(
        <div className="input-Container">
                <input type="text" value={inputVal} onChange={writeTodo}/>
                <button onClick={addTodo}>+</button>
          </div>
    )
}
export default InputContainer;
const Todo=({todo,index,delTodos})=>{
    return(
             <div className="todo">
                    <p>{todo}</p>
                    <div className="action">
                        <input type="checkbox"/>
                        <button onClick={()=>delTodos(index)}>Delete</button>
                    </div>
                </div>
    )
}
export default Todo;
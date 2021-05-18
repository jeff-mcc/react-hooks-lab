// AddTodo.js will be responsible for rendering the necessary input and button to make this interface work.
import {useState} from 'react'
// import Todo from './Todo'

// let listArr = ['Go shopping','Walk the dog','Do my chores'];

const AddTodo = (props) => {
    const [todo,setTodo] = useState('');
    // const [list,setList] = useState(props.listArr);

    // console.log("todo",todo)
    // console.log("list",list)

    return(
        <>
            <input placeholder="Add a todo!" value={todo} onChange={(e)=>setTodo(e.target.value)}/>
            <button onClick={()=>{
                // Todo(todo)
                props.updateList(todo)
                setTodo('')
            }}>Submit</button>
        </>
    )
}

export default AddTodo
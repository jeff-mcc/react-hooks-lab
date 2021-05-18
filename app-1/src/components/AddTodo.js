// AddTodo.js will be responsible for rendering the necessary input and button to make this interface work.
import {useState} from 'react'

// let listArr = ['Go shopping','Walk the dog','Do my chores'];

const AddTodo = (listArr) => {
    const [todo,setTodo] = useState('');
    const [list,setList] = useState(listArr);

    return(
        <>
            <input placeholder="Add a todo!" value={todo} onChange={(e)=>setTodo(e.target.value)}/>
            <button onClick={()=>setList([...list,todo])}>Submit</button>
        </>
    )
}

export default AddTodo
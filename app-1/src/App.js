import './App.css';
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'
import List from './components/List'
import {useState} from 'react'

function App() {
  // const listArr = Todo();
  // console.log("list",listArr)
  const [listArr,setListArr] = useState(Todo)

  const updateList = (listItem) => {
    setListArr([...listArr,listItem])
  }

  return (
    <div className="App">
      <AddTodo updateList={updateList}/>
      {listArr.map((li)=>{
        return(
          <List key={li} li={li} />
        )
      })}
    </div>
  );
}

export default App;

//listArr={listArr}
import './index.css'
import Header from './components/Header'
import InputBox from './components/InputBox'
import ActionButtonContainer from './containers/ActionButtonContainer'
import TodoItem from './components/TodoItem'
import { useState } from 'react'
import TodoList from './components/TodoList'

function App() {

  const [todos, setTodos] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  console.log(selectedIds)

  // add new todo

  const addTodo = (task)=>{
    setTodos([...todos, {id: Date.now(), task:task, completed:false}]);
  };

  // delete

  const deleteTodos = ()=> {
    setTodos(todos.filter((todo)=> !selectedIds.includes(todo.id)));
    setSelectedIds([])
  }

  // update

  const updateTodo = (id, newTodo)=> {
    setTodos(todos.map((todo)=> todo.id === id ? {...todo, task: newTodo} : todo))

  }

  // select or deselect a todo

  const toggleSelection = (id) => {
    setSelectedIds(prev=>
      prev.includes(id) ? prev.filter(selectedId => selectedId !==id) : [...prev, id]
    )
  }

  const completeTodos = (id) =>{

  }

  const activeTodos = todos.filter(todo => !todo.completed)
  const completedTodos = todos.filter(todo=> todo.completed)
  return (
    <>
        <Header/>  
        <main className='w-full h-screen bg-cyan-100 pt-4 '>
          <div className='container w-[800px] p-10 mx-auto h-screen bg-cyan-300/50 rounded-xl'>
            <InputBox addTodo={addTodo}/>
            <ActionButtonContainer count = {selectedIds.length} deleteTodos={deleteTodos} completeTodos={completeTodos} />

            {activeTodos.length> 0 &&
            <TodoList title={'Active'}>
              {activeTodos.map((todo)=>(
                <TodoItem
                 key={todo.id}
                 toggleSelection={toggleSelection}
                 isSelected={selectedIds.includes(todo.id)}
                 todo={todo} />
              ))}
            </TodoList>
}
           {completedTodos.length > 0 &&
            <TodoList title={'Completed'}>
              {completedTodos.map((todo)=>(
                <TodoItem
                key={todo.id}
                toggleSelection={toggleSelection}
                isSelected={isSelected}
                todo={todo}
                />
              ))}

            </TodoList>
}
          </div>
          


        </main>


    </>
      
  
  )
}

export default App

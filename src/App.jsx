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

  // batch delete todos

  const batchDelete = ()=> {
    setTodos(todos.filter((todo)=> !selectedIds.includes(todo.id)));
    setSelectedIds([])
  }

  // delete single todo

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
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

  // complete a todo
  const completeTodo = (id) =>{
    setTodos(todos.map(todo=> (todo.id===id ? {...todo, completed:!todo.completed}: todo)))

  }

  const activeTodos = todos.filter(todo => !todo.completed)
  const completedTodos = todos.filter(todo=> todo.completed)
  return (
    <>
        <Header/>  
        <main className='w-full h-screen bg-cyan-100 pt-4 '>
          <div className='container w-[800px] p-10 mx-auto h-screen bg-cyan-300/50 rounded-xl'>
            <InputBox addTodo={addTodo}/>
            <ActionButtonContainer count = {selectedIds.length} deleteTodos={batchDelete} />

            {activeTodos.length> 0 &&
            <TodoList title={'Active'}>
              {activeTodos.map((todo)=>(
                <TodoItem
                 key={todo.id}
                 toggleSelection={toggleSelection}
                 isSelected={selectedIds.includes(todo.id)}
                 todo={todo}
                 completeTodo = {completeTodo}
                 deleteTodo = {deleteTodo}
                 updateTodo = {updateTodo} />
              ))}
            </TodoList>
}
           {completedTodos.length > 0 &&
            <TodoList title={'Completed'}>
              {completedTodos.map((todo)=>(
                <TodoItem
                key={todo.id}
                toggleSelection={toggleSelection}
                isSelected={selectedIds.includes(todo.id)}
                todo={todo}
                complete={completeTodo}
                deleteTodo = {deleteTodo}
                updateTodo = {updateTodo}
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

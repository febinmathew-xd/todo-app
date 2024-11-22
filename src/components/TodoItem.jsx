import React, { useState } from 'react'
import deleteIcon from '../assets/delete.svg'
import editIcon from '../assets/edit.svg'
import doneIcon from '../assets/done_outline.svg'


function TodoItem({todo, toggleSelection, isSelected, completeTodo, deleteTodo, updateTodo}) {

  const [isEditing, setIsEditing] = useState(false);
  console.log(isEditing)
  const [editedTask, setEditedTask] = useState(todo.task);

  const handleEdit = ()=> {
    updateTodo(todo.id, editedTask);
    setIsEditing(false);
  }




  return (
    <div className='flex w-[700px] justify-between bg-sky-400 cursor-pointer rounded-lg drop-shadow px-6 py-3 my-3 hover:bg-sky-400/80'>
      <div className='flex items-center'>
        {isEditing? <input type='text' className='w-[500px] rounded-lg py-1 px-3 bg-sky-200 outline-none' value={editedTask} onChange={(e)=> setEditedTask(e.target.value)} /> : 
        <>
        <input type="checkbox" checked={isSelected} onChange={()=> toggleSelection(todo.id)} className='cursor-pointer mr-2'/>
        <p className={ ` ${todo.completed? "line-through" : ''} opacity-90`}>{todo.task}</p>
        </>
  }
      </div>
        <div className='flex items-center'>
        {todo.completed ? <img onClick={()=> deleteTodo(todo.id)} className='mx-2 hover:scale-110' src={deleteIcon} alt="delete icon" width={30} height={30} /> :
        <>
        
        <img onClick={()=>(isEditing? handleEdit(): completeTodo(todo.id))} className='mx-2 hover:scale-110' src={doneIcon} alt="done icon" width={30} height={30} />

        {
          !isEditing ?
        <img onClick={()=>setIsEditing(true)} className='mx-2 hover:scale-110' src={editIcon} alt="edit icon" width={30} height={30} /> : ''
        }
        <img onClick={()=> deleteTodo(todo.id)} className='mx-2 hover:scale-110' src={deleteIcon} alt="delete icon" width={30} height={30} />
        </>
      }
        </div>
        

    </div>
  )
}

export default TodoItem
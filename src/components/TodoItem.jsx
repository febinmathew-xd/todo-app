import React from 'react'

function TodoItem({todo, toggleSelection, isSelected}) {
  return (
    <div className='flex w-[700px] bg-sky-400 cursor-pointer rounded-lg drop-shadow px-6 py-3 my-3 hover:bg-sky-400/80'>
        <input type="checkbox" checked={isSelected} onChange={()=> toggleSelection(todo.id)} className='cursor-pointer mr-2'/>
        <p className='opacity-90'>{todo.task}</p>
    </div>
  )
}

export default TodoItem
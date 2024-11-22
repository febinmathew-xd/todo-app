import React from 'react'

function TodoList({children, title}) {
  return (
    
    <div className='w-full'>
        <h3 className='text-lg font-semibold text-sky-700'>{title}</h3>
        

        {children}
      
    </div>
    
  )
}

export default TodoList
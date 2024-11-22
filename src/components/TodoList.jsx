import React from 'react'

function TodoList({children, title}) {
  return (
    
    <div className='w-full'>
        <h3 className='text-lg font-semibold text-green-500'>{title}</h3>
        

        {children}
      
    </div>
    
  )
}

export default TodoList
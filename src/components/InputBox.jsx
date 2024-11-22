import React, { useState } from 'react'

function InputBox({addTodo}) {

    const [task, setTask] = useState('');

    const handleClick = (e) => {
        if (!task.trim()) return;
        addTodo(task);
        setTask('');
    }





  return (
    <div className='w-full  py-2 px-2  flex justify-center items-center'>
        <input onChange={(e)=>setTask(e.target.value)} value={task} type="text" className='rounded-xl focus:outline-none w-[400px] pl-4 p-2 drop-shadow mr-3' placeholder='what you want to do ?' />
        <button onClick={handleClick} className='bg-cyan-600 px-4 py-1 rounded-xl text-white font-bold text-base drop-shadow hover:scale-110 hover:bg-cyan-600/80'>Add</button>
    </div>
  )
}

export default InputBox
import React from 'react'
import ActionButton from '../components/ActionButton'

function ActionButtonContainer({deleteTodos, completeTodos, count}) {
    
  return (
    <div className='w-[400px] mx-auto flex justify-between my-6'>
        {count >0 ?
        <><ActionButton onClickAction = {completeTodos} label={'COMPLETE'} color={'green'}  count={count} />
        <ActionButton onClickAction = {deleteTodos} label={'DELETE'} color={'red'} count={count} /> </> : ''}
    </div>
  )
}

export default ActionButtonContainer
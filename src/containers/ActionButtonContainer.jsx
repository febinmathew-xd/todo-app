import React from 'react'
import ActionButton from '../components/ActionButton'

function ActionButtonContainer({deleteTodos, count}) {
    
  return (
    <div className='w-full pr-6 flex justify-end my-6'>
        {count >0 ?

        <ActionButton onClickAction = {deleteTodos} label={'DELETE'} color={'red'} count={count} /> : ''}
    </div>
  )
}

export default ActionButtonContainer
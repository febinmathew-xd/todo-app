import React from 'react'

const colorMap = {
  green : 'bg-green-400',
  red : 'bg-red-400'
}

function ActionButton({label, count , color, onClickAction}) {

  return (
    <button onClick={ () => onClickAction()} className={`${colorMap[color]} font-semibold text-white px-4 py-1 rounded-lg`} >
        {`${label} (${count})`} 
    </button>
  )
}

export default ActionButton
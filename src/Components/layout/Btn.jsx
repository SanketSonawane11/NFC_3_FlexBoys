import React from 'react'

const Btn = (props) => {
  return (
    <div>
        <button type={props.type} className={`w-32 h-[2.5rem] my-2 rounded-full bg-[#000] text-white ${props.color}`}>{props.text}</button>
    </div>
  )
}

export default Btn
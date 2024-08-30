import React from 'react'
import "./loading.css"

const Loading = () => {
  return (
    <div className='h-screen w-full flex justify-center items-center'><img src="/loading.gif" alt="loading" className='dressLoading'/></div>
  )
}

export default Loading
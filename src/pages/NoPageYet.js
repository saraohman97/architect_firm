import React from 'react'
import { Link } from 'react-router-dom'

const NoPageYet = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center gap-10 flex-col'>
        <h1 className=' font-light'>This page doesnt exist yet.</h1>
        <Link to='/' className='border shadow-xl text-yellow-500 py-2 px-10 rounded w-fit font-bold bg-black hover:bg-white'>Go back</Link>
    </div>
  )
}

export default NoPageYet
import React from 'react'
import {Link} from 'react-router-dom';
const Header = () => {
  return (
    <div className=' w-full text-center'>
      <Link to='/' className='text-3xl font-bold underline flex flex-col items-center m-auto justify-center mb-10'>College Explorer</Link>
    </div>
  )
}

export default Header
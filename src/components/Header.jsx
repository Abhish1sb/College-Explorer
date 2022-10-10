import React from 'react'
import { Link } from 'react-router-dom';
const Header = (props) => {
  return (
    <div className={`w-full duration-300 justify-center items-center`}>
      <Link to='/home'
        className='text-3xl font-bold underline flex flex-col items-center m-auto justify-center mb-10'>
        College Explorer
      </Link>
    </div>
    
  );
}

export default Header
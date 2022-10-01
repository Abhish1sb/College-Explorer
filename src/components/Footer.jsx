import React from 'react';

import {Link} from 'react-router-dom'

// Date importing 
const year = new Date();
const thisyear = year.getFullYear();

const Footer = (props) => {
  return (
    <div className={`${props.isOpen? 'w-[85%]':'w-[94%]' } fixed bottom-0 justify-center items-center`}>
      <footer className="p-10 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© {thisyear} <Link to='/' className="hover:underline">College Explorer™ </Link> All Rights Reserved.
        </span>
        <div className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
          <div>
            <Link to="/about" className=" mr-4 hover:underline md:mr-6 ">About</Link>
          </div>
          <div>
            <Link to="/privacypolicy" className="mr-4 hover:underline md:mr-6">Privacy Policy</Link>
          </div>
          <div>
            <Link to="/licencing" className="mr-4 hover:underline md:mr-6">Licensing</Link>
          </div>
          <div>
            <Link to="/contact" className="hover:underline">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
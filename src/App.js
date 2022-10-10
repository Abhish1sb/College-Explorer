import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom';



//TailWind  css file import
import './index.css'

// //Permanent Components imported
import { RiLoginBoxLine, RiLogoutBoxLine, RiSettings2Line } from 'react-icons/ri';
import { DiNetbeans, DiGoogleAnalytics } from 'react-icons/di';
import { FaBookOpen, FaHandsHelping } from 'react-icons/fa';
import { AiOutlineCalendar } from 'react-icons/ai';
import { MdOutlineScreenSearchDesktop } from 'react-icons/md';
import { BsPencilSquare } from 'react-icons/bs'


// importing pages 
import Home from './pages/Home'
import Contact from './pages/Contact';
import Licencing from './pages/Licencing';
import Privacypolicy from './pages/Privacypolicy';
import About from './pages/About';
import OCRPage from './pages/OCRPage';
import NIRFRanking from './pages/NIRFRanking';
import Login from './pages/Login'
import Setting from './components/Setting';

import { Link } from 'react-router-dom';


import Header from './components/Header'
import Footer from './components/Footer'

//importing images
import control from './assets/control.png';

const App = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: "Chart_fill" },
    { title: "Inbox", src: "Chat" },
    { title: "Accounts", src: "User", gap: true },
    { title: "Schedule ", src: "Calendar" },
    { title: "Search", src: "Search" },
    { title: "Analytics", src: "Chart" },
    { title: "Files ", src: "Folder", gap: true },
    { title: "Setting", src: "Setting" },
  ];

  return (
    <div className="flex">
      <div
        className={` ${open ? "w-[13%]" : "w-[6%] "
          } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src={control} alt="Control"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="https://res.cloudinary.com/albodiabhish1/image/upload/v1664920750/coloured_ce_dmuo2z.png" alt="Logo"
            className={`cursor-pointer duration-300 transition-all w-12 ease-in ${open && "rotate-[180deg]"
              }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 transition-all ease-in ${!open && "scale-0"
              }`}
          >
            CE
          </h1>
        </div>
        <ul>
          <li>
            <Link
              to='/home'
              className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-100 text-sm items-center gap-x-4 mt-9`}
            >
              <div>
                <DiNetbeans className='text-2xl' />
              </div>
              <span className={`${!open && "scale-0"} origin-left transition-all ease-in-out duration-200`}>
                Home
              </span>
            </Link>
          </li>
          <li>
            <Link
              to='/ocrpage'
              className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-100 text-sm items-center gap-x-4 mt-9`}
            >
              <div>
                <DiGoogleAnalytics className='text-2xl' />
              </div>
              <span className={`${!open && "scale-0"} origin-left transition-all ease-in-out duration-200`}>
                OCR
              </span>
            </Link>
          </li>
          <li>
            <Link
              to='/consulting'
              className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-100 text-sm items-center gap-x-4 mt-2`}
            >

              <div>
                <FaHandsHelping className='text-xl' />
              </div>
              <span className={`${!open && "scale-0"} origin-left transition-all ease-in-out duration-200`}>
                Consulting
              </span>
            </Link>
          </li>
          <li>
            <Link
              to='/nirfrank'
              className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-100 text-sm items-center gap-x-4 mt-2`}
            >

              <div>
                <FaBookOpen className='text-xl' />
              </div>
              <span className={`${!open && "scale-0"} origin-left transition-all ease-in-out duration-200`}>
                NIRF
              </span>
            </Link>
          </li>
          <li>
            <Link
              to='/review'
              className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-100 text-sm items-center gap-x-4 mt-2`}
            >

              <div>
                <BsPencilSquare className='text-xl' />
              </div>
              <span className={`${!open && "scale-0"} origin-left transition-all ease-in-out duration-200`}>
                Review
              </span>
            </Link>
          </li>
          <li>
            <Link
              to='/setting'
              className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-100 text-sm items-center gap-x-4 mt-10`}
            >
              <div>
                <RiSettings2Line className='text-xl' />
              </div>
              <span className={`${!open && "scale-0"} origin-left transition-all ease-in-out duration-200`}>
                Setting
              </span>
            </Link>
          </li>
          <li>
            <Link
              to='/'
              className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-100 text-sm items-center gap-x-4 mt-2`}
            >
              <div>
                <RiLogoutBoxLine className='text-xl' />
              </div>
              <span className={`${!open && "scale-0"} origin-left transition-all ease-in-out duration-200`}>
                LogOut
              </span>
            </Link>
          </li>
        </ul>
      </div>
      <div className={`${open ? "w-[87%]" : "w-[94%]"} flex-1 `}>
        <Header isOpen={open} />
        <div className="text-xl font-semibold justify-center items-center">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/licencing" element={<Licencing />} />
            <Route path="/privacypolicy" element={<Privacypolicy />} />
            <Route path="/ocrpage" element={<OCRPage />} />
            <Route path="/nirfrank" element={<NIRFRanking />} />
            <Route path="/setting" element={<Setting />} />
          </Routes>
        </div>
        <Footer isOpen={open} />
      </div>
    </div>
  );
}
export default App


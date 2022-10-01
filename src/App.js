import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
// import { TooltipComponent } from '@syncfusion/ej2-react-popups';


//TailWind  css file import
import './index.css'

// //Permanent Components imported
import { RiLoginBoxLine, RiSettings2Line } from 'react-icons/ri';
import { DiNetbeans, DiGoogleAnalytics } from 'react-icons/di';
import { FaBookOpen, FaHandsHelping } from 'react-icons/fa';
import { AiOutlineCalendar } from 'react-icons/ai';
import { MdOutlineScreenSearchDesktop } from 'react-icons/md';


// importing pages 
import Home from './pages/Home'
import Contact from './pages/Contact';
import Licencing from './pages/Licencing';
import Privacypolicy from './pages/Privacypolicy';
import About from './pages/About';
import OCRPage from './pages/OCRPage';
import NIRFRanking from './pages/NIRFRanking';
import Login from './pages/Login'

import { Link } from 'react-router-dom';


import Header from './components/Header'
import Footer from './components/Footer'


const App = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Login", src: "RiLoginBoxLine", alt: "/" },
    { title: "About", src: "DiNetbeans", alt: "/about" },
    { title: "Exam", src: "FaBookOpen", gap: true, alt: "/exam" },
    { title: "Schedule ", src: "AiOutlineCalendar", alt: "/schedule" },
    { title: "Search", src: "MdOutlineScreenSearchDesktop", alt: "/ocrpage" },
    { title: "Consulting", src: "FaHandsHelping", alt: "/consult" },
    { title: "Analyse ", src: "DiGoogleAnalytics", gap: true, alt: "/analyse" },
    { title: "Setting", src: "RiSettings2Line", alt: "/setting" },
    { title: "Home", src: "RiSettings2Line", alt: "/home" },
    { title: "Privacypolicy", src: "RiSettings2Line", alt: "/privacypolicy" },
    { title: "NIRF", src: "RiSettings2Line", alt: "/nirfranking" },
  ];

  return (
    <div className="flex">
      <div
        className={` ${open ? "w-[13%]" : "w-[6%] "
          } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src="https://raw.githubusercontent.com/Sridhar-C-25/sidebar_reactTailwind/main/src/assets/control.png" alt="Control"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="https://raw.githubusercontent.com/Sridhar-C-25/sidebar_reactTailwind/main/src/assets/logo.png" alt="Logo"
            className={`cursor-pointer duration-300 transition-all ease-in ${open && "rotate-[180deg]"
              }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 transition-all ease-in ${!open && "scale-0"
              }`}
          >
            CE
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((item, index) => (
            <Link
              to={item.alt}
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${item.gap ? "mt-9" : "mt-2"}`}
            >
              <item.src />
              <span className={`${!open && "scale-0"} origin-left transition-all ease-in-out duration-200`}>
                {item.title}
              </span>
            </Link>
          ))}
          {/* <Link to='/' className='' ></Link> */}
        </ul>
      </div>
      <div className={`${open ? "w-[87%]" : "w-[94%]"}`}>
        <Header />
        <div className="pl-7 text-xl font-semibold ">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/licencing" element={<Licencing />} />
            <Route path="/privacypolicy" element={<Privacypolicy />} />
            <Route path="/ocrpage" element={<OCRPage />} />
            <Route path="/nirfrank" element={<NIRFRanking />} />
          </Routes>
        </div>
        <Footer isOpen={open} />
      </div>
    </div>
  );
}

// const App = () => {
//   return (
//     <>
//       <div className="">
//         <Sidebar />
//         <Routes>
//           <Route path="/" element={<Login />} />
//           <Route path="/home" element={<Home />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/licencing" element={<Licencing />} />
//           <Route path="/privacypolicy" element={<Privacypolicy />} />
//           <Route path="/ocrpage" element={<OCRPage />} />
//           <Route path="/nirfrank" element={<NIRFRanking />} />
//         </Routes>
//       </div>
//     </>
//   )
// }

export default App
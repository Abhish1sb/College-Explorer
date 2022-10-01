import React, { useState } from 'react'
import { Link } from 'react-router-dom';


import Header from './Header'
import Footer from './Footer'


const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "About", to: "/about", src: "https://raw.githubusercontent.com/Sridhar-C-25/sidebar_reactTailwind/main/src/assets/Chart_fill.png", alt: "chart_fill" },
    { title: "Counceling", to: "/councelling", src: "https://raw.githubusercontent.com/Sridhar-C-25/sidebar_reactTailwind/main/src/assets/Chat.png", alt: "chat" },
    { title: "Colleges", to: "/colleges", src: "https://raw.githubusercontent.com/Sridhar-C-25/sidebar_reactTailwind/main/src/assets/User.png", gap: true, alt: "user" },
    { title: "Courses", to: "/courses", src: "https://raw.githubusercontent.com/Sridhar-C-25/sidebar_reactTailwind/main/src/assets/Calendar.png", alt: "calendar" },
    { title: "OCR", to: "/ocrpage", src: "https://raw.githubusercontent.com/Sridhar-C-25/sidebar_reactTailwind/main/src/assets/Search.png", alt: "search" },
    { title: "Exams", to: "/exams", src: "https://raw.githubusercontent.com/Sridhar-C-25/sidebar_reactTailwind/main/src/assets/Chart.png", gap: true, alt: "chart" },
    { title: "Result", to: "/result", src: "https://raw.githubusercontent.com/Sridhar-C-25/sidebar_reactTailwind/main/src/assets/Folder.png", alt: "folder" },
    { title: "Setting", to: "/setting", src: "https://raw.githubusercontent.com/Sridhar-C-25/sidebar_reactTailwind/main/src/assets/Setting.png", alt: "setting" },
  ];

  return (
    <div className="flex">
      <div
        className={` ${open ? "w-[15%]" : "w-[6%] "
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
              to={item.to}
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${item.gap ? "mt-9" : "mt-2"}`}
            >
              <img src={`${item.src}`} alt={`${item.alt}`} />
              <span className={`${!open && "scale-0"} origin-left transition-all ease-in-out duration-200`}>
                {item.title}
              </span>
            </Link>
          ))}
        </ul>
      </div>
      <div className={`${open ? "w-[85%]" : "w-[94%]"}`}>
        <Header />
        <h1 className="pl-7 text-2xl font-semibold ">Home Page</h1>
        <Footer isOpen={open} />
      </div>
    </div>
  );
}

export default Sidebar
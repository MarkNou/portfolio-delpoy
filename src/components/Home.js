import React from 'react'
import Hero from '../assets/mkn.jpg'
import {MdOutlineKeyboardDoubleArrowRight} from 'react-icons/md'
import {Link} from 'react-scroll'



const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row md:pl-10 ">
        <div className="flex flex-col justify-center h-full">
        <h2 class='neon4'>Hi, I'm Mark </h2>
          <h2 class='neon'>Full Stack Developer </h2>
          <p className="text-white py-4 max-w-md">

          I'm a full-stack developer based out of San Diego, Ca. I've always had a passion for graphic design and art. The ability to combine that into functioning applications is what drives and inspires me.
          </p>
          <h2 class='neon3'>Lets create. </h2>

          <div>
            <Link to="portfolio" 
            smooth duration={500} 
            className="group text-white shadow-glow-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardDoubleArrowRight size={25} className="ml-1"/>
              </span>
            </Link>
          </div>
        </div>

          <div className='md:pl-10 '> 
            <img className=' rounded-full w-50 h-50 object-cover py-10 '
             src={Hero} 
             alt='my profile'/> 
          </div>
        </div>
      </div>
  
  );
};

export default Home;
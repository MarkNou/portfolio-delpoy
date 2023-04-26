import React from 'react'
import HeroImage from '../assets/heroImage.png'
import {MdOutlineKeyboardDoubleArrowRight} from 'react-icons/md'
import {Link} from 'react-scroll'


const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
        <h2 class='neon4'>Hi, I'm Mark </h2>
          <h2 class='neon'>Full Stack Developer </h2>
          <p className="text-gray-500 py-4 max-w-md">

            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
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

          <div>
            <img className='filter  rounded-full mx-auto  w-1/2 md:w-full drop-shadow-md' src={HeroImage} alt='my profile'/> 
          </div>
        </div>
      </div>
  
  );
};

export default Home;
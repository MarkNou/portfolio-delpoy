import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">

            <div className='pb-8'>
                <p className='neon1'>About</p>
            </div>
            <p className='text-xl mt-20 '>
            Hello! My name is Mark Nou and I am a developer with a passion for art and graphic design. Prior to my career in development, I worked in operation management in the logistics industry. While I enjoyed my work, I felt a deep desire to pursue my creative side and use my problem-solving skills in a more hands-on way. This led me to make the switch to development, where I have found a perfect balance between creativity and analytical thinking. I love being able to bring my ideas to life through code and design, and I am constantly seeking new challenges and opportunities to grow. 
             </p>
             <br />
             <p className='text-xl'> 
             I primarily work with React, Tailwind, HTML, CSS, Ruby on Rails, Ruby, and PostgreSQL, and am always excited to learn new technologies and expand my skillset.

             </p>
        </div>
    </div>
  )
}

export default About
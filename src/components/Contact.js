import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p className='neon1 text-center'>Contact</p>
                <p className='py-6 text-center'>Submit the form below to get in touch with me</p>
            </div>
            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/5b886b03-27f3-4eca-8f57-20f22242602c" 
                method="POST"
                className='flex flex-col w-full md:w-1/2'>
                    <input type="text"
                     name="name" 
                     placeholder="Enter your name" 
                     className='p-2 bg-transparent border-2 text-white focus:outline-none shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]' />
                    <input type="text" 
                    name="email" 
                    placeholder="Enter your email" 
                    className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]' />
                    <textarea name="message"
                     rows="10" 
                     placeholder="Enter your message"
                     className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] "></textarea>
                    <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">Lets Talk</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact
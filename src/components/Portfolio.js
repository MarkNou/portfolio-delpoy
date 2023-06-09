import React from 'react'
import concertgo from '../assets/portfolio/concertgo1.png'
import hightension from '../assets/portfolio/hightension1.png'
import flatfinder from '../assets/portfolio/flatfinderpro1.png'

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: concertgo,
            url1: 'https://concertgo.onrender.com/',
            url2: 'https://github.com/Wham-Devs/concert-go-frontend',
            title: 'Concert Go',
            description: 'Concert Go is a fullstack application for concert venues. Written in React, Ruby on Rails, and PostgreSQL.'
        },
        {
            id: 2,
            src: hightension,
            url1:'https://github.com/learn-academy-2023-bravo/text-based-game-high-tension-2',
            url2: 'https://github.com/learn-academy-2023-bravo/text-based-game-high-tension-2',
            title: 'High Tension',
            description: 'High Tension is a text based game that allows users to choose their own adventure. Written in Ruby.'
        },
        {
            id: 3,
            src: flatfinder,
            url1: 'https://flatfinderpro.netlify.app/',
            url2: 'https://github.com/MarkNou/flatfinderpro',
            title: 'Flat Finder Pro',
            description: 'Flat Finder Pro is a fullstack application for finding apartments. Written in React, Ruby on Rails, and PostgreSQL.'
        }
        
    ]
  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800
     w-full text-white md:h-screen'>

        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl sm:text-7xl font-bold text-white text-center'> Portfolio</p>
                <p className='py-6 text-center'>Check out some of the work I've done</p>
            </div>
            
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 '>
            {
                portfolios.map(({id, src, url1, url2, title, description}) => (
                    <div key={id} className='shadow-md shadow-purple-500 rounded-lg '>
                        <p className='text-center text-xl font-bold'>{title}</p><br/>
                        <p className='text-center pb-3'>{description}</p>
                    <img src={src} alt='' className='rounded-md duration-200 hover:scale-105' />
                    <div className='flex items-center justify-center'> 
                    <button onClick={() => window.open(url1, '_blank')} className='w-1/2 px-6 py-4 m-4 duration-200 hover:scale-105' >Demo</button>
                    <button onClick={() => window.open(url2, '_blank')} className='w-1/2 px-6 py-4 m-4 duration-200 hover:scale-105' >Code</button>                   
                    </div>
                    </div>
                    
                ))
            }
              
            </div>
        </div>
    </div>
  )
}

export default Portfolio
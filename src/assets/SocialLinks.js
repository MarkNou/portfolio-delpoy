import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import myresume from '../assets/resume.pdf'


const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                LinkedIn <FaLinkedin size={30} />
                </>  
            ),
            href: 'https://www.linkedin.com/in/mark-nou-0258b2208',
            style: 'rounded-tr-md'
        }, 
        {
            id: 2,
            child: (
                <>
                GitHub <FaGithub size={30} />
                </>  
            ),
            href: 'https://github.com/MarkNou',
            style: 'rounded-tr-md'
        },
        {
            id: 3,
            child: (
                <>
                Mail <HiOutlineMail size={30} />
                </>  
            ),
            href: 'mailto:mark.nou7@gmail.com',
            style: 'rounded-tr-md'
        },
        {
            id: 4,
            child: (
                <>
                Resume <BsFillPersonLinesFill size={30} />
                </>  
            ),
            href: myresume,
            style: 'rounded-tr-md',
            download: true
        }
    ]
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
        <ul>
            {links.map(({id, child, href, style, download}) => (
                 <li
                 key={id}
                 className={`flex justify-between shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[10px] hover:rounded-md duration-300 bg-gray-500 ${style}`}
               >
               
                <a href={href} className="flex justify-between items-center w-full text-white "
                download={download}
                target='_blank'
                rel="noreferrer"
                >
                    {child}
                <>
                </>    
                </a>
            </li>
            ))}
            
        </ul>
    </div>
  )
}

export default SocialLinks
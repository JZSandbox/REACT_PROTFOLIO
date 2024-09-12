import React from 'react';
import * as motion from "framer-motion/client"
import { links } from '@/lib/data';
import Link from "next/link"


export function Header() {
  return (
   <header className='z-[999] relative'>
    <motion.div 
    initial={{y: -100, x:"0", opcaity: 0}}
    animate={{y: 0, x: "-50%", opacity: 1}}
    transition={{ ease: "easeOut", duration: 0.4 }}
    className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border -translate-x-1/2 border-white border-opacity-40  
    bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full">
    </motion.div>

    <nav className='fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[inital] sm:py-0'>
        <ul className='flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[inital] sm:flex-nowrap sm:gap-5'>
          {
            links.map(link => (
             <motion.li key={link.hash} 
             className='h-3/4 items-center justify-center'
             initial={{ x: -50, opacity: 0 }} 
             animate={{ x: 0, opacity: 1 }}
             transition={{ ease: "easeOut", duration: 0.2 }}>
                <Link href={link.hash} 
                    className='flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition'>
                    {
                        link.name
                    }
                </Link>
             </motion.li>
            ))
          }
        </ul>
    </nav>
   </header>
  )
}


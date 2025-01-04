import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
        <div className='text-center'>
        <p className="font-bold text-xl md:text-3xl lg:text-2xl xl:text-4xl ">Kajanthan<span className="text-[#ff0000]">.</span></p>
        <div className='w-max flex items-center gap-2 mx-auto mt-3'>
            <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt="" className='w-6' />
            kajanthan2k1@gmail.com
        </div>
        </div>

        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] py-6 mt-12'>
            <p>© 2025 Ulageeswaran Kajanthan. All rights reserved.</p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                <li><a target='_blank' href="https://github.com/Kaju2002">GitHub</a></li>
                <li><a target='_blank' href="https://www.linkedin.com/in/kajanthu7">LinkedIn</a></li>
                <li><a target='_blank' href="linkedin.com/in/kajanthu7">Instagram</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer
import React from 'react'
import {logo} from '../assets'

const Footer = () => {
  return (
    <div className='flex first-letter:text-green flex-col justify-center items-center h-screen gap-3'>
      <div className='w-40 '> <img src={logo} alt="" /> </div>
      <div className='text-4xl '>Contact us</div>
      <div className='text-lg'>telephone: 91###########</div>
      <div className='text-lg mb-16'>email: danjanmaster@hotmail.com</div>
      <div className='text-green'>Copyright @2023</div>
    </div>
  )
}

export default Footer

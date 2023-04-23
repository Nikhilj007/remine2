import React from 'react'
import About from './About'

const Hero2 = () => {
  return (
    <div className='flex max-sm:flex-col mb-20 mt-24 max-sm:mt-40'>
      <div className='flex flex-col  p-10 '>
        <div className='text-5xl text-green my-5'>Recycling green energy source.</div>
        <div className='text-lg pr-7 pl-9'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque debitis exercitationem doloribus labore expedita hic esse qui quod id corrupti?</div>
        <div className='flex'></div>
      </div>
      <div className='w-1/3 mr-10 max-sm:w-full'><About/></div>
    </div>
  )
}

export default Hero2

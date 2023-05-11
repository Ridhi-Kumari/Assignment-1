import React from 'react'

function Footer() {
  return (
    <div className="border bg-[#f42053] text-white flex-1 flex  items-center">
      <div className='flex w-[65%] justify-between pl-48 items-center'>
        <h1 className='font-semibold text-[17px]'>FOLLOW US</h1>
        <div className='flex w-[10rem] justify-between '>
          <img src="/facebook.png" alt="" className='object-contain h-6'/>
          <img src="/instagram.png" alt="" className='object-contain h-6'/>
          <img src="/Twitter.png" alt="" className='object-contain h-6'/>
          <img src="/YouTube.png" alt="" className='object-contain h-6'/>
        </div>
        <span className='inline-block text-[11px] w-[18rem]'>
        1.2M People are following this. Be the first of your friends to follow this
        </span>
      </div>
    </div>
  )
}

export default Footer
 "use client";

import { useRouter } from 'next/navigation'
import React from 'react'

function Payment () {
  const router = useRouter();
  function backtohome() {
    router.push('/');
  }
  return (
    <div className='flex flex-col'>
    <div className='flex flex-auto items-center justify-center mt-10 font-extralight text-[20px]'>
      <span className='bg-green-500 p-3 rounded-lg '>Pay Cash On Delivery after Completeing your Ride</span></div>
      <div className='flex items-center justify-center mt-3'>
        Thanks for Taking a Ride
      </div>
      <div className='flex items-center justify-center mt-3 '>
        <button className='bg-yellow-500 p-2 rounded-md' onClick={backtohome}>Back To Home</button>
      </div>
      </div>
  )
}

export default Payment;

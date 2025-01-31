import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React from 'react'
import comingSoon from '../../public/Coming soon.png'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <div className='bg-custom-bg-fan'>

      <div className='bg-custom-bg-fan mx-20 my-20'>
        <div className='flex justify-between'>
          <p className='text-6xl font-intel font-bold'>Launching Soon</p>
          <div className="">
            <button className="px-8 py-4 bg-green-900 rounded-full border text-white mx-4">Best Sellers</button>
            <button className="border border-red-900 text-red-900 bg-white px-6 py-4 rounded-full hover:bg-brown-500 hover:text-white transition">
              New Launches
            </button>

          </div>
        </div>

        <div className='my-12 flex gap-4'>

          <div className='flex flex-col border border-custom-bg-fan-900 rounded-xl justify-center items-center'>
            <Image src={comingSoon} alt='comingSoon' height={350} width={350} />
            <p className='font-bold font-intel text-xl my-4'>Dry fruits Mix pickle 475g</p>
            <button className='bg-custom-red text-white px-24 rounded-full py-2'>Notify me</button>

          </div>
          <div className='flex flex-col border border-custom-bg-fan-900 rounded-xl justify-center items-center'>
            <Image src={comingSoon} alt='comingSoon' height={350} width={350} />
            <p className='font-bold font-intel text-xl my-4'>Dry fruits Mix pickle 475g</p>
            <button className='bg-custom-red text-white px-24 rounded-full py-2'>Notify me</button>

          </div>
          <div className='flex flex-col border border-custom-bg-fan-900 rounded-xl justify-center items-center'>
            <Image src={comingSoon} alt='comingSoon' height={350} width={350} />
            <p className='font-bold font-intel text-xl my-4'>Dry fruits Mix pickle 475g</p>
            <button className='bg-custom-red text-white px-24 rounded-full py-2'>Notify me</button>

          </div>
          <div className='flex flex-col border border-custom-bg-fan-900 rounded-xl justify-center items-center'>
            <Image src={comingSoon} alt='comingSoon' height={350} width={350} />
            <p className='font-bold font-intel text-xl my-4'>Dry fruits Mix pickle 475g</p>
            <button className='bg-custom-red text-white px-24 rounded-full py-2'>Notify me</button>

          </div>
        </div>


      </div>


      <div className="bg-custom-green flex my-20 py-2 justify-between">
        <p className="text-white text-2xl py-4">RY JAR HAS A STORY</p>
        <svg className="mx-8 " width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 0C14.4753 7.52634 20.4736 13.5247 28 14C20.4736 14.4753 14.4753 20.4736 14 28C13.5247 20.4736 7.52634 14.4753 0 14C7.52634 13.5247 13.5247 7.52634 14 0Z" fill="#FEC136" />
        </svg>

        <p className="text-white font-intel text-2xl py-4">EVERY JAR HAS A STORY</p>
        <svg className="mx-8 " width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 0C14.4753 7.52634 20.4736 13.5247 28 14C20.4736 14.4753 14.4753 20.4736 14 28C13.5247 20.4736 7.52634 14.4753 0 14C7.52634 13.5247 13.5247 7.52634 14 0Z" fill="#FEC136" />
        </svg>

        <p className="text-white font-intel text-2xl py-4">EVERY JAR HAS A STORY</p>
        <svg className='mx-8 ' width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 0C14.4753 7.52634 20.4736 13.5247 28 14C20.4736 14.4753 14.4753 20.4736 14 28C13.5247 20.4736 7.52634 14.4753 0 14C7.52634 13.5247 13.5247 7.52634 14 0Z" fill="#FEC136" />
        </svg>

        <p className="text-white font-intel text-2xl py-4">EVERY JAR HAS A STORY</p>


      </div>

      <Footer />


    </div>
  )
}

export default page

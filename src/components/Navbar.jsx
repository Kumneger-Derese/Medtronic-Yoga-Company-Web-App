import { FaArrowRight } from 'react-icons/fa'
import { navLinks } from '../constant'
import { MdStarRate } from 'react-icons/md'
import { CiMenuFries } from 'react-icons/ci'
import { useState } from 'react'
import { HiXMark } from 'react-icons/hi2'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const smoothScroll = link => {
    const el = document.querySelector(link.href)
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className='flex justify-between items-center absolute top-4 bg-neutral-200 rounded-3xl pl-4 pr-2 py-2 w-[90%]  border border-gray-300 mb-4'>
      {/* Logo */}
      <div className='flex gap-x-1 items-center'>
        <div className='bg-light p-2 rounded-full'>
          <MdStarRate className='text-black' />
        </div>
        <h1 className='text-xl font-bold'>Medtronic</h1>
      </div>

      {/* Desktop Menu */}
      <ul className='hidden lg:flex items-center gap-x-6 font-medium'>
        {navLinks.map(link => (
          <li
            key={link.id}
            className='hover:translate-y-2 duration-500 transition-transform will-change-transform'
            onClick={() => smoothScroll(link)}
          >
            {link.title}
          </li>
        ))}
      </ul>

      {/* Desktop buttons */}
      <div className='hidden lg:flex gap-x-4 items-center'>
        <button className='font-medium'>Login</button>
        <button className='bg-light  flex items-center gap-x-2 font-semibold rounded-full px-4 py-2'>
          Sign Up
          <FaArrowRight className='text-black size-4' />
        </button>
      </div>

      {/* Mobile Trigger */}
      <div className='lg:hidden mr-4' onClick={() => setIsOpen(true)}>
        <CiMenuFries size={22} strokeWidth={1.1} />
      </div>

      <div
        className={`fixed z-[100] top-0 right-0 h-full w-1/2 sm:w-1/3 pr-8 p-4 bg-black text-white transform transition-transform duration-300 
        ${isOpen ? 'translate-x-' : 'translate-x-full'} flex flex-col gap-y-4`}
      >
        <button
          className={'self-end my-4 mr-2 sm:mr-8'}
          onClick={() => setIsOpen(false)}
        >
          <HiXMark className={'size-8 hover:text-red-600'} />
        </button>

        <ul className={'flex flex-col gap-y-3 '}>
          {navLinks.map(link => (
            <li
              className={
                'py-2 font-medium rounded-full px-4 bg-gray-700/60 hover:bg-light hover:text-dark transition-colors duration-300'
              }
              key={link.id}
            >
              {link.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default Navbar

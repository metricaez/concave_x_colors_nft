/*  ./components/Navbar.jsx     */
import Link from 'next/link';
import { useState } from 'react';

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className='flex items-center flex-wrap bg-concave-400 p-3 '>
        <Link href='/'>
          <a className='inline-flex items-center p-2 mr-4 '>
            <img
              className='rounded-full fill-current text-white h-8 w-8 mr-2'
              src="https://pbs.twimg.com/profile_images/1463359390988357632/MJ1DbAHy_400x400.jpg"
            />
            <span className='text-xl text-white font-bold uppercase tracking-wide'>
              Concave NFT Minting
            </span>
          </a>
        </Link>
        <button
          className=' inline-flex p-3 hover:bg-concave-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none'
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        {/*<div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-concave-600 hover:text-white '>
                Home
              </a>
            </Link>
            <Link href='/polls'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-concave-600 hover:text-white'>
                Minting
              </a>
            </Link>
          </div>
        </div>
        */}
      </nav>
    </>
  );
};
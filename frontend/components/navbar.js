/*  ./components/Navbar.jsx     */
import Link from 'next/link';
import { useState } from 'react';
import {Minter} from "./minter";

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className='text-gray-900 body-font'>
        <div className='container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center md:mb-4'>
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
             href="" target="_blank"><span className="mr-3 text-xl">CONCAVE</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"
                 className="w-10 h-10 text-white p-2 bg-black rounded-full" viewBox="0 0 24 24">
              <path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"></path>
            </svg>
            <span className="ml-3 text-xl">COLORS.NFT</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900 ">About</a>
            <a className="mr-5 hover:text-gray-900">FAQ</a>
          </nav>
{/*          <button
              className='inline-flex bg-green-500 items-center mr-5 border-b-4
               hover:border-8 border-black py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0' onClick={handleClick}>Connect Wallet
          </button>*/}
          <Minter />
          <Link href='https://github.com/concave-dash/concave_x_colors_nft'>
          <svg className='mr5 cursor-pointer' href="https://github.com" target="_blank" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"  /></svg></Link>

          {/*<Link href='/'>
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
        </div>
      </nav>
    </>
  );
};
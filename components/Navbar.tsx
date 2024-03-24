import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import { AiOutlineLogout } from 'react-icons/ai';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { FiSearch } from 'react-icons/fi';
import { CgSoftwareUpload } from 'react-icons/cg';
import { TbLogout } from 'react-icons/tb';

import Logo from '../utils/kongsi.png';
import { createOrGetUser } from '../utils';
import useAuthStore from '../store/authStore';

const Navbar = () => {
  const user = false;
  const { userProfile, addUser, removeUser } = useAuthStore();
  const [searchValue, setsearchValue] = useState('');
  const router = useRouter();

  const handleSearch = (e: { preventDefault: () => void}) => {
    e.preventDefault();

    if(searchValue) {
      router.push(`/search/${searchValue}`);
    }
  }
  

  return (
    <div className='w-full flex justify-between items-center border-b-2 border-gray-200 py-2 px-4'>
        <Link href='/'>
            <div className='w-[100px] md:w-[129px]'>
                <Image
                    className='cursor-pointer'
                    src={Logo}
                    alt='Kongsi'
                    layout='responsive'
                />
            </div>       
        </Link>

        <div className='relative hidden md:block' >
          <form
            onSubmit={handleSearch}
            className='absolute md:static top-10 -left-20 bg-white'
          >
            <input
              type='text'
              value={searchValue}
              onChange = {(e) => setsearchValue(e.target.value)}
              placeholder='Search Accounts and Videos'
              className='bg-primary p-3 md:text-md font-medium border-2 border-gray-100 focus:outline-none focus:border-2 focus:border-gray-300 w-[300px] md:w-[450px] rounded-xl md:top-0'
            />
            <button
              onClick={handleSearch}
              className='absolute md:right-5 right-6 top-4 border-l-2 border-gray-300 pl-4 text-2xl text-gray-400'
            >
              <FiSearch/>
            </button>
          </form>
        </div>

        <div>
          {userProfile ? (
            <div className='flex gap-5 md:gap-10'>
              <Link href="/upload">
                <button className='border-2 px-4 py-1  md:px-4 text-md font-semibold flex items-center gap-2 rounded-md hover:text-white hover:bg-[#4895ef]'>
                  <CgSoftwareUpload className='text-xl'/> {` `}
                  <span className='hidden md:block'>Upload</span>
                </button>
              </Link>
              
              <button 
              className='border-2 px-4 py-1  md:px-4 text-md font-semibold flex items-center gap-2 rounded-md hover:text-white hover:bg-[#c1121f]'
              type='button'
              onClick={() => {
                googleLogout();
                removeUser();
              }}
              >
                <TbLogout  fontSize={21}/>
                <span className='hidden md:block'>LogOut</span>
              </button>
              {userProfile.image && (
                 <Link href="/">
                  <>
                    <Image
                      width={40}
                      height={40}
                      className='rounded-full cursor-pointer'
                      src={userProfile.image}
                      alt='profile photo'

                    />
                  </>
               </Link>
              )}
            </div>
          ) : (
            <GoogleLogin
              onSuccess={(response) => createOrGetUser(response, addUser)}
              onError={() => console.log('Error')}
            />
          )}
        </div>
    </div>
  )
}

export default Navbar
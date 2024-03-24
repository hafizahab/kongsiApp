import React, { useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import GooglgeLogin from 'react-google-login';
import { TbMenu2 } from 'react-icons/tb';
import { CgClose } from 'react-icons/cg';
import {RiHomeHeartFill} from 'react-icons/ri'

import Discover from './Discover';
import SuggestedAccounts from './SuggestedAccounts';
import Footer from './Footer';


const Sidebar = () => {
    const [showSidebar, setShowSidebar] = useState(true);

    const userProfile = false;

    const normalLink = 'flex items-center gap-3 hover:bg-primary p-3 justify-center xl:justify-start cursor-pointer font-semibold text-[#13228C] rounded';

  return (
    <div>
        <div
            className='block xl:hidden m-2 ml-4 mt-3 text-xl'
            onClick={() => setShowSidebar((prev) => !prev)}
        >
            {showSidebar ? <CgClose/> : <TbMenu2 />}
        </div>
        {showSidebar && (
            <div className='xl:w-400 w-20 flex flex-col justify-start mb-10 border-r-2 border-gray-100 xl:border-0 p-3 '>
                <div className='xl:border-b-2 border-gray-200 xl:pb-4'>
                    <Link  href='/'>
                        <div className={normalLink}>
                            <p className='text-2xl'><RiHomeHeartFill /></p>
                            <span className='text-xl hidden xl:block'>
                                For you
                            </span>
                        </div>
                    </Link>
                </div>
                <Discover />
                <SuggestedAccounts/>
                <Footer />
            </div> 
        )}
    </div>
  );
};

export default Sidebar
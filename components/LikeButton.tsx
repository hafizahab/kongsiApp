import React, {useState, useEffect} from 'react';
import {MdFavorite, MdFavoriteBorder} from 'react-icons/md'

import useAuthStore from '../store/authStore';

interface IProps {
    handleLike: () => void;
    handleDislike: () => void;
    likes: any[];
}

const LikeButton = ({ likes, handleLike, handleDislike}: IProps) => {
    const [alreadyLike, setAlreadyLike] = useState(false);
    const {userProfile} : any = useAuthStore();
    const filterLikes = likes?.filter((item) => item._ref === userProfile?._id);

    useEffect(() => {
        if(filterLikes?.length > 0) {
            setAlreadyLike(true);
        } else {
            setAlreadyLike(false);
        }
    }, [filterLikes, likes])


  return (
    <div className='flex gap-6'>
        <div className='flex flex-col justify-center items-center cursor-pointer pb-3'>
            {alreadyLike ? (
                <div 
                    className='bg-primary rounded-full p-3  text-[#d62828]'
                    onClick={handleDislike}
                > 
                    <MdFavorite className='text-lg md:text-2xl'/>
                </div>
            ) : (
                <div 
                className='bg-primary rounded-full p-3'
                onClick={handleLike}
            > 
                <MdFavoriteBorder className='text-lg md:text-2xl'/>
                </div>
            )}
            <p className='text-sm font-semibold'>{likes?.length || 0}</p>
        </div>
    </div>
  )
}

export default LikeButton
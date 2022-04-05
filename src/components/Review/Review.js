import { faStar, faStarHalfAlt, faThumbsUp, faThumbsDown, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Review = ({ review: { img, username, ratting, review, time } }) => {
    console.log(review);
    return (
        <div className=' bg-white mb-4 p-4 rounded-lg shadow-lg hover:shadow-2xl hover:shadow-[#23a5f05c]'>
            <div className='flex items-center gap-3 text-left justify-between'>
                <div className='flex items-center '>
                    <img className='w-[100px] h-[100px] rounded-full' src={img} alt="" />
                    <div className='flex'>
                        <div className='ml-4'>
                            <p className=' text-[14p7x] font-semibold font-serif'>{username}</p>
                            <p className='text-[#F3CD03]'>
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={ratting === "5.0" ? faStar : faStarHalfAlt} />
                                <span className=' text-black font-mono ml-3'>{ratting}</span>
                            </p></div>
                    </div>
                </div>
                <p>{time} ago</p>
            </div>
            <p className=' text-left text-[14px]'>{review}</p>
            <p className='text-left'><span className=' font-bold text-gray-600'>Helpful?</span>
                <FontAwesomeIcon className='ml-4 mr-3 text-gray-400 hover:text-yellow-400' icon={faThumbsUp} />
                <FontAwesomeIcon className='ml-4 mr-3 text-gray-400 hover:text-yellow-400' icon={faThumbsDown} />
            </p>

        </div>
    );
};

export default Review;
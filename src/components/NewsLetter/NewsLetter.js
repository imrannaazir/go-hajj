import React from 'react';
import { Link } from 'react-router-dom';

const NewsLetter = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 items-center bg-[#252B42] h-[257px]'>
            <div className=''>
                <p className='text-[30px] lg:text-[40px]
                font-bold text-white'>Get In Touch</p>
                <p className='text-gray-400'>Join our Newsletter to receive the latest updates and promotions.</p>

            </div>

            <div>
                <input className='border-2 h-10 bg-[#FAFAFA] border-white pl-6  ' type="email" placeholder='Your Email' name="" id="" />
                <Link to='/login'>
                    <button className='h-10 px-6 py2 bg-[#23A6F0] rounded-r-full border-white border-2  text-white'>Subscribe</button>
                </Link>

            </div>

        </div>
    );
};

export default NewsLetter;

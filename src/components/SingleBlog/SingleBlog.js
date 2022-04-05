import React from 'react';
import { Link } from 'react-router-dom';

const SingleBlog = ({ blog: { title, img, blog, id } }) => {
    return (
        <div className=' relative mx-12'>
            <img className=' hover:opacity-100 hover:blur-sm' src={img} alt="" />
            <div className=' absolute left-6 w-[350] bottom-7 text-left'>
                <p className='text-white font-mono'>Blog - {id}</p>
                <p className='text-[20px] w-[350px] text-white pb-4'>{title}</p>
                <Link to='/blogs'>
                    <button className='px-6 py-2 bg-[#23A6F0] rounded-full text-white hover:bg-transparent border-2 border-[#23A6F0]'>Read More</button></Link>
            </div>

        </div>
    );
};

export default SingleBlog;
import React from 'react';

const Blog = ({ blog: { img, id, title, blog } }) => {
    console.log(blog);

    return (
        <div className='grid grid-cols-2 w-[50%] mx-auto gap-8 mt-8 '>

            <div style={id === 2 ? { order: '2' } : { order: '1' }}  >
                <img className=' shadow-2xl shadow-[#23a5f0ba] rounded-lg' src={img} alt="" />
            </div>

            <div style={id === 2 ? { order: '1' } : { order: '2' }} className='text-left my-auto'>
                <p className='text-2xl font-semibold text-gray-400 font-mono'>Blog- {id}</p>

                <p className=' font-sans text-4xl font-semibold text-[#23A6F0] mb-8'>{title}</p>

                <p className=''>{blog}</p>
            </div>

        </div>
    );
};

export default Blog;
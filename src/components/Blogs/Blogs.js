import { faBlog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { BlogsContext } from '../../App';
import Blog from '../Blog/Blog'


const Blogs = () => {
    const [blogs] = useContext(BlogsContext)

    return (
        <div className=' bg-[#FAFAFA] pb-20'>
            <p className='text-4xl py-16'>Blogs<FontAwesomeIcon className='ml-4' icon={faBlog} /></p>
            <section>
                {
                    blogs.map(blog => <Blog key={blog.id} blog={blog} />)
                }

            </section>
        </div>
    );
};

export default Blogs;
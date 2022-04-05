import React, { useContext } from 'react';
import { BlogsContext } from '../../App';
import SingleBlog from '../SingleBlog/SingleBlog';


const BlogsSection = () => {
    const [blogs, setBlogs] = useContext(BlogsContext)

    return (
        <div>
            <section className='bg-[#FAFAFA]'>
                <p className=' font-bold text-[40px] pb-[110px] font-mono'>Latest Blogs</p>
                <div className='grid grid-cols-3 justify-around'>
                    {
                        blogs.map(blog => <SingleBlog key={blog.id} blog={blog} />)
                    }
                </div>
            </section>

        </div>
    );
};

export default BlogsSection;
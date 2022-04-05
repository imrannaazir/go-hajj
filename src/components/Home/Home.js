import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import ReviewSection from '../../components/ReviewSection/ReviewSection'
import BlogsSection from '../BlogsSection/BlogsSection';
import NewsLetter from '../NewsLetter/NewsLetter';

const Home = () => {
    return (
        <div>
            {/* banner of the site start */}

            <section className='grid grid-cols-1 md:grid-cols-2 p-6 h-screen'>

                {/* Banner Text */}
                <div className='my-auto order-2'>

                    <div className='text-left'>
                        <p className='text-6xl font-[800]'>Hajj and Umrah!!</p>
                        <p className='text-5xl text-[#23A6F0]'>The Journey of the Heart.</p>
                        <br />
                        <p className='text-[#737373]'>GoHajj is warmly welcoming Muslims of Bangladesh and offers the best <br /> hajj and umrah packages for them and their families from the capital Dhaka and all over Bangladesh.</p>
                        <br />
                        <button className='px-6 py-2 bg-[#23A6F0] hover:bg-white rounded-[50px] text-white hover:text-[#23A6F0] hover:border-[#23A6F0] hover:border-2 font-bold text-[14px]' >Book Now <FontAwesomeIcon icon={faArrowRight} /></button>
                    </div>
                </div>

                <div className='order-1 '>
                    <div className="clock-tower static -z-10">
                        <img src="https://i.pinimg.com/474x/2c/09/6f/2c096f5d9b3b3f9c8cc44e9ab6e8d1cb.jpg" alt="" />
                    </div>
                    <div className="plane absolute top-[200px] right-[0px] md:right-[900px] w-[150px] md:w-[300px] -z-0 animate-[ping_2s_ease_infinite]">
                        <img src="https://www.nicepng.com/png/full/274-2740701_free-airplane-transparent-background-plane-png.png" alt="" />

                    </div>

                </div>
            </section>
            {/* banner of the site end */}
            <ReviewSection />
            <BlogsSection />
            <NewsLetter />
        </div>

    );
};

export default Home;
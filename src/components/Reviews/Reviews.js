import { faStar, faStarHalfAlt, faStairs } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ReviewsContext } from '../../App';
import Review from '../Review/Review';


const Reviews = () => {
    const [reviews] = useContext(ReviewsContext)

    return (
        <div className='bg-[#FAFAFA]'>
            <section className='bg-[#FAFAFA] py-6 '>
                <p className=' text-[30px] pt-[20px]  pb-[20px] font-mono font-semibold'>Reviews</p>
                <p className=' text-9xl font-bold'>4.7</p>
                <p className='text-2xl text-[#F3CD03] my-4'>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                </p>
                <p className='text-2xl text-gray-400'>based on 9 reviews.</p>
            </section>

            {/* reviews static */}
            <section className='mx-auto bg-white w-[600px] shadow-2xl hover:shadow-2xl hover:shadow-[#23a5f0a0] mb-5 rounded-2xl ' >
                <div className='flex items-center justify-center ' >
                    <p className='w-[100px]'>Excellent:</p>
                    <p className='text-2xl text-[#F3CD03] my-4 w-[150px]'>
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </p>
                    <p className='mr-2'>4</p>
                    <p className='w-4 h-6 bg-gray-300'></p>

                </div>
                <div className='justify-center flex items-center'>
                    <p className='w-[100px]'>Good:</p>
                    <p className='text-2xl text-[#F3CD03] my-4 w-[150px]'>
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon className=' text-gray-400' icon={faStar} />
                    </p><p className='mr-2'>5</p>
                    <p className='w-5 h-6 bg-gray-300'></p>

                </div>
                <div className='justify-center flex items-center'>
                    <p className='w-[100px]'>Average:</p>
                    <p className='text-2xl text-[#F3CD03] my-4 w-[150px]'>
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon className=' text-gray-400' icon={faStar} />
                        <FontAwesomeIcon className=' text-gray-400' icon={faStar} />
                    </p><p className='mr-2'>0</p>
                    <p className='w-1 h-6 bg-gray-300'></p>
                </div>
                <div className='justify-center flex items-center'>
                    <p className='w-[100px]'>Below Average:</p>
                    <p className='text-2xl text-[#F3CD03] my-4 w-[150px]'>
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon className=' text-gray-400' icon={faStar} />
                        <FontAwesomeIcon className=' text-gray-400' icon={faStar} />
                        <FontAwesomeIcon className=' text-gray-400' icon={faStar} />
                    </p><p className='mr-2'>0</p>
                    <p className='w-1 h-6 bg-gray-300'></p>
                </div>
                <div className='justify-center flex items-center'>
                    <p className='w-[100px]'>Poor:</p>
                    <p className='text-2xl text-[#F3CD03] my-4 w-[150px]'>
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon className=' text-gray-400' icon={faStar} />
                        <FontAwesomeIcon className=' text-gray-400' icon={faStar} />
                        <FontAwesomeIcon className=' text-gray-400' icon={faStar} />
                        <FontAwesomeIcon className=' text-gray-400' icon={faStar} />
                    </p><p className='mr-2'>0</p>
                    <p className='w-1 h-6 bg-gray-300'></p>
                </div>

            </section >

            <hr className='mb-8' />
            <section className='w-[75%] mx-auto'>
                <p className='text-[30px] pt-[20px]  pb-[20px] '>All Stars(9)</p>
                {
                    reviews.map(review => <Review key={review.id} review={review} />)
                }
            </section>
            <Link to='/login'> <p className='w-[75%] mx-auto bg-white py-4 text-xl border-2 text-[#23A6F0] font-semibold cursor-pointer rounded-lg'>Write a Review</p></Link>
            <br /><br />

        </div >
    );
};

export default Reviews;
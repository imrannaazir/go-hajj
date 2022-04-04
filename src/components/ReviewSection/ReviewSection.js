import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { ReviewsContext } from '../../App';
import ClientReview from '../ClientReview/ClientReview';
import { Link } from 'react-router-dom';


const ReviewSection = () => {
    const [reviews] = useContext(ReviewsContext)
    const threeReviews = reviews.slice(0, 3)
    console.log(threeReviews);

    return (
        <div>
            <section className='bg-[#FAFAFA] font-bold text-[40px] pt-[120px]  pb-[110px]'>
                <div>
                    <p className=' font-mono'>What Clients Say</p>
                    <p className=' font-medium text-sm text-[#737373]'>We always take care of our clients and they are very happy.</p>
                    <p className=' font-medium text-sm mb-[80px] text-[#737373]'>We have collected a few stories for you.</p>
                </div>

                <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 xl:mx-[100px] lg:mx-[10px] '>
                    {
                        threeReviews.map(review => <ClientReview key={review.id} review={review} />)
                    }
                </div>
                <Link to='/reviews'>
                    <button className='px-6 py-2 bg-white hover:bg-[#23A6F0] rounded-[50px] text-[#23A6F0] hover:text-white border-[#23A6F0] border-2 font-bold text-[14px] mt-12'>See All <FontAwesomeIcon icon={faArrowRight} /></button>
                </Link>
            </section>
        </div>
    );
};

export default ReviewSection;
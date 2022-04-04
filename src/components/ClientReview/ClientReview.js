import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfAlt, faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

const ClientReview = ({ review: { review, img, username, ratting } }) => {
    const dot = '...'

    return (
        <div>
            <div className='review-card bg-white w-[330px] h-[245px] shadow-lg hover:shadow-[#23A6F0] hover:shadow-2xl p-[30px] rounded-lg'>
                <div className='star flex text-[#F3CD03] text-[18px] items-center'>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={ratting === "5.0" ? faStar : faStarHalfAlt} />
                    <p className='ml-2 text-[#73737384] font-normal'>{ratting}</p>
                </div>
                <div>
                    <p className='text-left text-[#23A6F0] text-4xl'> <FontAwesomeIcon icon={faQuoteLeft} /></p>
                    <p title={review} className='text-sm font-normal text-left mb-[20px] text-[#737373]'>{review.length > 75 ? review.slice(0, 75) + dot : review}</p>
                </div>
                <div className='user flex gap-4'>
                    <img className='w-[50px] h-[50px] rounded-full' src={img} alt="" />
                    <div className='user-info'>
                        <p className='text-left text-sm text-[#23A6F0]'>{username}</p>
                        <p className='text-left text-sm'>Traveler</p>


                    </div>

                </div>
            </div>


        </div>
    );
};

export default ClientReview;
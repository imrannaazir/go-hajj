import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Review = ({ review: { img, username, ratting, review } }) => {
    console.log(review);
    return (
        <div>
            <div className='flex items-center'>
                <img className='w-[100px] h-[100px] rounded-full' src={img} alt="" />
                <div>
                    <p>{username}</p>
                    <p>
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={ratting === "5.0" ? faStar : faStarHalfAlt} />
                        <span>{ratting}</span>
                    </p>
                </div>
            </div>
            <p className=' text-left'>{review}</p>

        </div>
    );
};

export default Review;
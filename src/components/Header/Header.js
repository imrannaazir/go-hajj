import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlaneArrival, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import CustomLink from '../CustomLink/CustomLink';


const Header = () => {
    return (
        <div className='flex justify-around bg-[#FAFAFA] items-center p-[33px] sticky top-0 z-20 shadow-lg'>
            <div className='text-[24px] font-bold hidden lg:block'>
                <Link to={'/'}>
                    <p>GoHajj <FontAwesomeIcon className='text-[#23A6F0]' icon={faPlaneArrival} /></p>
                </Link>
            </div>
            <nav className='gap-[21px] flex text-[14px] font-semibold text-[#737373]'>
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='/reviews'>Reviews</CustomLink>
                <CustomLink to='/dashboard'>Dashboard</CustomLink>
                <CustomLink to='/blogs'>Blogs</CustomLink>
                <CustomLink to='/about'>About</CustomLink>
            </nav>

            <div className='text-[14px] font-semibold text-[#23A6F0] hidden lg:block'>
                <Link to='login'>Login <FontAwesomeIcon icon={faRightFromBracket} /></Link>

            </div>

        </div>
    );
};

export default Header;
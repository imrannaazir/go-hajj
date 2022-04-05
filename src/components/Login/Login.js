import React from 'react';

const Login = () => {
    return (
        <section className='bg-[#FAFAFA] h-screen '>
            <p className='text-4xl py-6'>LOGIN</p>
            <div className=' bg-white text-left w-[90%] lg:w-[30%] mx-auto px-20 py-20 mt-20 rounded-md shadow-md'>
                <p>Email</p>
                <input className='bg-[#FAFAFA] border-2 border-[#23A6F0] rounded-full w-80 h-10' type="email" name="" id="" />
                <p>Password</p>
                <input className='bg-[#FAFAFA] border-2 border-[#23A6F0] rounded-full  w-80 h-10' type="password" name="" id="" /> <br />
                <button className='px-6 py-2 bg-[#23A6F0] hover:bg-white rounded-[50px] text-white hover:text-[#23A6F0] hover:border-[#000000] hover:border-2 font-bold text-[14px] w-80 h-10 mt-4' >Login</button>
                <p className=' text-right cursor-pointer text-gray-400 hover:text-[#23A6F0]'>Forgot Password?</p>
                <p className='text-center mx-6'>OR</p>
                <p className='text-center mt-4'>Need an account? <span className=' underline cursor-pointer hover:text-[#23A6F0]'>Sign Up</span></p>

            </div>

        </section>

    );
};

export default Login;
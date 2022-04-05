import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Bar, BarChart, CartesianGrid, Funnel, FunnelChart, LabelList, Legend, Line, LineChart, RadialBar, RadialBarChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))
        console.log(data);
    }, [])

    return (
        <div className='bg-[#FAFAFA]'>
            <p className='text-4xl py-6'>Invest to GoHajj.</p>
            <p className='mb-20 text-gray-400'>Do not Invest to us blindly.Analyze our data first.</p>

            <div className='chart grid grid-cols-2 gap-10 mx-20'>


                <div className=' bg-white mb-5 shadow-lg rounded-md p-12'>
                    <p className='mb-6 text-lg'>Invest per Month:</p>
                    <LineChart width={400} height={400} data={data}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis dataKey='investment' />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey={'month'} stroke="#8884d8" />
                        <Line type="monotone" dataKey={'investment'} stroke="#82ca9d" />
                    </LineChart>
                </div>

                <div className=' bg-white mb-5 rounded-md shadow-lg p-12'>
                    <p className='mb-6 text-lg'>Comparison between investment, sell &revenue.</p>
                    <BarChart width={400} height={400} data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />

                        <Bar dataKey="investment" fill="#82ca9d" />
                        <Bar dataKey="sell" fill="#23A6F0" />
                        <Bar dataKey="revenue" fill="#000000" />
                    </BarChart>
                </div>
            </div>
            <Link to='/login'>
                <p className='w-[50%] mx-auto bg-[#23A6F0] py-3 items-center rounded-full text-lg text-white font-semibold cursor-pointer hover:text-[#23A6F0] hover:bg-white hover:border-2 border-[#23A6F0]'>Invest Now</p>
            </Link>
            <br /><br />
        </div>
    );
};

export default Dashboard;
import { Icon } from '@iconify/react';
import React from 'react';
import banner from '../../Assets/images/r29.jpg'
import Footer from '../Common/Footer';
import Courses from './Courses';
import Review from './Review';

const Home = () => {
    return (
        <div>
            <img className='h-3/6 w-full' src={banner} alt=""/>
            <div className='w-8/12 grid grid-cols-3 justify-center mx-auto bg-red-200 rounded-xl px-10 py-5'>
                <div className='flex flex-col items-center'>
                <Icon icon="ic:baseline-access-alarms" />
                <p>lorem ipsum doller sit ammet</p>
                </div>
                <div className='flex flex-col items-center'>
                <Icon icon="ic:baseline-access-alarms" />
                <p>lorem ipsum doller sit ammet</p>
                </div>
                <div className='flex flex-col items-center'>
                <Icon icon="ic:baseline-access-alarms" />
                <p>lorem ipsum doller sit ammet</p>
                </div>
            </div>
            <Courses/>
            <Review/>
            <Footer/>
        </div>
    );
};

export default Home;
import React from 'react';
import LittleLemon2 from "../assets/LittleLemon2.png";
import LittleLemon from "../assets/LittleLemon.png";
import useApp from '../context/useApp';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { features } = useApp();

  return (
    <footer className='min-h-full  '>
        <div className=' footer-container relative  bg-[#fe829ba4]'>
      <div className='w-full flex justify-between'>
        <div className='lg:w-[35rem] md:w-[20rem] sm:w-[10rem] h-[10 rem]  flex-col justify-center items-center'>
          <div><img className='w-[15rem]' src={LittleLemon2} /></div>
          <div className='flex-col ml-[3.4rem] md:ml-[2rem] sm:ml-[1rem] '>
            <div><h1>+07793544824</h1></div>
            <p>Info@LittleLemon.com</p>
            <p>1725 Byers Lane, Davis, California 95616</p>
          </div>
        </div>
        <div className='flex-col mt-[2rem] ml-[8rem] w-[22rem] h-[11rem] md:mr-[6rem] sm:mrl-[4rem]'>
          <h1>Navigation</h1>
          <ul className='flex-col items-center justify-center mt-[0.6rem] '>
            {features.map((item) => (
              <Link to={item.to}><li className='text-black font-normal font-sans text-base mt-[0.9rem] underline	' key={item.id}>{item.title}</li></Link>
            ))}
          </ul>
        </div>
        <div className='flex-col w-[25rem]  lg:ml-[20rem] mt-[5rem]'>
          <h1 className='text-[1.3rem]'>Tuesday-Thursday: 12am-9pm</h1>
          <h1 className='mt-[1rem] text-[1.3rem]'>Friday-Sunday: 12am-11pm</h1>
          <h1 className='mt-[1rem] text-[1.3rem]'>Monday-Closed</h1>
        </div>
        <div className='absolute bottom-[7rem] left-0 w-full h-[1px] bg-primary-400 bg-black'></div>
        
      </div>
      <div className='flex justify-between w-full h-full'>
          <div><img className='w-[13rem] mt-[3rem]' src={LittleLemon} /></div>
          <p className='mt-[8rem] mr-[2rem]'>© 2023 Little Lemon</p>
        </div>
    </div>
    </footer>
    
  );
};

export default Footer;

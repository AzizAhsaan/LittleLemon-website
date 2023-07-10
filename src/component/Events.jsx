import React, { useState } from 'react';
import Slider from 'react-slick';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';
import karaoke from '../assets/karaoke.jpeg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Sports from "../assets/Sports.jpg"
import tastings from "../assets/tastings.jpg"
import charity from "../assets/charity.jpg"
import Holiday from "../assets/Holiday.jpg"
import clock from "../assets/clock.png"

const Events = () => {
  const Ddata = [
    {
      id: 1,
      title: 'Karaoke nights',
      text: 'Experience the ultimate entertainment and fun at our restaurant\'s Karaoke nights. Sing your heart out and unleash your inner star as you take the stage and perform your favorite songs. Enjoy a lively atmosphere, great company, and memorable musical moments. Join us for an unforgettable evening of Karaoke excitement.',
      button: 'Book a Table',
      img: karaoke,
      icon:clock,
      time:"20:00PM"
    },
    {
      id: 2,
      title: 'Sporting events',
      text: 'Experience the electric atmosphere of our restaurant sporting events as you cheer on your favorite teams, indulge in delicious food and drinks, and share unforgettable moments with fellow sports enthusiasts',
      button: 'Book a Table',
      img: Sports,
      icon:clock,
      time:"22:00PM"

    },
    {
      id: 3,
      title: 'Food tastings',
      text: 'Embark on a culinary adventure at our restaurants food tastings, where youll savor delectable dishes meticulously crafted by our talented chefs, discover new flavors, and indulge in a gastronomic experience like no other.',
      button: 'Book a Table',
      img: tastings,
      icon:clock,
      time:"21:00PM"
    },
    {
      id: 4,
      title: 'Charity events',
      text: 'Join us in making a difference at our restaurants charity events, where we combine the joy of dining with the spirit of giving, supporting worthy causes, and creating a positive impact in our community.',
      button: 'Book a Table',
      img: charity,
      icon:clock,
      time:"18:00PM"
    },
    {
      id: 5,
      title: 'Celebrate the holidays',
      text: 'Celebrate the joyous holiday season at our restaurant, where we create a festive ambiance, serve delectable seasonal delights, and host special events that bring friends and family together in warm and memorable moments.',
      button: 'Book a Table',
      img: Holiday,
      icon:clock,
      time:"AnyTime!"
    },
  ];

  const SlideLeft = ({ onClick }) => {
    return (
      <div className="text-[2.8rem] text-white absolute cursor-pointer z-10 left-[0.4%] top-2/4 " onClick={onClick}>
        <BsArrowLeft />
      </div>
    );
  };

  const SlideRight = ({ onClick }) => {
    return (
      <div className="text-[2.8rem] text-white  absolute cursor-pointer z-10 right-[0.4%] top-2/4" onClick={onClick}>
        <BsArrowRight />
      </div>
    );
  };

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSliderChange = (current) => {
    setCurrentSlide(current);
  };

  const settings = {
    dots: true,
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 1,
    centerPadding: 0,
    autoplaySpeed: 500,
    nextArrow: <SlideRight />,
    prevArrow: <SlideLeft />,
    beforeChange: handleSliderChange
  };

  return (
    <div className='min-h-screen'>
      <h1 className='text-center lg:text-[2rem] text-white mb-[1rem] md:mb-[5rem] sm:mb-[5rem] mt-[3rem] text-[2rem]'>Events Happening Right now</h1>
      <Slider {...settings} initialSlide={currentSlide}>
        {Ddata.map((Data) => (
          <div key={Data.id}>
            <div className='grid lg:grid-cols-2 grid-rows-1 justify-center content-center rounded-lg border-4 border-[#E8A7B4] overflow-hidden mb-[3rem]'>
              <div className='w-[41rem] h-[30rem] flex justify-center content-center'>
                <img className='w-[35rem] h-[28rem] mt-[3rem] rounded-[3rem]' src={Data.img} alt={Data.title} />
              </div>
              <div className='mt-[5rem] ml-[4rem] w-[35rem] h-[30rem] flex-col justify-center content-center'>
                <h1 className='text-white text-[3rem]'>{Data.title}</h1>
                <h1 className='text-white mt-[1rem]'>{Data.text}</h1>
                <div className='flex justify-between'>
                <button className='mt-[3rem] bg-[#FFD500] items-center w-32 h-10 rounded-tl-lg rounded-br-lg'>{Data.button}</button>
                <div className='flex mr-[10rem] mt-[2.8rem]'>
                  <img className='w-[3rem] h-[3rem] text-whit '  src={Data.icon}/>
                  <h1 className='ml-[1rem] text-[1.7rem] text-white'> {Data.time}</h1>
                </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Events;

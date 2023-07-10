import React from 'react';
import SkillsCards from './Skillscards';
import MarqueeCards from './MarqueeCards';

const Card = () => {
  return (
    <>
      <div className='w-full h-[70rem]'>
        <div className='flex justify-between w-full h-[28rem]'>
          <div className="mt-[0rem] w-full  flex justify-center">
            <div className="w-full min-h-[800px] flex flex-col xl:w-[70%]">
              <div className="xl:border-l-2 xl:border-r-2 xl:border-primary-400 h-[50rem] relative">
                <MarqueeCards>
                  <SkillsCards />
                </MarqueeCards>
                <div className="absolute top-12 w-full h-[1px] bg-primary-400 bg-black"></div>
              </div>
              <div className="xl:border-l-2 xl:border-r-2 xl:border-primary-400 h-[50rem] relative">
                <MarqueeCards>
                  <SkillsCards />
                </MarqueeCards>
                <div className="absolute top-12 w-full h-[1px] bg-primary-400 bg-black"></div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;

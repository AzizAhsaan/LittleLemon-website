import React from 'react'
import Header from './header'
import plate from "../assets/plate.png"
import profilephoto from "../assets/profilephoto.jpg"
import {BsTelephone} from 'react-icons/bs'
import Card from './Card'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'
import { BiLogoFacebookCircle,BiLogoInstagram,BiLogoTwitter } from 'react-icons/bi';
const Home = () => {
    const navigate =useNavigate()
  const cartpage=()=>{
    navigate("/Menu")
  }
  const Bookpage=()=>{
    navigate("/Reservation")
  }
  const Facebookpage=()=>{
    navigate("/Reservation")
  }
  return (
    <>
    <div className='min-h-screen  '>
    <div className='flex justify-center mt-24      '>
        <div className='flex justify-between'>
        <div className='flex flex-col justify-center'>
            <h1 className='text-white text-5xl'>Provide the best <br/> food for you.</h1>
            <p className='text-white text-1xl mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/> Etiam ultricies lacinia </p>
            <div className='flex mt-8'>
                <button onClick={cartpage} className='bg-white items-center w-32 h-10 rounded-tl-lg rounded-br-lg'>Menu</button>
                <button onClick={Bookpage} className='ml-8 bg-[#FFD500] items-center w-32 h-10 rounded-tl-lg rounded-br-lg'>Book a Table</button>
            </div>
            <div className='flex mt-12 ml-8'>
                <div  className='bg-white  rounded-full content-center '><div className=' flex justify-center content-center m-3 w-[2rem] h-[2rem] cursor-pointer '><BiLogoFacebookCircle className='w-[2rem] h-[2rem]' /></div></div>
                <div className='ml-4 bg-white  rounded-full'><div className='flex justify-center content-center m-3 w-[2rem] h-[2rem] cursor-pointer'><BiLogoInstagram className='w-[2rem] h-[2rem]' /></div></div>
                <div className='ml-4 bg-white  rounded-full'><div className='flex justify-center content-center m-3 w-[2rem] h-[2rem] cursor-pointer'><BiLogoTwitter className='w-[2rem] h-[2rem]' /></div></div>

            </div>
        </div>
       
        <div className='lg:w-6/12 h-96 lg:ml-[20rem]  relative     '>

            <div>
                <img src={plate} className='lg:h-[25rem] lg:w-[25rem] animate-spin md:h-[23rem] md:w-[23rem] md:mr-[10rem]' style={{ animationDuration: '3.2s' }}></img> 
            
            <div className="absolute text-3xl  bottom-4 left-1  -translate-x-1/2">

            <div className='lg:w-[17rem] h-[4rem] rounded-[2rem] bg-[#FFD500] opacity-80'>
            <div className='flex justify-between '>
                <div className='ml-2 mt-3'>
                    <img className='rounded-full w-11 h-11' src={profilephoto} />
                    </div>
                <div className='flex-col lg:mr-9 mt-3 '>
                    <h1 className='text-sm font-bold'>Brooklyn Simmons</h1>
                    <p className='text-sm'>Food Courier</p>
                    </div>
                    <div className='rounded-full w-11 h-11 mr-4  mt-4 bg-[#536D95]'>
                        <div className='content-center m-[0.4rem]'><BsTelephone /></div>
                    </div>
                </div>
                </div>
                
                
                
                
                
                </div>
        <div className="absolute text-2xl  top-10 ">
            
        <div className='lg:w-[17rem] h-[4rem] rounded-[2rem] bg-[#FFD500] opacity-80'>
            <div className='flex justify-between '>
                <div className='ml-2 mt-3'>
                    <img className='rounded-full w-11 h-11' src={profilephoto} />
                    </div>
                <div className='flex-col mr-1 mt-3 '>
                    <h1 className='text-sm font-bold'>Brooklyn Simmons</h1>
                    <p className='text-sm'>Food Courier</p>
                    </div>
                    <div className='rounded-full w-9 h-9 mr-4  mt-4 bg-[#536D95]'>
                        <div className='content-center m-1.5'><BsTelephone /></div>
                    </div>
                </div>
                </div>


        
        <div className="absolute top-[12rem] left-[14rem]">
        <div className='lg:w-[17rem] md:w-[15rem] h-[4rem] rounded-[2rem] bg-[#FFD500] opacity-80'>
            <div className='flex justify-between '>
                <div className='ml-2 mt-3'>
                    <img className='rounded-full w-11 h-11' src={profilephoto} />
                    </div>
                <div className='flex-col mr-1 mt-3 '>
                    <h1 className='text-sm font-bold'>Brooklyn Simmons</h1>
                    <p className='text-sm'>Food Courier</p>
                    </div>
                    <div className='rounded-full w-9 h-9 mr-4  mt-4 bg-[#536D95]'>
                        <div className='content-center m-1.5'><BsTelephone /></div>
                    </div>
                </div>
                </div>
        </div>
        </div>
                </div>
        </div>
        </div>
        
    </div>
    <div className='flex-col items-center justify-center mt-[8rem]'>
        <div className=' text-center'><h1 className=' text-white text-[3rem]'>Explore Our Foods</h1></div>
        <div className='text-center'><p className=' text-white text-[1.2rem] mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies lacinia
 eros, <br/> in suscipit nulla malesuada quis. Integer rutrum varius velit. Cras eget 
</p>
</div>



      <div className='mt-[3rem]'>
        <Card />
      </div>
    </div >
    </div>
    
    </>
  )
}

export default Home

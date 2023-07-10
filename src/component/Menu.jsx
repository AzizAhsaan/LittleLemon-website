import { useState,useContext,useEffect } from "react";
import React from 'react';
import plate from "../assets/plate.png";
import { dishes } from '../constants/constants';
import { BsArrowRight,BsArrowLeft } from 'react-icons/bs';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import InputBar from "./InputBar";
import { Burger,Ramen,Chicken,Salad,Pizza } from "../constants/constants";
import { AppContext } from "../context";
import Cart from "./Cart";
import {FiPlus,FiMinus} from "react-icons/fi"



const Menu = () => {
  
  const{currency,conversionRate,newproduct,setnewproduct,itemsquantity,setItemsquantity}=useContext(AppContext )

  const [imageIndex,setImageIndex]=useState(0)
  const [choosemenu, setChooseMenu] = useState(Burger);
  const [filteredItems,setFilteredItems]=useState(choosemenu)
  const handleFilteredItems=(items)=>{
    setFilteredItems(items)
  }

  const SlideLeft = ({ onClick }) => {
    return (
      <div className="  text-[1.8rem] absolute cursor-pointer z-10 left-[0%] top-2/4" onClick={onClick}>
        <BsArrowLeft />
      </div>
    );
  };
  const SlideRight = ({ onClick }) => {
    return (
      <div className=" text-[1.8rem]  absolute cursor-pointer z-10 right-[0%] top-2/4" onClick={onClick}>
        <BsArrowRight />
      </div>
    );
  };
  const handleMenuChange = (index) => {
    setImageIndex(index)
    switch(index){
      case 0:
        setChooseMenu(Burger);
        break;
      case 1:
        setChooseMenu(Salad);
        break;
      case 2:
        setChooseMenu(Chicken);
        break;
      case 3:
        setChooseMenu(Pizza);
        break;
      case 4:
        setChooseMenu(Ramen);
        break;
    }
    
  };
  useEffect(() => {
    setChooseMenu((Products) =>
      Products.map((product) => ({
        ...product,
        Currency: currency,
      }))
    );
  }, [currency]);

  
  const handleChange = (productid, quantity) => {
    const updatedprodut = choosemenu.map((product) => {
      if (product.id === productid) {
        return { ...product, quantity };
      }     
        return product;
      });
      setChooseMenu(updatedprodut);
    };

  const addtocart = (product) => {
    setnewproduct((newproduct) => [...newproduct,product]);
    handleChange(product.id,0)
    setItemsquantity(itemsquantity+1)
  };





 
  return (
    <div className='min-h-full '>

      <div className='h-full flex-col justify-center  '>
        <div className='h-full'>
                <div className=" justify-center flex relative h-[7rem] lg:w-10/12 md:w-8/12 sm:w-6/12 mt-[1rem] bg-white m-auto mb-[2rem] rounded-[2rem] ">
              {dishes.map((dish,idx) => (
                <div key={idx} onClick={(e)=>handleMenuChange(idx)}  className={idx===imageIndex?"bg-[rgb(232,167,180)] cursor-pointer  rounded-[4rem] border border-black ":'bg-white cursor-pointer rounded-[5rem]  border-black'}>
                 <div className="flex flex-col justify-center content-center md:mr-[3rem] mt-[0.5rem] lg:w-[10rem] md:w-[6rem] sm:w-[8rem] h-[6rem] rounded-[5rem]">
                   <div className="  ml-[1rem] rounded-[2rem]"><img className='w-[3.4rem] sm:ml-[4.0rem]' src={dish.photo} />
                   <button className="flex justify-center content-center mt-[1rem] ml-[3.69rem] sm:ml-[3.6rem] text-bold text-[1.5rem]" >{dish.title}</button></div>
                 </div>
                </div>
              ))}
          </div>
          <div className="h-3/5 flex-col justify-center w-full  ">
            <div className=" h-full relative lg:w-10/12 md:w-12/12  bg-white m-auto mb-[30rem] rounded-[2rem]  ">
              <div className="flex justify-center">
                <div className="h-[5rem]  w-[20rem]  absolute mt-[3rem] left-[2%]   ">
                    <InputBar choosemenu={choosemenu} onFilteredItemsChange={handleFilteredItems} />
                </div>
                <div><h1 className="text-black text-center m-auto mt-[3rem] text-[2rem] ">The Dishes we provide</h1></div>
              </div>
              <div className="flex justify-center content-start lg:gap-[4rem] ">
                <div className="grid gap-4 lg:grid-cols-3 lg:grid-rows-3 md:grid-cols-2 justify-center items-center">
              {filteredItems.map((dish)=>(
                <div key={dish.id} className="  w-11/12  m-auto mt-[2rem] ">
                <div className=' relative w-[300px] h-[400px] bg-white rounded-[3rem] '>
                <div className='flex justify-between w-full h-[28rem]'>
            <div className="mt-[2.9rem] max-w-[20rem]  bg-[#92b4e7c1] flex justify-center content-center max-h-[20rem]	 rounded-[4rem]">
            <img className='  absolute bottom-[19rem]  w-[7rem] h-[7rem]' src={dish.photo} />
            <div className='flex-col justify-center content-center  items-center'>
              <h1 className=' text-black mt-[3rem]    text-center font-sans text-[2rem]' >{dish.title}</h1>
              <p className=' text-black text-center mt-[rem] text-[0.9rem]' >{dish.text}</p>
              <div className="bg-[#fc4267] w-[4rem] h-[4rem] rounded-full flex justify-center content-center absolute bottom-[19rem] "><h1 className=' text-white absolute content-center mt-[.9rem]  text-[1.36rem] text-center'>{dish.price}$</h1></div>
              <div className="grid grid-cols-3 grid-rows-1">
              <div onClick={()=>handleChange(dish.id,dish.quantity-1)} className="w-[1.5rem] h-[1.5rem] bg-white rounded-[2rem] flex justify-center content-center ml-[3rem] mt-[1.3rem] cursor-pointer"><FiMinus className="mt-[0.2rem]" /></div>
              <input
  type="number"
  className="mt-[1rem] w-[6rem] h-[2.2rem] rounded-[1rem] text-center content-center "
  value={dish.quantity}
  onChange={(e) => handleChange(dish.id, e.target.value)}
/>
                            <div onClick={()=>handleChange(dish.id,dish.quantity+1)} className="w-[1.5rem] h-[1.5rem] bg-white rounded-[2rem] flex justify-center content-center ml-[1rem] mt-[1.3rem] cursor-pointer"><FiPlus className="mt-[0.2rem]" /></div>

              </div>
             
            <button className="mt-[1.5rem] ml-[6.0rem] w-[7rem] rounded-[3rem] h-[3rem] bg-[#fc4267] text-white text-bold " onClick={() => addtocart(dish)}>Add to Cart</button>
              </div>
              </div>
              </div>
              </div>
                </div>
              ))}
              </div>
              </div>
              
              
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Menu;

import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import useApp from '../context/useApp';
import ThemeToggle from './ThemeToggle';
import LittleLemon from '../assets/LittleLemon.png';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Cart from './Cart';

const Header = ({ newproduct}) => {
  const { features,itemsquantity,setItemsquantity} = useApp();
  const navigate = useNavigate();
  const cartpage = () => {
    navigate('/Cart');
  };
  const BookATablepage = () => {
    navigate('/Reservation');
  };

  return (
    <header className="flex items-center justify-between h-20 ">
      <img src={LittleLemon} className="w-72 md:w-40" />
      <ul className="flex items-center justify-center space-x-6 flex-grow">
        {features.map((item) => (
          <Link to={item.to} key={item.id}>
            <li className="text-white font-normal font-sans text-base">{item.title}</li>
          </Link>
        ))}
      </ul>
      <div className="flex items-center justify-end mr-[1rem] space-x-6">
        <button onClick={BookATablepage} className="bg-[#FFD500] items-center w-32 h-10 rounded-tl-lg rounded-br-lg">
          Book A table
        </button>
        <div className='flex justify-center w-[5rem] h-[5rem] '>
            <div className='bg-[#e88095] w-[1.95rem] h-[1.95rem] rounded-full absolute mr-[2rem] mt-[0.5rem]'>
                <h1 className='ml-[0.50rem] bottom-[0rem] absolute  text-[1.35rem] text-bold text-white' >{itemsquantity}</h1>
            </div>
        <button onClick={cartpage}>
          <AiOutlineShoppingCart className="text-white  text-[2.5rem]" />
        </button>
        </div>
       
      </div>
    </header>
  );
};

export default Header;

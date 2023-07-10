import React,{useContext,useDispatch } from 'react'
import { AppContext } from '../context';
import CurrencySelector from './CurrencySelector';
export default function Cart() {
  const {newproduct,setnewproduct,itemsquantity,setItemsquantity,currency,conversionRate } = useContext(AppContext);
  const totalprice=newproduct.reduce((total,item)=>total+item.price*item.quantity,0)
    const convertedTotalPrice=currency==='EUR'?(totalprice*conversionRate).toFixed(2):totalprice
  const handleRemoveItem = (productid) => {
    const itemIndex = newproduct.findIndex((item) => item.id === productid);
    if (itemIndex !== -1) {
      const updatedProducts = [...newproduct];
      updatedProducts.splice(itemIndex, 1);
      setnewproduct(updatedProducts);
      setItemsquantity(itemsquantity - 1);
    }
  };
return (
        <>
        <div className='min-h-screen'>
          
            <div className='flex justify-center content-center w-11/12 h-11/12 ml-[4rem] mt-[1rem]   '>
                <div className=' flex flex-col justify-center'>
                  <div className='w-[5rem] h-[5rem]'><CurrencySelector /></div>
                    <h1 className='text-white text-[2rem] text-center '>Your Orders!</h1>
                    <div className="absolute  h-[1px] bg-primary-400 bg-[#E8A7B4]"></div>
                        <div className='grid grid-cols-6 grid-rows-1 gap-[3rem]'>
                        <p className='text-white text-[1.5rem] ml-[4.4rem]'>ID</p>
                        <p className='text-white text-[1.5rem] ml-[3rem]'>Picture</p>
                        <p className='text-white text-[1.5rem] ml-[4rem]'>Name</p>
                        <p className='text-white text-[1.5rem] ml-[3.3rem]'>Quantity</p>
                        <p className='text-white text-[1.2rem] ml-[5rem]'>Price</p>
                        </div>  
                    {newproduct.map((item,ind)=>(
                      <div className='flex flex-col w-full mt-[1rem] min-h-[10rem]'>
                        
                          <div className=' border border-[#E8A7B4] grid grid-cols-6 grid-rows-1 gap-[3rem] rounded-[4rem] '>
                              <div  className='h-full  flex justify-center'><h1 className=' text-[2rem] mt-[3rem] text-white'>{ind+1}</h1></div>
                                  <div className='h-full   flex justify-center'><img className='w-[8rem] h-[7rem] mt-[1rem]' src={item.photo} /></div>
                                  <div className='h-full   flex-col justify-center '><h1 className=' text-[2rem] mt-[3rem] text-white'>{item.title}</h1></div>
                                  <div className='h-full  flex-col justify-center '><h1 className='text-[2rem] ml-[5.6rem] mt-[3rem] text-white'> {item.quantity}</h1></div>
                                  <div className='h-full   flex-col justify-center'><h1 className='text-[2.5rem] ml-[3.9rem] mt-[2.8rem] text-white' > {currency === 'EUR'
                  ? (item.price * conversionRate * item.quantity).toFixed(2)
                  : item.price * item.quantity}$</h1></div>
                                  <div className='h-[3rem]  mt-[3rem]  flex justify-center'><button onClick={() => handleRemoveItem(item.id)} className='rounded-[3rem] border border-white bg-[#E8A7B4] text-[1rem]'>Remove This Item</button></div>
                          </div>
                      </div>
                    ))}
                    <div className='flex justify-center mt-[1rem] '><div className='flex content-center justify-center text-white text-[2rem] w-[20rem] h-[6rem] mb-[4rem] mt-[2rem bg-[#E8A7B4] rounded-[4rem]'><h1 className='mt-[1.2rem]'>Your TotalPrice {convertedTotalPrice}$</h1></div></div>
                </div>
       </div>
        </div>
        </>

      );
};

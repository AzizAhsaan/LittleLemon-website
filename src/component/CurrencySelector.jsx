import React,{useContext} from 'react'
import AppContext from '../context/AppContext';

const CurrencySelector=()=>{
    const{currency,setCurrency}=useContext(AppContext )
    return(
    <div className='selector'>
        <select className='w-[10rem] h-[4rem]  rounded-[4rem] bg-[#E8A7B4] text-white text-[2rem]'  value={currency} onChange={(e)=>setCurrency(e.target.value)}>
             <option value="USD">USD</option>
             <option value="EUR">EUR</option>
             </select>
             </div>
    )
}
export default CurrencySelector;

import { m, LazyMotion, domAnimation } from "framer-motion";
import {menu} from "../constants/constants";
import { useNavigate } from "react-router-dom";
const SkillsCards = () => {
  const navigate =useNavigate()

  const cartpage=()=>{
    navigate("/Menu")
  }
  const Bookpage=()=>{
    navigate("/Reservation")
  }
  return (
    <div className="flex">
    <LazyMotion features={domAnimation} strict>

      {menu.map((Menu, index) => (
        <m.div
          initial={{ scale: 0.8 }}
          animate={{
            rotate: [0, 0,25],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
          style={{ zIndex: `${index + 1}`, transition: "all 0.6s" }}
          key={index}
          className="card w-[280px] h-[440px] flex flex-col items-center cursor-pointer">
         <div className=' relative w-[300px] h-[360px] bg-[#e6748bea] rounded-[3rem]'>
          <img className=' absolute bottom-[15rem] ml-[4.3rem] w-[11rem] h-[11rem]' src={Menu.photo} />
          <div className='flex-col justify-center items-center'>
            <h1 className=' absolute mt-[8rem] ml-[5.6rem] text-center font-sans text-[1.4rem] text-bold text-white' >{Menu.title}</h1>
            <p className=' absolute text-center mt-[13rem] ml-[2rem] text-[0.9rem] text-white' >{Menu.text}</p>
            <div className="flex justify-center  absolute bottom-[19rem] mr-[1.0rem] w-[5rem] rounded-[3rem] h-[5rem] content-center bg-black"><h1 className=' text-[1.8rem] mt-[1rem] ml-[0rem] text-white content-center'>{Menu.price}$</h1></div>
            <button  className="absolute mt-[17.5rem] ml-[5.3rem] w-[9rem] rounded-[3rem] h-[4rem] bg-[#000000] text-white text-[1.3rem] text-bold " onClick={cartpage}>Menu</button>
</div>
</div>  
        </m.div>
      ))}
    </LazyMotion>
    </div>
  );
};

export default SkillsCards;
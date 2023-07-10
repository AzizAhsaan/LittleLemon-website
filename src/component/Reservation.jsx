import React, { useState } from 'react';
import bar from "../assets/bar.png";
import Dropdown from "./Dropdown";
import waiter from "../assets/waiter.png";
import calendar from "../assets/calendar.png";
import table from "../assets/table.png";
import warning from "../assets/warning.png";
import { validateEmail } from "./utils";
const PhoneErrorMessage = ({ value, isTouched }) => {
  if (isTouched && (value.length < 11||value.length>11)) {
    return <div className='flex ml-[8rem]'>
      <img className='w-[5rem] h-[5rem] mr-[2rem] mb-[2rem] '  src={warning} />
      <p className="FieldError  text-[1.5rem] mb-[3rem] text-[#ff5757]">Phone Number should have  11 characters</p>
    </div>;
  }
  return null;
};
const Reservation = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, SetFormData] = useState(null);
  const [news, setNew] = useState([]);
  const [newsValues, setNewsValues] = useState([]);
  const [datevalue, SetDateValue] = useState("");
  const [selectedradio, setSelectedRadio] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [Phonenumber, setPhoneNumber] = useState({
    value: "",
    isTouched: false,
  });

  const handleformSubmitted = (items) => {
    setNew(items);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const values = Object.values(news);
    setNewsValues([
      ...values,
      {
        NumberOfTabels: datevalue,
        icon: calendar,
      },
      {
        NumberOfTabels: selectedradio,
        icon: table,
      },
    ]);

    const hasSelectedOptions = Object.keys(newsValues).length >= 5 && selectedradio !== "";

    if (hasSelectedOptions) {
      SetFormData({
        ...formData,
        ...news,
      });
      setFormSubmitted(true);
      console.log(newsValues);
      console.log(datevalue);
      setShowErrorMessage(false);
    } else {
      setShowErrorMessage(true);
    }
  };
  
  const handleSubmitForm = (e) => {
    e.preventDefault();
    alert("Account created!");
    clearForm();
  };
  const clearForm = () => {
    setFirstName("");
  setLastName("");
  setEmail("");
  setPhoneNumber({ value: "", isTouched: false });
  setRole("role");
  };

  const getIsFormValid = () => {
    if(firstName!==""&&lastName!==""&&validateEmail(email)&&email!==""&&(Phonenumber.value.length>=11&&Phonenumber.value.length<=11)){
      return true;
    }
    return false;
  };
  const reservationbeforesubmit = () => (
    <div className='min-h-screen'>
      <div className='flex-col justify-center items-center mb-[5rem]'>
        <h1 className='text-[#ff89a1] text-center text-[2rem]'>Reserve A table</h1>
        <div className='bg-[#6D87AE] h-10/12 w-full grid lg:grid-cols-2 '>
          <img className='w-[22rem] h-[22rem] ml-[4rem] mt-[6rem]' src={bar} />
          <div className='flex-col justify-center content-center mr-[1rem]  '>
            <form onSubmit={handleSubmit}>
              <div className='flex flex-col justify-center content-center  mt-[2rem]'>
                <div className='flex justify-center h-[4rem] '>
                  <img className='w-[3rem] h-[3rem] mr-[40rem] absolute' src={table} />
                  <label className='text-white text-[2rem]'>
                    <input
                      className=' w-[1.5rem] h-[1.5rem] mr-[1rem]'
                      type='radio'
                      value='Indoor Table'
                      checked={selectedradio === 'Indoor Table'}
                      onChange={(e) => setSelectedRadio(e.target.value)}
                    />
                    Indoor Table
                  </label>
                  <img className='w-[3rem] h-[3rem]  absolute' src={table} />
                  <label className='text-white text-[2rem]'>
                    <input
                      className='w-[1.5rem] h-[1.5rem] ml-[6rem] mr-[1rem]'
                      type='radio'
                      value='Outdoor Table'
                      checked={selectedradio === 'Outdoor Table'}
                      onChange={(e) => setSelectedRadio(e.target.value)}
                    />
                    Outdoor Table
                  </label>
                </div>
              </div>
              <div className='grid grid-cols-2 grid-rows-3 justify-center content-center gap-[2rem]'>
                <div className='relative items-center w-[255px] rounded-lg'>
                  <h1 className='text-white text-bold text-[1.3rem] text-center'>Date</h1>
                  <input
                    onChange={(e) => SetDateValue(e.target.value)}
                    className='bg-[#A6BBFF] p-[1.39rem] w-full  font-bold text-lg rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white '
                    required
                    type='date'
                  />
                </div>
                <Dropdown handleformSubmitted={handleformSubmitted} setFormSubmitted={setFormSubmitted} formSubmitted={formSubmitted} />
              </div>
              <button type='submit' className='text-black w-[20rem] h-[4rem] rounded-[4rem] mb-[8rem] ml-[10rem] bg-white'>
                Submit
              </button>
              {showErrorMessage && 
                <div className='flex ml-[11rem]'>
                  <img className='w-[5rem] h-[5rem] mr-[2rem] '  src={warning} />
                  <p className='text-[#ff5757] text-[1.5rem] mt-[1.7rem]  mb-[3rem] '>You Must Fill All Requirements.</p>
                </div>
             }

            </form>
          </div>
        </div>
      </div>
    </div>
  );

  const reservationaftersubmit = () => (
    <>
      <div className='min-h-screen  '>
        <h1 className='text-[3rem] text-center mb-[2rem] text-white'>Your Order!</h1>
        <div className='lg:flex justify-center items-center '>
          <div className=' h-10/12  grid grid-rows-2 '>
            <div className='lg:flex'>
              <img className='w-[20rem] h-[20rem] lg:mr-[3rem] md:ml-[15rem]' src={waiter} />
              <div className='grid lg:grid-cols-2 grid-rows-3 md:grid-cols-2  gap-[1rem] '>
                {newsValues.map((item) => (
                  <div className='w-[16rem] h-[5rem] bg-[#f0dd7a] text-black mt-[1rem] rounded-[2rem]  flex items-center justify-center '>
                    <img className=' mr-[1.0rem] w-[3rem]' src={item.icon} />
                    {item.NumberOfTabels}
                  </div>
                ))}
              </div>
            </div>
            <div className='flex-col justify-center content-center ml-[5rem] md:ml-[2rem]  '>
              <h1 className='text-white text-center text-[2rem] mr-[10rem] mb-[3rem]'>Enter Your Information</h1>
              <form onSubmit={handleSubmitForm}>
                <div className='grid grid-cols-2 grid-rows-3 justify-center content-center gap-[2rem]'>
                  <div>
                    <h1 className='text-white text-bold text-[1.3rem] '>First name</h1>
                    <input required type='text' className='w-[19em] h-[4rem] rounded-lg text-black  border border-white-900' placeholder='First name' value={firstName} onChange={(e)=>setFirstName(e.target.value)} />
                  </div>
                  <div>
                    <h1 className='text-white text-bold text-[1.3rem] '>Last name</h1>
                    <input required type='text' className='w-[19rem] h-[4rem] rounded-lg text-black bg-white' placeholder='Last name' value={lastName} onChange={(e)=>setLastName(e.target.value)} />
                  </div>
                  <div>
                    <h1 className='text-white text-bold text-[1.3rem] '>Email</h1>
                    <input required type='email' className='w-[19rem] h-[4rem] rounded-lg text-black bg-white'placeholder='email@company.com' value={email} onChange={(e)=>setEmail(e.target.value)} />
                  </div>
                  <div>
                    <h1 className='text-white text-bold text-[1.3rem] '>Phone number</h1>
                    <input required type='tel' className='w-[19rem] h-[4rem] rounded-lg text-black bg-white' placeholder='Phone number' value={Phonenumber.value} onChange={(e)=>setPhoneNumber({value:e.target.value,isTouched:true})} />
                  </div>
                </div>
                <div className='mb-[rem]'>
                  <button type='submit' disabled={!getIsFormValid()} className='text-black w-[20rem] h-[4rem] mb-[10rem]  rounded-[4rem] bg-white cursor-pointer ml-[16rem] hover:bg-[#ff5757]  '>
                    Confirm Registration
                  </button>
                  <PhoneErrorMessage  value={Phonenumber.value} isTouched={Phonenumber.isTouched} />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div className='min-h-screen'>
      {formSubmitted ? reservationaftersubmit() : reservationbeforesubmit()}
    </div>
  );
};

export default Reservation;

import React, { useState,useEffect } from 'react';
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai';
import { DropDownData } from '../constants/constants2';

const Dropdown = ({setFormSubmitted,handleformSubmitted, formSubmitted, handleFormSubmit}) => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleOptionClick = (dropdownIndex, option) => {
    setOpenDropdownIndex(null);
    
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [dropdownIndex]: option,
    }));
  };
  const toggleDropdown = (event, dropdownIndex) => {
    event.preventDefault();
    setOpenDropdownIndex((prevIndex) => (prevIndex === dropdownIndex ? null : dropdownIndex));

    
  };
  useEffect(()=>{
    handleformSubmitted(selectedOptions);
},[selectedOptions,handleformSubmitted])

  return (
    <>
      {DropDownData.map((dropdown, index) => {
        const selectedOption = selectedOptions[index];
        return (
          <div key={dropdown.value} className="relative flex flex-col items-center  rounded-lg">
            <h1 className="text-white text-bold text-[1.3rem]">{dropdown.Label}</h1>
            <button
              onClick={(e) => toggleDropdown(e, index)}
              className={`bg-[#A6BBFF] p-[1.39rem] w-full flex items-center justify-between font-bold text-lg rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white ${
                openDropdownIndex === index ? 'overflow-scroll' : ''
              }`}
            >
              <div className="flex items-center">
                <img src={dropdown.img} className="w-[2rem] h-[2rem] mr-[1rem]" alt="person icon" />
                <span>{selectedOption ? selectedOption.NumberOfTabels : dropdown.icon|| dropdown.text}</span>
                {formSubmitted || !selectedOption && (
                  <span className="text-red-500 ml-2 sm:text-[1rem]">Required</span>
                )}
              </div>
              {openDropdownIndex === index ? <AiOutlineCaretUp className="h-8" /> : <AiOutlineCaretDown className="h-8" />}
            </button>

            {openDropdownIndex === index && (
              <div className="bg-[#A6BBFF] absolute top-20 flex flex-col items-start rounded-lg p-2 w-full max-h-[380px] overflow-y-auto z-50">
                {dropdown.options.map((item, ind) => (
                  <div
                    onClick={() => handleOptionClick(index, item)}
                    key={ind}
                    className="flex w-full justify-between hover:bg-blue-300 cursor-pointer p-4 rounded-r-lg border-l-transparent hover:border-l-white border-l-4 "
                  >
                    <h3 className="font-bold">{item.NumberOfTabels}</h3>
                    <img className="w-[2rem] h-[2rem]" src={item.icon} alt="icon" />
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};

export default Dropdown;
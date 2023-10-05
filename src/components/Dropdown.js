import { useState } from 'react';

function Dropdown({options,selectedOption, handleOptionClick}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    handleOptionClick(option);
    setIsOpen(false);
  }

  const renderedOptions = options.map((option) => {
    return <div onClick={()=>{handleOptionSelect(option)}} key={option.value}>{option.label}</div> 
  });

  return (
    <div >
    <div onClick={handleDropdownClick} className='cursor-default bg-slate-400 w-[180px] text-center'>{selectedOption? selectedOption.label: 'select an option'} </div>
    <div>
    {isOpen && <div>{renderedOptions}</div>}
    </div>
    </div>
  )
}

export default Dropdown
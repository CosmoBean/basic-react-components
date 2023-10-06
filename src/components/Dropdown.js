import { useState } from 'react';

// set the dropdown option as value and onchange for a more generic convention name for all components
function Dropdown({options,value, onChange}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    onChange(option);
    setIsOpen(false);
  }

  const renderedOptions = options.map((option) => {
    return <div onClick={()=>{handleOptionSelect(option)}} key={option.value}>{option.label}</div> 
  });

  return (
    <div >
    <div onClick={handleDropdownClick} className='cursor-default bg-slate-400 w-[180px] text-center'>{value? value.label: 'select an option'} </div>
    <div>
    {isOpen && <div>{renderedOptions}</div>}
    </div>
    </div>
  )
}

export default Dropdown
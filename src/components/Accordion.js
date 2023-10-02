import { useState } from 'react';
import {GoChevronLeft, GoChevronDown} from 'react-icons/go'

function Accordion({items}) {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleClick = (clickedIndex) => {
    //functional way of using setState, so that we get the most current value of the state
    setExpandedIndex((expandedIndex)=>{
      if (expandedIndex === clickedIndex) {
        return null;
      }else {
        return clickedIndex;
      }
    })
  }

  const renderedItems = items.map((item, index)=> {
    const isExpanded = index === expandedIndex;
    return (
        <div key={item.id} className='cursor-pointer'>
          <div className='flex justify-between items-center p-3 border=b bg-gray-50' onClick={()=>{handleClick(index)} }>
            {item.label}
            <span className='text-xl'>{isExpanded ? <GoChevronDown/> : <GoChevronLeft/>}</span>
          </div>
          {isExpanded && <div className='border-b p-5'>{item.content}</div> }
        </div>
    )
  });
  return (
    <div className='border-x border-t rounded'>{renderedItems}</div>
  )
}

export default Accordion
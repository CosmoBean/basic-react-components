import { useState } from "react";
import Dropdown from "./components/Dropdown";

function App() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  }
  const options = [
    { label: 'Red', value: 'red' },
    { label: 'Green', value: 'green' },
    { label: 'Blue', value: 'blue' }
  ]

  return (
    <div>
      <Dropdown options={options} value={selectedOption} onChange={handleOptionClick}  />
    </div>
  )
};

export default App;

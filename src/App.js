import Accordion from "./components/Accordion";
function App() {
  const items = [
    { id : "eghaf7af",
      label: "What is React?",
      content: "React is a front end javascript framework"
    },
    {
      id: "eghas0af",
      label: "Why use React?",
      content: "React is a favorite JS library among engineers"
    },
    {
      id: "eghas1af",
      label: "How do you use React?",
      content: "You use React by creating components"
    }
  ]
  return (
    <div>
      <Accordion items={items} />
    </div> 
)};

export default App;

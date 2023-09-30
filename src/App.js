import Button from "./components/button";
import {GoBell, GoCloud, GoDatabase} from 'react-icons/go'
function App() {
  return (
    <div>
    <div className="p-2"><Button primary outline>Primary</Button></div>
    <div className="p-2"><Button secondary ><GoBell/>Secondary</Button></div>
    <div className="p-2"><Button success rounded outline><GoCloud />Success</Button></div>
    <div className="p-2"><Button warning rounded><GoDatabase />Warning</Button></div>
    <div className="p-2"><Button danger>Danger</Button></div>
    <div className="p-2"><Button >Plain</Button></div>
    </div>
)};

export default App;

import './App.css';
import {HappyBirthday} from './Components/HappyBirthday/HappyBirthday';
import { Randomquotes } from './Components/RandomQuotes/RandomQuotes';
import {Clock} from './Components/Clock/Clock'

function App() {
  return (
    <div >
      <HappyBirthday/>
      <Clock/>
      <Randomquotes/>
      
    </div>
  );
}

export default App;

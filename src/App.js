import './App.css';
import {HappyBirthday} from './Components/HappyBirthday/HappyBirthday';
import { Randomquotes } from './Components/RandomQuotes/RandomQuotes';
import {Clock} from './Components/Clock/Clock'
import { TetHoliday } from './Components/TetHoliday/TetHoliday';
import { TetHoliday2 } from './Components/TetHoliday/TetHoliday2';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";

function App() {
  return (
    < >
      <Router>
        <Routes>
            <Route path='/' exact element={<Randomquotes/>}/>
            <Route path='/Tetholiday' exact element={<TetHoliday2/>}/>
            <Route path='/HappyBirthday' exact element={<HappyBirthday/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;

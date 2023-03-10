import React from 'react'
import Navbar from './Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Home';
import Continents from './Continents';
import Search from './Search';
import Error from './Error';
export default function Layout() {
  return (
    <div>
        <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element = {<Home/>}/>
          <Route exact path='/continents' element={<Continents/>}/>
          <Route exact path='/search' element= {<Search/>}/>
          <Route path='*' element = {<Error/>}/>
        </Routes>
        <Routes>
          
        </Routes>
        <Routes>
          
        </Routes>
      </Router>
    </div>
  )
}

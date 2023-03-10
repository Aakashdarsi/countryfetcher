
import Navbar from './Components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Components/Home';
import Continents from './Components/Continents';
import Search from './Components/Search';
import Error from './Components/Error';
function App() {
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
  );
}

export default App;

import './App.css';
import Search from './Components/Search';
import {Routes,Route, Link} from 'react-router-dom';
import Trailer from './Components/Trailer';
import Error from './Components/Eroor';
import Home from './Components/Home';
import Nvbr from './Components/Nvbr';




function App() {
  
  return (
    <div className="App">
    <Nvbr/>
  <Link to={"/"}></Link>
  <Link to={"/Movies"}></Link>
    
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Movies" element={<Search/>}/>
    <Route path="/Trailer/:id" element={<Trailer/>}/>
    <Route path="*" element={<Error/>}/>
  </Routes>
  
    </div>
  );
}

export default App;

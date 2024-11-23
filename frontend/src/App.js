


// import './App.css';
import Signup from './pages/Signup';
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './pages/Login';
import Home from './home/Home';
import WeddingDecor from './home/WeddingDecor';
import Weddingmanagement from './home/Weddingmanagement';
import About from './home/About';
import Contact from './home/Contact';
import Conferancemanagement from './home/Conferancemanagement';
import Productlaunch from './home/Productlaunch';
import Awardcerimonies from './home/Awardcerimonies';





function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/login'element={<Login/>}/>
        
      </Routes>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Routes>
        <Route path='/weddingdecor' element={<WeddingDecor/>}/>
       </Routes>
       <Routes>
        <Route path='/weddingmanagement' element={<Weddingmanagement/>}/>
       </Routes>
       <Routes>
        <Route path='/conferancemanagement' element={<Conferancemanagement/>}/>
       </Routes>
       <Routes>
        <Route path='/productlaunch' element={<Productlaunch/>}/>
       </Routes>
       <Routes>
        <Route path='/awardcerimonies' element={<Awardcerimonies/>}/>
       </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;

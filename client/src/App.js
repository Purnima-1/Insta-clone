import Navbar from "./components/Navbar";
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css'
import Home from "./components/screens/Home";
import Profile from "./components/screens/Profile";
import Login from "./components/screens/Login";
import Signup from "./components/screens/Signup";
import CreatePost from "./components/screens/CreatePost";

function App() {
  return (
   <>
   <BrowserRouter>
 <Navbar/>
 <Routes>
 <Route path='/' element={<Home/>}/>
 <Route path='/profile' element={<Profile/>}/>
 <Route path='/login' element={<Login/>}/>
 <Route path='/signup' element={<Signup/>}/>
 <Route path='/createpost' element={<CreatePost/>}/>
 </Routes>
 </BrowserRouter>
  </>
  );
}

export default App;

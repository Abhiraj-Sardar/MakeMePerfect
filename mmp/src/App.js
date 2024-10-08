import './App.css';
import { Loader } from './Loader/Loader';
import { useEffect, useState } from 'react';
import { Home } from './Home/Home';
import { UserActivity } from './StreakChart/UserActivity';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ComingSoon } from './ComingSoon/ComingSoon';
import { Developer } from './Developer Info/Developer';


function App() {
  
  const [isMounted,setIsMounted]=useState(true);
  const [loadHomePage,setLoadHomePage]=useState(false);

  useEffect(()=>{
    const timer = setTimeout(() => {
      setIsMounted(false);
      setLoadHomePage(true);
  }, 3200);

  return()=>{clearTimeout(timer);}
  },[])
  return (
    
    <div className="App">
      
      
       
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<>{isMounted && <Loader />}{loadHomePage && <Home/>}</>} ></Route>
          <Route path='/:id' element={<UserActivity/>}></Route>
          <Route path='/dev' element={<Developer/>}></Route>
        </Routes>
      </BrowserRouter> 
      
    </div>
    
    
  );
}

export default App;



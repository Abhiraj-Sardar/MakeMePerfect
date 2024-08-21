import './App.css';
import { Loader } from './Loader/Loader';
import { useEffect, useState } from 'react';
import { Home } from './Home/Home';
import { UserActivity } from './StreakChart/UserActivity';
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
          <Route path='/sprint100' element={<UserActivity/>}></Route>
        </Routes>
      </BrowserRouter> 
      
    </div>
  );
}

export default App;

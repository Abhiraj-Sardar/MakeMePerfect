import logo from './logo.svg';
import './App.css';
import { Loader } from './Loader/Loader';
import Navbar from './Navbar/Navbar';
import { useEffect, useState } from 'react';

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
      
      {isMounted && <Loader />}
      {loadHomePage && <Navbar/>}
    </div>
  );
}

export default App;

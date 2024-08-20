import './App.css';
import { Loader } from './Loader/Loader';
import { useEffect, useState } from 'react';
import { Home } from './Home/Home';

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
      
      {/* {isMounted && <Loader />}
      {loadHomePage && <Home/>} */}
      
    </div>
  );
}

export default App;

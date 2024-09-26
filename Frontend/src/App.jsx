import React from 'react';
import Home from '../src/home/Home';
import { Routes, Route, Navigate } from "react-router-dom";
import Courses from './courses/Courses';
import Signup from './components/Signup';
import Contact from './components/Contactus';
import About from './components/About';
import Admin from './components/Admin';
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider';
import Final from "./components/Final";

function App() {
  const [Authuser] = useAuth();
  
  return (
    <div className='dark:bg-slate-900 dark:text-white'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/course' element={Authuser ? <Courses /> : <Navigate to="/signup" />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/admin'  element={<Admin/>}/>
        
        {/* Final route where item is passed as state */}
        <Route 
          path='/buy' 
          element={Authuser ? <Final /> : <Navigate to="/signup" />} 
          
        />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;

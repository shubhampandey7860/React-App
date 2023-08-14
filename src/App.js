
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  
  Route,

  Routes,

  
} from "react-router-dom";





function App() {

  const [mode,setMode] = useState('light') ; // whether dark mode is enable or not
  const [alert,setAlert] = useState(null)
  const showAlert = (message,type) =>{
   setAlert({
    msg:message,
    type:type
   })
   setTimeout(() => {
    setAlert(null);
   }, 2000);
   

  }
  const toogleMode = ()=>{
    if (mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor ='#042743';
      showAlert("dark mode has been enabled",'success')
      document.title ='TextUtils-DarkMode'
      
    }
    else{
      setMode('light')
      document.body.style.backgroundColor ='white';
      showAlert("Light mode has been enabled",'success');
      document.title ='TextUtils-lightkMode'
    }

  }
  return (
    <>
      {/* <Navbar Title="TextUtils" about="About TextUtils" /> */}
      <Router>
      <Navbar Title = "TextUtils" mode={mode} toogleMode={toogleMode} about = "About"/>
      <Alert alert={alert}/>
      <div className='container my-3'>
        <Routes>
       
          <Route exact path="/" element = {<TextForm showAlert ={showAlert} heading = "Enter the text to analyze below" mode={mode}/>}/>  
          
      
          <Route path="/about"  element={<About/>}/>
          
      
      
      </Routes>
        
        
      </div> 
      {/* <About/> */}
      </Router>  
    </>

  );
}

export default App;
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';


// imrs

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState("null");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }
  // set alert ye iss state(line no 14) ko set krne ka function hai
  // alert name state
  // whether dark mode enable or not
  const toggleMode = () => {

    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#768376';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled", "success");

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }


  }
  return (
    <>
      {/* <Navbar/>  */}
      <Navbar title="Manish" mode={mode} toggleMode={toggleMode} />
      {/* <Alert alert={alert} /> */}
      <div className="container my-3">
        {/* margin y me 3 */}
        <Textform heading="Enter the text to analyze below" />
        {/* <About/> */}
      </div>
    </>
    // jsx fragment ye bracket close ke pehele just uper hee lagane ka close vala jsx<>
  );
}
// {} iske under jb liikhte hai tb usko js bolte hai
// is tarh se ham name ko resolve krsakte haiii
// div open tag se div close tag tak sb JSX hai and  JSX ye ek html hee haiii 
// props ye ek property hai 
// usko ase define krte hai jese line no. 10 me diya hai   

export default App;
// ctrl+shift+`(tab above button)= in  terminal show op 
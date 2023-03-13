import React, { useState } from 'react'
import '../../App.css';
import Navbar from '../Navbar';
import TextForm from '../TextForm';
import Alert from '../Alert';


const Home = () => {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert('dark mode is enabled', 'success')
      document.title = 'TextUtils - Dark Mode';
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Light mode is enabled', 'success')
      document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>
      <Navbar title='TextUtils' aboutText='About TextUtils' mode={mode} toggleMode={toggleMode} />
      <Alert alert= {alert}/>
      <div className="container my-3">
        <TextForm heading='Enter Your Text below to analyze' showAlert
        ={showAlert}  mode={mode} />
      </div>
    </>
  );
}

export default Home;

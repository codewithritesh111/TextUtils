// import logo from './logo.svg';
// import './App.css';
import Alert from "./Alert"
import Navbar from "./Components/Navbar"
import TextForm from "./Components/TextForm"
import React,{useState} from 'react'
// import {
//   BrowserRouter,
//   Route,
//   Routes,
//   Link
// } from "react-router-dom";


// import About from "./Components/About"
function App() {
  const [mode,flipmode] = useState('light')
  const [alert,showAlert] = useState(null)
  const [col,setCol] = useState('#0A4143');

  const showA = (message,type)=>{
    showAlert({message:message,type:type})
    setTimeout(()=>{
      showAlert(null)
    },2000)
  }

  const setBgCol=(colo)=>{
    if(col !== colo){
      setCol(colo)
      document.body.style.backgroundColor = colo;
      document.body.style.color = 'white'
    }
    else{
      if(col !== '#0A4143'){
        setCol('#0A4143')
        document.body.style.backgroundColor = '#0A4143';
        document.body.style.color = 'white'
      }
    }
  }

  const func1 = ()=>{
    if(mode === 'light'){
      flipmode('dark')
      document.body.style.backgroundColor = col;
      document.body.style.color = 'white'
      document.title = 'TextUtils - Dark Mode'
      // let toggle = 1
      // setInterval(()=>{
      //   if(toggle)
      //   document.title = 'TextUtils - You have virues'
      //   else
      //   document.title = 'TextUtils - Instal this now'
      //   toggle = !toggle
      // },1400)
    }
    else{
      flipmode('light')
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black'  
      document.title = 'TextUtils - Light Mode'

    }
  }
  return (
        <>
          {/* <BrowserRouter> */}
          <Navbar mode={mode} func={func1} alert={alert} col={col} setCol={setBgCol} alertFunc={showA}/>
          <Alert alert={alert} alertFunc={showAlert}/>
        <div className="container my-4" mode={mode}>
          {/* <Routes>
            <Route exact path="/about" element={
            }>
            </Route> */}
              {/* <About /> */}
            {/* <Route
              exact path="/"
              element={ */}
                <TextForm heading = "Example Text Area" mode={mode} col={col} alertFunc={showA}/>
              {/* }
            ></Route>
          </Routes> */}
        </div>
      {/* </BrowserRouter> */}

    </>
  );
}

export default App;

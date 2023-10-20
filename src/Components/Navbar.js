import React from 'react'
// import {a} from 'react-router-dom'
import PropTypes from 'prop-types'


export default function Navbar(probes) {
  const changeBackground = (colo)=>{
    if(probes.mode !== 'light'){
      probes.setCol(colo)
    }
  }

  const alertMess=()=>{
    probes.func()
    probes.alertFunc((probes.mode==='dark'?'light':'dark')+" mode is on","success")
    // console.log(probes.alert.message," ",probes.alert.type)
  }
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${probes.mode} bg-${probes.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{probes.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-a" href="#">{probes.about}</a>
        </li> */}
      </ul>
      <div style={{display:'flex'}}>
        <div className="first mx-1" id='red' onClick={()=>changeBackground('red')} style={{height:'30px',width:'30px',borderRadius:'15px',backgroundColor:'red'}}></div>
        <div className="first mx-1" id='purple' onClick={()=>changeBackground('purple')} style={{height:'30px',width:'30px',borderRadius:'15px',backgroundColor:'purple'}}></div>
        <div className="first mx-1" id='brown' onClick={()=>changeBackground('brown')} style={{height:'30px',width:'30px',borderRadius:'15px',backgroundColor:'brown'}}></div>
      </div>
      <div className="form-check form-switch">
      <input className="form-check-input" type="checkbox" role="switch" onClick={alertMess} id="flexSwitchCheckDefault"/>
      <label className="form-check-label" style={{color:probes.mode==='dark'?'white':'black'}} for="flexSwitchCheckDefault"> Switch {probes.mode === 'light'?'Dark':'Light'} mode</label>
    </div>
    </div>
  </div>
</nav>
    </div>
  )
}

Navbar.propTypes = {
    title : PropTypes.string,
    about : PropTypes.string
}

Navbar.defaultProps = {
    title : "TextUtils",
    about : "Students"
}
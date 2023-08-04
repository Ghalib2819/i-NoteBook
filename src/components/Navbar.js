import React from "react";
import { Link, useLocation } from "react-router-dom";

// eslint-disable-next-line 
function Navbar () {

  const navigateTo = (path) => {
    window.location.href = path;
  }

  const logOut = ()=>{
    localStorage.removeItem('token')
   navigateTo("/")
  }
  let location = useLocation();
  return (
   
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Mirza</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item ">
              <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/" > Home</Link>
            </li>
            <li className="nav-item ">
              <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about"> About</Link>
            </li>
            <li className="nav-item ">
              <Link className={`nav-link ${location.pathname === "/contacts" ? "active" : ""}`} to="/contacts"> Contacts</Link>
            </li>
          </ul>
          <div className="my-2 mx-2">
          {
              !localStorage.getItem('token') ? <form className="d-flex">
                <Link to="/login" className="btn btn-success mx-2" type="button"><b>Log-In</b></Link>
                <Link to="/signup" className="btn btn-success mx-2" type="button"><b>Sign-Up</b></Link>
              </form> : <button onClick={logOut} className="btn btn-danger "><b>Log-Out</b></button>
           }
           </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React, {  useContext } from 'react';


import { NavLink } from 'react-router-dom';
import { UserContext } from '../App';


const Navbar = () => {
  const { state, dispatch } = useContext(UserContext);
  const RenderMenu = () => {
    if (state) {
      return (
        <>
          <li className="nav-item px-2 active">
            <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
          </li>
          <li className="nav-item px-2">
            <NavLink className="nav-link" to="/about">About</NavLink>
          </li>
         
          

          <li className="nav-item px-2">
            <NavLink className="nav-link " to="/contact">Contact</NavLink>
          </li>
          <li className="nav-item px-2">
            <NavLink className="nav-link" to="/profile">Profile</NavLink>
          </li>
          <li className="nav-item px-2">
            <NavLink className="nav-link" to="/logout">Logout</NavLink>
          </li>
        </>
      )
    } else {
      return (
        <>
          <li className="nav-item px-2 active">
            <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
          </li>
          <li className="nav-item px-2">
            <NavLink className="nav-link" to="/about">About</NavLink>
          </li>
          <li className="nav-item px-2">
            <NavLink className="nav-link " to="/contact">Contact</NavLink>
            
          </li>
          <li className="nav-item px-2">
            <NavLink className="nav-link " to="/login">Login</NavLink>
          </li>
          <li className="nav-item px-2">
            <NavLink className="nav-link " to="/signup">Registration</NavLink>
          </li>
         
         
        </>
      )
    }

  }
  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">

        <NavLink className="navbar-brand" to="#">
          PORTFOLIO MAKER'S
        </NavLink>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <RenderMenu>

            </RenderMenu>

          </ul>

        </div>
      </nav>

    </>
  )
}


export default Navbar

import React, { useReducer,createContext} from 'react';
import "./App.css";

import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import Footer from './components/footer';

import Profile from './components/Profile';

import Logout from './components/Logout';

import { initialState,reducer } from './reducer/UseReducer';

//1.context-api

export const UserContext = createContext();


const Routing = () => (

  <Switch>
  <Route exact path="/">
   <Home/>
  </Route>

  <Route path="/about">
   <About/>
  </Route>
  <Route path="/profile">
   <Profile/>
  </Route>
  
  
  <Route path="/contact">
   <Contact/>
  </Route>
  <Route path="/login">
   <Login/>
  </Route>
   <Route path="/signup">
   <Signup/>
  </Route>


  <Route path="/logout">
   <Logout/>
  </Route>
  </Switch>

);

const App = () => {
  
  const [state, dispatch] = useReducer(reducer, initialState);
  



  return (
  <>
    <UserContext.Provider value={{state, dispatch}}>  

   
    <Navbar/>
    <Routing/>

    <Footer/>

    </UserContext.Provider>

   
     
     
      
   
    </>
    );
}

export default App
import React,{useState,useContext} from 'react'
import { NavLink , useHistory } from 'react-router-dom';

import { UserContext } from '../App';

export const Login = () => {

    const {state, dispatch} = useContext(UserContext);

    const history = useHistory();
    const [email, SetEmail] = useState('');
    const [password, SetPassword] = useState('');

    const loginUser = async  (e) => {
        e.preventDefault();

      const res = await fetch('/signin',{
          method:"POST",
          headers:{
              "Content-Type":"application/json"
          }, 
          body:JSON.stringify({

            email, password

          })
      });

      const data = res.json();

      if(res.status === 400 || !data)
      {
          window.alert("Invalid Credentials");

      }else{
          dispatch({type:"USER", payload:true})
          window.alert("Login Successful");
          history.push("/");
          
      }
    }




    return (
        <>
         <div className="container">
    <div className="row py-5 mt-4 align-items-center">
    
    
        <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto ">
        <div class="one">
              <h1>Login Now</h1>
          </div>
            <form method="POST">
                <div className="row">
                   
                    <div className="input-group col-lg-12 mb-4">
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-white px-4 border-md border-right-0">
                                <i className="fa fa-envelope text-muted"></i>
                            </span>
                        </div>
                        <input id="email" type="email" name="email" placeholder="Email Address" className="form-control bg-white border-left-0 border-md"
                        value={email}
                        onChange={(e) => SetEmail(e.target.value)}
                        />
                    </div>
                    <div className="input-group col-lg-12 mb-4">
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-white px-4 border-md border-right-0">
                                <i className="fa fa-lock text-muted"></i>
                            </span>
                        </div>
                        <input id="password" type="password" name="password" placeholder="Password" className="form-control bg-white border-left-0 border-md"
                        value={password}
                        onChange={(e) => SetPassword(e.target.value)}
                        
                        />
                    </div>

                    
                   
                    
                    <div className="form-group col-lg-12 mx-auto mb-0">
                        <a href="#" className="btn btn-reg btn-block py-2" onClick={loginUser}>
                            <span className="font-weight-bold">Login</span>
                        </a>
                    </div>

                    
                    <div className="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
                        <div className="border-bottom w-100 ml-5"></div>
                        <span className="px-2 small text-muted font-weight-bold text-muted">OR</span>
                        <div className="border-bottom w-100 mr-5"></div>
                    </div>

                   
                    
                   
                    <div className="text-center w-100">
                        <p className="text-muted font-weight-bold">Create New Account ! <NavLink to="/signup" className="text-primary ml-2">Register</NavLink></p>
                    </div>

                </div>
            </form>
        </div>
    </div>
</div>
            
        </>
    )
}

export default Login
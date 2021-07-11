import React, {useState} from 'react';
import { NavLink, useHistory } from 'react-router-dom';

export const Signup = () => {

    const history = useHistory();

    const[user,setUser] = useState({
        name:"",email:"",phone:"",work:"",password:"",cpassword:""
    });

    let name,value;
    const handleInputs =(e) =>{
        console.log(e);
        name = e.target.name;
        value= e.target.value;

        setUser({...user, [name]:value});
    }


const PostData = async(e) =>{
    e.preventDefault();

    const {name, email, phone, work, password, cpassword } = user;

    const res = await fetch("/register",{
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body:JSON.stringify({
            
        name, email, phone, work, password, cpassword 

        })
    });

    const data = await res.json();

    if(data.status === 422 || !data){
        window.alert("Invalid Registeration");
        console.log("Invalid Registeration");
    }else{
        window.alert("Registeration Successful");
        console.log("Registeration Successful");

        history.push("/login")
    }

}


    return (
        <>
    <div className="container">
    <div className="row py-5 mt-4 align-items-center">
       
        

        
        <div className="col-xl-6 col-lg-6 col-md-8 col-sm-10 mx-auto ">
        <div class="one">
              <h1>Register Here </h1>
          </div>
            <form method="POST">
                <div className="row">
                <div className="input-group col-lg-12 mb-4">
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-white px-4 border-md border-right-0">
                                <i className="fa fa-user text-muted"></i>
                            </span>
                        </div>
                        <input id="user" type="text" name="name" placeholder="Username" className="form-control bg-white border-left-0 border-md"
                        value={user.name}
                        onChange={handleInputs}
                        
                        />
                    </div>

                    <div className="input-group col-lg-12 mb-4">
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-white px-4 border-md border-right-0">
                                <i className="fa fa-envelope text-muted"></i>
                            </span>
                        </div>
                        <input id="email" type="email" name="email" placeholder="Email Address" className="form-control bg-white border-left-0 border-md"
                         value={user.email}
                         onChange={handleInputs}
                        />
                    </div>

                    
                    <div className="input-group col-lg-12 mb-4">
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-white px-4 border-md border-right-0">
                                <i className="fa fa-phone-square text-muted"></i>
                            </span>
                        </div>
                        
                        <input id="phoneNumber" type="tel" name="phone" placeholder="Phone Number" className="form-control bg-white border-md border-left-0 pl-3"
                         value={user.phone}
                         onChange={handleInputs}
                        />
                    </div>
                    <div className="input-group col-lg-12 mb-4">
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-white px-4 border-md border-right-0">
                                <i className="fa fa-briefcase text-muted"></i>
                            </span>
                        </div>
                        
                        <input id="work" type="text" name="work" placeholder="Work" className="form-control bg-white border-md border-left-0 pl-3"
                         value={user.work}
                         onChange={handleInputs}
                        />
                    </div>


                    
                    

                    
                    <div className="input-group col-lg-6 mb-4">
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-white px-4 border-md border-right-0">
                                <i className="fa fa-lock text-muted"></i>
                            </span>
                        </div>
                        <input id="password" type="password" name="password" placeholder="Password" className="form-control bg-white border-left-0 border-md"
                         value={user.password}
                         onChange={handleInputs}
                        />
                    </div>

                    
                    <div className="input-group col-lg-6 mb-4">
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-white px-4 border-md border-right-0">
                                <i className="fa fa-lock text-muted"></i>
                            </span>
                        </div>
                        <input id="passwordConfirmation" type="text" name="cpassword" placeholder="Confirm Password" className="form-control bg-white border-left-0 border-md"
                         value={user.cpassword}
                         onChange={handleInputs}
                        />
                    </div>

                    
                    <div className="form-group col-lg-12 mx-auto mb-0">
                        <a href="#" className="btn btn-reg btn-block py-2" onClick={PostData}>
                            <span className="font-weight-bold">Create your account</span>
                        </a>
                    </div>

                    
                    <div className="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
                        <div className="border-bottom w-100 ml-5"></div>
                        <span className="px-2 small text-muted font-weight-bold text-muted">OR</span>
                        <div className="border-bottom w-100 mr-5"></div>
                    </div>

                   
                    
                   
                    <div className="text-center w-100">
                        <p className="text-muted font-weight-bold">Already Registered? <NavLink to="/login" className="text-primary ml-2">Login</NavLink></p>
                    </div>

                </div>
            </form>
        </div>
    </div>
</div>


            
        </>
    )
}

export default Signup
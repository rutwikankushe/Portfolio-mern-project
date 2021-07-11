import React,{useEffect,useContext} from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../App';

const Logout = () => {
    //PROMISES
    const {state, dispatch} = useContext(UserContext);


    const history = useHistory();

    useEffect(() => {
         fetch('/logout',{
            method:"get",
            headers: {
              Accept:'application/json',
              'Content-Type':'application/json'
            },
            credentials: "include"

        }).then((res) =>{
            dispatch({type:"USER", payload:false});
            // history.push('/login',{ replace:true });
            window.location.href = '/login';
           
            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
              }


        }).catch((err) =>{
            console.log(err);
        })
       
    });
 


    return ( 
        <div >
        <p>WELCOM</p>
        <h1>This is logout Page</h1>
        </div>
    )
}

export default Logout
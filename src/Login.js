import { Button } from '@material-ui/core'
import React from 'react'
import  "./Login.css"
import {auth,provider} from "./firebase";
import {actionTypes} from './reducer';
import {useStateValue}from './StateProvider';
function Login() {
    const [state,dispatch]=useStateValue();
    const signIn=()=>{
      auth.signInWithPopup (provider)
      .then(result=>{
          dispatch({
              type:actionTypes.SET_USER,
              user:result.user, 
          })
      
      }).catch(error=>alert(error.message));
    };
    return (
        <div className="login">
            <div className="login_logo">
       <img src="https://www.logo.wine/a/logo/Facebook/Facebook-f_Logo-Blue-Logo.wine.svg" alt="fblogo"/>
       <img src ="https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo.png" alt="fblogotext"/>

            </div>
            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
        </div>
    )
}

export default Login

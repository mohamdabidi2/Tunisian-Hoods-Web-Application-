import React, { useState, useEffect } from 'react';
import Logo from "../resourses/login.jpg"
import { Button, Form } from 'react-bootstrap';
import { BrowserRouter as Router, Route, NavLink, withRouter } from 'react-router-dom'
import Axios from 'axios';
import Header from './home/Header';
import Footer from './home/Footer';
import axios from 'axios';

const Login = (props) => {
    useEffect(() => {
        Axios.post("/dashboard/veriflog", {}, { headers: { authToken: localStorage.getItem('Token') } }).then(res => props.history.push(res.data)).catch(error => props.history.push('/log'))
      
    }, [])
    const [err, setErr] = useState(false)
    const [errStyle, setErrStyle] = useState('')

    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [CallBackErr, setCallBackErr] = useState("")
    const VEmail = (email) => { if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) { return true } return false }
    const EmailHandler = (email) => {
        setEmail(email.target.value)
    }


    const PasswordHandler = (password) => {
        setPassword(password.target.value)

    }
    const LoginWithEmailPassword = () => {
  
        Axios.post("/user/login", { Password, Email }).then(res => {
            if (res.data.logedin == true) {
                localStorage.setItem("Token", res.data.token)
                Axios.post("/user/logintodashboard", {}, {
                    headers: { authToken: res.data.token }
                }).then(a =>{
                    if(a.data.verifiedEmail==true){
                        props.history.push("/dashboard")
                    }
                    else{
                        props.history.push('/confirm')

                    }
                })
            }
      

        }).catch(error=>{
            setErr(true)
            setCallBackErr(error.response.data)

        
    })

    }
    return (
        <div>
            <Header />
            <div className="loginForm">
                <div className="loginBackground">
                    <img className='loginIntroImg' src={Logo} alt="" />
                </div>
                <div className="loginFormIntro">
                    <h1 className="logoLogin" onClick={() => props.history.push("/")}>Tunisian <span className="hoods">Hoods</span></h1>
                    <h2 className='loginTitle'>Login</h2>
                    <div style={err === false ? { display: 'none' } : { display: "block" }} className={`alert alert-danger ${errStyle}`} role="alert">
                        {CallBackErr}
                    </div>
                    <div className='formLog'>
                        <div className="EmailpasswordInputContainer">
                            <p className="nameEmailpasswordInputContainer"><i className="fas fa-at"></i></p>
                            <input onChange={(e) => EmailHandler(e)} placeholder='Enter Your Email' className='EmailpasswordInput' type='email' />
                        </div>
                        <div className="EmailpasswordInputContainer">
                            <p className="nameEmailpasswordInputContainer"><i className="fas fa-lock"></i></p>
                            <input onChange={(e) => PasswordHandler(e)} placeholder='Enter Your Password' className='EmailpasswordInput' type='password' />
                        </div>

                    </div>

                    <button onClick={LoginWithEmailPassword} className=' btn btn-danger loginButton'>Login</button>
                    <p className="signupFromLogin btn btn-link" onClick={() => props.history.push('/Register')}>Create Account</p>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default withRouter(Login);






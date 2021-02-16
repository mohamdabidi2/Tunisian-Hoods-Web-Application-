import React, { useState,useEffect } from 'react';
import Logo from "../resourses/login.jpg"
import { Button, Form } from 'react-bootstrap';
import { BrowserRouter as Router, Route, NavLink, withRouter } from 'react-router-dom'
import Axios from 'axios';
import Header from './home/Header';
import Footer from './home/Footer';
import axios from 'axios';
import Recaptcha from 'react-recaptcha';

const Register = (props) => {
    useEffect(() => {
        axios.post('/dashboard/veriflog',{},{headers:{authToken:localStorage.getItem('Token')}}).then(res=>{
          
                props.history.push(res.data)
            
        })
       
     }, [])
    const [err, setErr] = useState(false)
    const [errStyle, setErrStyle] = useState('')
    const [Term, setTerm] = useState(false)


    const [Email, setEmail] = useState('')
    const [Human, setHuman] = useState(false)
    const [FullName, setFullName] = useState('')

    const [Password, setPassword] = useState('')
    const [Discord, setDiscord] = useState('')

    const [CallBackErr, setCallBackErr] = useState([])
    const VEmail = (email) => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
          
            return true
        } else { 
         
            return false }
    }
    const VPassword = (password) => {
        if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(password)) {
             return true }
  
             return false
    }
    const VDiscord = (discord) => {


         if(discord.split('').includes("#")){
          
return true
         }
         else{

            return false

         }
    }
    const VFullName = (fullName) => {
        if(fullName.length>=6){
     
         return true
        }
        else{
      
         return false
        }
     }
     const VTerm=(term)=>{
         return term
     }
    const EmailHandler = (email) => {
        setEmail(email.target.value)
    }
    const TermHandler = () => {
        setTerm(!Term)
    }
    const DiscordHandler = (discord) => {
        setDiscord(discord.target.value)

    }
    const FullNameHandler = (fullname) => {
        setFullName(fullname.target.value)
   

    }
    const PasswordHandler = (password) => {
        setPassword(password.target.value)

    }
    const LoginWithEmailPassword = async() => {
   let verifemail= VEmail(Email)
   let verifVPassword=     VPassword(Password)
   let verifVDiscord=   VDiscord(Discord)
   let verifVFullName=    VFullName(FullName)
   let verifVTerm=    VTerm(Term)
   let Vhumen=Human

   let errors=["Invalid Email Address","Password must be at least 6 characters one digit one special character one uppercase","invalid Discord ID","Full Name must be more than 5 Character","Accept our Terms and Conditions","Please verify that you are a human!"]
       let totl=[verifemail,verifVPassword,verifVDiscord,verifVFullName,verifVTerm,Vhumen]
       let errorss= totl.map((el,i)=>{
        if(el==true){
            return true
        }
     else{
         return errors[i]
     }}).filter(el=>el!==true)
   
   setCallBackErr(errorss)


let newUSER={FullName:FullName,
Email:Email,
Password:Password,
DiscordID:Discord }

   if(errorss.length<=0 )
{    Axios.post('/user/register',newUSER).then(res=>{
    if(res.data.msg=="success"){
        props.history.push('/log')
    }
    if(res.data.msg=="email already exist"){
        setCallBackErr([res.data.msg])
           setErr(true)
           setErrStyle('animate__animated animate__shakeY')
    }

})
   

}
   else{
    setErr(true)
  
    setErrStyle('animate__animated animate__shakeY')
}
   }
  const verifyCallback=(response)=> {
    if (response) {
    setHuman(true)
    }
  }

  const recaptchaLoaded=()=> {
    console.log('capcha successfully loaded');
  }
    return (
        <div>
            <Header/>
            <div className="loginForm">
                <div className="loginBackground">
                    <img className='loginIntroImg' src={Logo} alt="" />
                </div>
                <div className="loginFormIntro">
                    <h1 className="logoLogin" onClick={()=>props.history.push("/")}>Tunisian <span className="hoods">Hoods</span></h1>
                    <h2 className='loginTitle'>Register </h2>
                    {CallBackErr.map((el,i)=>
                             <div key={i} style={err === false ? { display: 'none' } : { display: "block" }} className={`alert alert-danger ${errStyle}`} role="alert">
                       {el}
                             </div>)}
               
                    <div className='formLog'>
                        <div className="EmailpasswordInputContainer">
                            <p className="nameEmailpasswordInputContainer"><i class="fas fa-user-tie"></i></p>
                            <input onChange={(e) => FullNameHandler(e)} placeholder='Enter Your Full Name' className='EmailpasswordInput' type='text' />
                        </div>
                        <div className="EmailpasswordInputContainer">
                            <p className="nameEmailpasswordInputContainer"><i className="fas fa-at"></i></p>
                            <input onChange={(e) => EmailHandler(e)} placeholder='Enter Your Email' className='EmailpasswordInput' type='email' />
                        </div>
                        <div className="EmailpasswordInputContainer">
                            <p className="nameEmailpasswordInputContainer"><i class="fab fa-discord"></i></p>
                            <input onChange={(e) => DiscordHandler(e)} placeholder='Enter Your Discord ID' className='EmailpasswordInput' type='text' />
                        </div>
                        <div className="EmailpasswordInputContainer">
                            <p className="nameEmailpasswordInputContainer"><i className="fas fa-lock"></i></p>
                            <input onChange={(e) => PasswordHandler(e)} placeholder='Enter Your Password' className='EmailpasswordInput' type='password' />
                        </div>

                    </div>
                    <div className="agreeRegister">

                        <input onClick={(e)=>TermHandler(e)} className="agreeRegisterInput btn btn-black" type="checkbox" />
                        <p className="agreeRegisterText">I agree with all Terms and Conditions</p>
                    </div>
                    <Recaptcha
            sitekey="6Lf13FYaAAAAAGJomcPzvUrt2j40zCZHr3mvtUdo"
            render="explicit"
            onloadCallback={recaptchaLoaded}
            verifyCallback={verifyCallback}
          />
                    <button onClick={LoginWithEmailPassword} className=' btn btn-danger loginButton'>Register</button>
                    <p className="signupFromLogin btn btn-link" onClick={() => props.history.push('/log')}>Already Have an Account </p>
                </div>
            </div>
        <Footer/>
        </div>
    );
}

export default withRouter(Register);






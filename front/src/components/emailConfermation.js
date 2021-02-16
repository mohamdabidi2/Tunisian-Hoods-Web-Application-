import axios from 'axios'
import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import Logo from "../resourses/thLogo.png"
import Footer from './home/Footer'
import Header from './home/Header'
const EmailConfirmation = (props) => {
    const [Email, setEmail] = useState("")
    useEffect(() => {
        Axios.post("/dashboard/isLoged", {}, { headers: { authToken: localStorage.getItem('Token') } }).then(res => res.data.verifiedEmail==true ? props.history.push("/dashboard/" + res.data._id) :res.data.verifiedEmail==false?props.history.push("/confirm"): props.history.push('/log')).catch(error => props.history.push('/log'))
        axios.post('/dashboard/emailUser',{}, {headers: { authToken: localStorage.getItem('Token') }}).then(res=>setEmail(res.data)).catch(error=>props.history.push("/log"))

      
    }, [])
    const Resend=()=>{
   
        Axios.post("/dashboard/resendEmail",{},{headers: { authToken: localStorage.getItem('Token') }}).then(res=> {
            })
    }
    return ( <div>

<Header/>
<div  className="menu-confirm-all">
    
        <div className="menu-confirm">
            <p className="menu-confirm-title2"><i class="fas fa-envelope-open-text"></i> You've got mail!</p>
            <h1 className="menu-confirm-title1">Check Your Email</h1>
            <p className="menu-confirm-para font-weight-light">We just sent a confirmation link to {Email}.<br/> Verify your address and we'll get you all set up!</p>
            <button className="btn btn-danger menu-confirm-btn" onClick={Resend}>Resend Confirmation Email <i class="fas fa-arrow-right"></i>
</button>
        </div>
   
    </div>
    <Footer/>
    </div> );
}
 
export default withRouter(EmailConfirmation) ;
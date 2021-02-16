import React, { useEffect, useState } from 'react'
import logo from "../../resourses/thLogo.png"

import { withRouter } from 'react-router-dom';
import Axios from 'axios';
import Header from './Header';
import Footer from './Footer';

const Packcheck = (props) => {
  const [Email, setEmail] = useState("")
  const [Phone, setPhone] = useState("")
  const [Payment, setPayment] = useState("")
  const [User, setUser] = useState({})


  useEffect(() => {

Axios.post("/dashboard/user",{},{headers:{authToken:localStorage.getItem('Token')}}).then(res=>setUser(res.data)).catch(error=>props.history.push('/log'))
  }, [])
  const packverif=()=>{
    if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(Email)){
      alert('Please Enter a valid email address')
    }
   if(Phone==""){
      alert('Please Enter a valid Phone Number')
    }
   if(Payment==""){
      alert('Missing required fields')
    }
   
   
      else{
          Axios.post("/dashboard/buypack",{FullName:User.FullName,Email,Phone,Payment,Pack:props.match.params.pack,userID:User._id},{headers:{authToken:localStorage.getItem('Token')}}).then(res=>res.data.msg=="success"?props.history.push('/dashboard/'):props.history.push(''))
     .catch(error=>props.history.push("/log")) 
          
      }
  }
    return ( <div className="">

<Header/>
<main className="main-staff ssaee">
<div className="shopwest">
<i class="fas  fa-shopping-cart fa-shopping-cart3"></i>


</div>

<div className="pageofcheckout">
<h1 className="checkout">Checkout</h1>
<p className="secure"> This page is secure</p>
<div className="packttt"><p className="checkoutemail" >Email</p>
<input type="text" className="checkoutinputt"onChange={(e)=>setEmail(e.target.value)}  placeholder="Your Email"/></div>
<div  className="packttt"><p className="checkoutemail" >Phone</p><input onChange={(e)=>setPhone(e.target.value)} type="number" className="checkoutinputt" placeholder="Your Phone Number"/></div>
<div className="packttt"><p className="checkoutemail">Payment</p>
<div className="payment-methode">
<div><input type="radio" className="checkoutinputtradio" name="r7" value="paypal" onClick={(e)=>setPayment(e.target.value)} /><span>PayPal</span></div>
<div><input type="radio" className="checkoutinputtradio" name="r7" value="bank"  onClick={(e)=>setPayment(e.target.value)} /><span>Bank Transfer</span></div>
</div></div>

<button className="sznddd contact-btn btn btn-danger" onClick={packverif}>Send</button>




</div>
</main>
        <Footer/>
    </div> );
}
 
export default withRouter (Packcheck);
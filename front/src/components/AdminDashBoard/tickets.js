import Axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { withRouter } from 'react-router-dom';


import logo from "../../resourses/thLogo.png"
import Footer from '../home/Footer';
import Header from '../home/Header';

import "./admin-cc.css"
const DashTicket = (props) => {
  const [PopUP, setPopUP] = useState(false)
  const [Ticket, setTicket] = useState([])
  const [user, setUser] = useState({})

  const [Email, setEmail] = useState("")
  const [Subject, setSubject] = useState("")
  const [Message, setMessage] = useState("")



  useEffect(() => {
Axios.post("/dashboard/isLoged",{},{headers:{authToken:localStorage.getItem('Token')}}).then(res=>setUser(res.data))
 
  
    Axios.post('/dashboard/alltickets',{},{headers:{authToken:localStorage.getItem('Token')}}).then(res=>setTicket(res.data))

  }, [])

const openticket=(e)=>{
  e.preventDefault()
  if(Email!=""&&Subject!=""&&Message!=""){
    Axios.post('/dashboard/add/ticket',{Email,Subject,Message},{headers:{authToken:localStorage.getItem('Token')}}).then(res=>{res.data.err==true?alert(res.data.msg):console.log()
    props.history.push("/dashboard")})
    setPopUP(!PopUP)
  }
 setTimeout(() => {
  Axios.post('/dashboard/alltickets',{},{headers:{authToken:localStorage.getItem('Token')}}).then(res=>setTicket(res.data))
  
 }, 1000);
}
const movetomessages=(ticket)=>{
if(ticket.state=="accepted"){
  props.history.push("/dash/bugreport/user/Support/"+ticket._id+"/"+ticket.userId)
}
else {
  alert("Waiting for approval from admin")
}
}
    return ( 
  
  
  <div>
        

    <div className="allmarginpossible">
    <Header/>

    <div className="main-messageadmin">
      
      <div id="main-container-dash2">
 



  <section className="ssaaa">
      

  <div id="left-column">
    <p className="column-heading">Browse</p>
    <div className="vertical-menu">
    <p  className="highlight1"onClick={()=>setPopUP(!PopUP)}>Open Ticket </p>
<p  className="highlight1" onClick={()=>props.history.push('/dashboard/'+user._id+'/Tickets')}> Tickets </p>
<p  className="highlight1" onClick={()=>props.history.push('/dashboard/'+user._id+'/bugReport')}> Bug Report </p>


    </div>
  </div>

  

  <div id="content-area">
    <div className="div-bar">
      <p className="bar-text">  Your Tickets </p>
    </div>
    {Ticket.map(el=>
    <div className="messageItem" onClick={()=>movetomessages(el)}>
    <div className="messageAllAA">
      <p className="img">You</p>
    </div>
    <div className="Messagecontent">
      <p  className="subjecttext">{el.Subject}</p>

    
    </div>
    <span className="states-rr" style={el.state=="in progress" ?{background:"#977c22"}:el.state=="accepted"?{background:"#229753"}:{background:"#972222"}} >{el.state}</span>
    </div>
      )}


    


  

  

   



  </div>

  </section>
</div>

<div id="credit">

</div>
    </div> 
    </div>
   
           <Footer/>
        <div className={PopUP===true?"ticket-popup":"ticket-popup1"}>

	<div class="container1">
		<form name="abonnement" novalidate>
			<div class="hidden error-top" id="error-top">Veuillez corriger les erreurs ci-dessous.</div>
      <h1>Open Ticket</h1>
			<p>
				<label for="email">Email : <abbr title="champs requis">* </abbr></label>
				<input className="input-ticket" type="email" id="email" name="email" maxlength="125" onChange={(e)=>setEmail(e.target.value)} required/>
				<p id="email-error" class="hidden uierror">Le champ Courriel est requis.</p>
			</p>

			<p>
				<label for="firstname">Object : <abbr title="champs requis">* </abbr></label>
				<input className="input-ticket" type="text" id="firstname" name="firstname" maxlength="50" onChange={(e)=>setSubject(e.target.value)} required/>
				<p id="firstname-error" class="hidden uierror">Le champ Prénom est requis.</p>
			</p>


			<p>
      <label for="lastname">Message : <abbr title="champs requis">* </abbr></label>
	<textarea className="input-ticket1" name="" id="" cols="30" rows="10" required  onChange={(e)=>setMessage(e.target.value)}></textarea>
			</p>

			<p class="center">
				<input type="submit" id="submit" name="submit" value="Send" onClick={openticket} formnovalidate/>
			</p>
		</form>
    <p className="closeticket" onClick={()=>setPopUP(!PopUP)}>X</p>
	</div>
        </div>
  </div>
        );
}
 
export default withRouter(DashTicket) ;
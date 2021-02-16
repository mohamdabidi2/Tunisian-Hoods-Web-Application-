import Axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { withRouter } from 'react-router-dom';


import logo from "../../resourses/thLogo.png"
import Footer from '../home/Footer';
import Header from '../home/Header';

import "./admin-cc.css"
import tickets from './tickets';
const Messanger = (props) => {
  const [PopUP, setPopUP] = useState(false)
  const [Whitlisted, setWhitlisted] = useState([])
  const [Ticket, setTicket] = useState([])
  const [user, setUser] = useState({})

  const [Email, setEmail] = useState("")
  const [Subject, setSubject] = useState("")
  const [Message, setMessage] = useState("")



  useEffect(() => {
Axios.post("/dashboard/isLoged",{},{headers:{authToken:localStorage.getItem('Token')}}).then(res=>setUser(res.data))

    Axios.post('/dashboard/ticket',{},{headers:{authToken:localStorage.getItem('Token')}}).then(res=>setTicket(res.data.filter(el=>el._id==props.match.params.id)))



  }, [])

  const openticket=(e)=>{
    e.preventDefault()
    if(Email!=""&&Subject!=""&&Message!=""){
      Axios.post('/dashboard/add/ticket',{Email,Subject,Message},{headers:{authToken:localStorage.getItem('Token')}}).then(res=>{res.data.err==true?alert(res.data.msg):console.log()
      props.history.push("/dashboard")})
      setPopUP(!PopUP)
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

   <div className="messagesaria">
   <div className="div-bar">
      <p className="bar-text">  Your Ticket ID: {props.match.params.id}</p>
    </div>

 
   {Ticket.map(el=>
<div className="divtickets">
<div className="textBar">
       <h1 className="namecaracter">Subject : {el.Subject}</h1>
   </div>
<div class="servess" >
  <h4 className>Your Request</h4>
  <hr/>
  <p>{el.Message}</p>

</div>
  <div class="servess serrrr" >
    <h4>Admin Answer</h4>
    <hr/>
  <p>{el.MessageAdmin}</p>

</div>
</div>
  
  
  )}
   </div>








  

  





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
 
export default withRouter(Messanger) ;
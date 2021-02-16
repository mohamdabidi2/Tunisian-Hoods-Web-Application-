import Axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { withRouter } from 'react-router-dom';


import logo from "../../resourses/thLogo.png"
import Footer from '../home/Footer';
import Header from '../home/Header';

import "./admin-cc.css"
const BugReport = (props) => {


  const [PopUP, setPopUP] = useState(false)
  const [Whitlisted, setWhitlisted] = useState([])
  const [Email1, setEmail] = useState("")
  const [Subject1, setSubject1] = useState("")
  const [Message1, setMessage1] = useState("")
  const [Statewt, setStatewt] = useState("")
  const [Subject, setSubject] = useState("")
  const [Err, setErr] = useState("")
  const [Message, setMessage] = useState("")
  const [CurrentUser, setCurrentUser] = useState({})
  const [user, setUser] = useState({})

  const openticket=(e)=>{
    e.preventDefault()
    if(Email1!=""&&Subject1!=""&&Message1!=""){
      Axios.post('/dashboard/add/ticket',{Email1,Subject1,Message1},{headers:{authToken:localStorage.getItem('Token')}}).then(res=>{res.data.err==true?alert(res.data.msg):console.log()
      props.history.push("/dashboard")})
      setPopUP(!PopUP)
    }
  }



  useEffect(() => {

Axios.post("/dashboard/isLoged",{},{headers:{authToken:localStorage.getItem('Token')}}).then(res=>setUser(res.data))
  

  Axios.post("/dashboard/user",{},{headers:{authToken:localStorage.getItem('Token')}}).then(res=>setCurrentUser(res.data))
    
  }, [])
 
const sendbug=()=>{
if(Subject.length>5&&Message!=""){
  Axios.post("/dashboard/bugreport",{FullName:CurrentUser.FullName,Email:CurrentUser.Email,Subject:Subject,Message:Message},{headers:{authToken:localStorage.getItem('Token')}}).then(res=>res.data.msg=="success"?props.history.push('/dashboard/'):console.log("hi"))
}
else {
  setErr("Subject And Message Case was required")
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
    

   <div className="textBar">
       <h1 className="bar-text">Bug Report </h1>
   </div>
   <div className="messagesaria">

    
<div className="formReport"><label htmlFor="subjectreport">Subject</label>
<input id="subjectreport"type="text" onChange={(e)=>setSubject(e.target.value)}/>
<label htmlFor="reportremage">Report message</label>
<textarea name="" id="reportremage" cols="30"onChange={(e)=>setMessage(e.target.value)} rows="10"></textarea>
<p className="menu-itemdd"> {Err}</p>
<button className="btn btn-danger btn-report" onClick={sendbug}>Send</button></div>
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
				<input className="input-ticket" type="text" id="firstname" name="firstname" maxlength="50" onChange={(e)=>setSubject1(e.target.value)} required/>
				<p id="firstname-error" class="hidden uierror">Le champ Prénom est requis.</p>
			</p>


			<p>
      <label for="lastname">Message : <abbr title="champs requis">* </abbr></label>
	<textarea className="input-ticket1" name="" id="" cols="30" rows="10" required  onChange={(e)=>setMessage1(e.target.value)}></textarea>
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
 
export default withRouter(BugReport) ;
import React, { useState,useEffect } from 'react';
import Header from "./home/Header"
import Footer from "./home/Footer"
import { withRouter } from 'react-router-dom';
import axios from 'axios';
const NewDash = (props) => {
    
    const [Info, setInfo] = useState({})
    const [Tk, setTk] = useState([])
    const [Toggel, setToggel] = useState(false)
   useEffect(() => {
       
    axios.post('/dashboard/info',{},{headers: { authToken: localStorage.getItem('Token') }}).then(res=>{
        setInfo(res.data)
        setTk(res.data.AcceptedTicket)
       
       setTimeout(() => {
        setToggel(true)
     
       },500);
      
           
        
      
    }).catch(error=>props.history.push('/log'))
   }, [])
    return ( 
        <div>
            <Header/>
            <div >
{Toggel==true?<div className="main-dashboard">
<div className="partie1dashboard">
<div className="barss">
<img src={Info.userPhoto} className="logoProfile" alt=""/>

</div>
{Info.IsAdmin==true?<p className="icons" onClick={()=>props.history.push('/admin/dash/admins/list')} title='Admin Dashboard'>A</p>:<span></span>}
<p className="icons" onClick={()=>props.history.push('/home/rules/all')} title='Rules'><i class="fas fa-pencil-ruler"></i></p>
<p className="icons"  onClick={()=>props.history.push('/home/whitelistApp')}  title='Whitelist Application'><i class="far fa-file-word"></i></p>
<p className="icons"  onClick={()=>props.history.push('/dashboard/'+Info._id+'/Tickets')}  title='Tickets'><i class="fas fa-poll-h"></i></p>
<p className="icons"  onClick={()=>props.history.push('/home/contactus')} title='Support'><i class="fas fa-question-circle"></i></p>
<p className="icons"  onClick={()=>props.history.push('/dashboard/'+Info._id+'/bugReport')} title='Bug Report'><i class="fas fa-bug"></i></p>
<p className="icons"  onClick={()=>{localStorage.setItem('Token',"")
props.history.push('/')}} title='Logout'><i class="fas fa-sign-out-alt"></i></p>


</div>
<div className="partie2dashboard">
    <div className="partie1indashboard">
        <div className="fromdash color1FA7D7">
<h1 className="fromdash-item-title">Your Whitelist Application</h1>
<p className="fromdash-item-sti">{Info.WtState}</p>

        </div>
        <div className="fromdash color60C2DD">
<h1 className="fromdash-item-title">Your Staff Application</h1>
<p className="fromdash-item-sti">{Info.StaffState}</p>
        </div>
        <div className="fromdash colorFFC009">
        <h1 className="fromdash-item-title1">{Info.BugNum}</h1>
<p className="fromdash-item-sti">Bug Reported</p>
        </div>
        <div className="fromdash colorF86C6D">
        <h1 className="fromdash-item-title1">{Info.TicketsNum}</h1>
<p className="fromdash-item-sti">Opened Ticket</p>
        </div>
    </div>
    <div className="ticketsdashboard">
    <div className="introticketsdashboard">
        <p className="ticketstext">Your Accepted Tickets :</p>
    </div>
    <div className="ticketsall">
       {Tk.map(el=> <div className="oneticket">
        <div  className="logomsp">
        <p className="logomsf">{Info.logo}</p>
        </div>
<p className="message">
    {el.Message}
   </p>
<span className="btnopen" onClick={()=>props.history.push('/dash/bugreport/user/Support/'+el._id+"/"+Info._id)}>Open</span>
        </div>)}
    </div>
</div>
<div className="annpunce">
<div className="introticketsdashboard">
        <p className="ticketstext">Announcement :</p>
    </div>
    <div className="Announcement-all">

    </div>
</div>
</div>
</div>:<div className="main-dashboard loadingcenter">
    
    <img className="loading" src="https://i.imgur.com/gQq4Z7b.gif" alt=""/>
    <p>Loading</p>
    
    </div>}

            </div>
            <Footer/>
        </div>
     );
}
 
export default withRouter(NewDash) ;
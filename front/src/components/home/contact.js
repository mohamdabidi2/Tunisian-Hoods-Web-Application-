import Axios from 'axios';
import React, { useRef, useState } from 'react'
import { withRouter } from 'react-router-dom';
import logo from "../../resourses/thLogo.png"
import Footer from './Footer';
import Header from './Header';

const Contact = (props) => {
    const [FullName, setFullName] = useState("")
    const [DiscordId, setDiscordId] = useState("")
    const [Email, setEmail] = useState("")
    const [Subject, setSubject] = useState("")
    const [Message, setMessage] = useState("")
    const [ERR, setERR] = useState([])
    const verifForm=()=>{
if(FullName&&DiscordId&&Email&&Subject&&Message){
Axios.post("/dashboard/support",{FullName,DiscordID:DiscordId,Email,Subject,Message})
props.history.push("/")

}
else{
    alert("err")
}
    }
    return (<div>
      <Header/>
        <main className="maincontact">
<div className="texts">
<h1 className="contact-title">We would love to hear from you
</h1>
            <p className="contact-intro">Please submit your information and we will get back to you.<br/>
            <span className="subtxt"> Or Tag us  <a target="_blanck" href="https://discord.com/invite/JEJst4ZfRB">Here</a></span></p>
</div>
            
            <div className="contact-parts">
                <div className="contactpart">

                    <div className="input-contact">
                        <input type="text" className="contact-inp" placeholder="Full Name" onChange={(e)=>setFullName(e.target.value)}/>
                        <input type="text" className="contact-inp" placeholder="Discord ID" onChange={(e)=>setDiscordId(e.target.value)}/>
                    </div>

                    <div className="input-contact">
                        <input type="email" className="contact-inp" placeholder="E-mail address" onChange={(e)=>setEmail(e.target.value)}/>
                        <input type="text" className="contact-inp" placeholder="Subject" onChange={(e)=>setSubject(e.target.value)}/>
                    </div>
                    <textarea name="" id="" cols="160" rows="10" placeholder="Your message here" className="text-contact-aria" onChange={(e)=>setMessage(e.target.value)}></textarea>
                    <button className="contact-btn btn btn-danger " onClick={verifForm}>Send Message</button>

                </div>
                <div className="input-contact input-contact2">
<div className="clorff">
    <h1 className="clorff-title">Help</h1>
    <p className="clorff-txt">Need help or have any query? Don't hesitate, you can directly shoot us an email or <span className="subtxt"> Tag us  <a target="_blanck" href="https://discord.com/invite/JEJst4ZfRB">Here</a></span></p>
    <p className="clorff-txt">You can move to FAQs or Discord Server to get more information about our server.</p>
</div>
                </div>


            </div>

        </main>
  <Footer/>
    </div>);
}

export default withRouter(Contact);
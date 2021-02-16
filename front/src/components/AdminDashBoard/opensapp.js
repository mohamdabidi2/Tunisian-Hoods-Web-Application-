
import Axios from 'axios';
import React, { useEffect, useState } from 'react';




import "./admin.css"
import { withRouter } from 'react-router-dom';
const StaffOpenApp = (props) => {
   
    const [StaffApplication, setStaffApplication] = useState([])
    const [CurrentAdmin, setCurrentAdmin] = useState({})

    useEffect(() => {
        Axios.post('/admindashboard/vadminrank',{url:window.location.pathname,Rank:3},{headers:{authToken:localStorage.getItem('Token')}})

        Axios.post('/admindashboard/staffapplications',{},{headers:{authToken:localStorage.getItem('Token')}}).then(
            res => {
                setStaffApplication(res.data)
            }

        )
        Axios.post("/admindashboard/admin",{},{headers:{authToken:localStorage.getItem('Token')}}).then(res=>setCurrentAdmin(res.data))

    }, [])


    const logout = () => {
        localStorage.setItem('user', '')
        props.history.push('/')
    }
    const mdwt=(e)=>{
       

        Axios.post("/admindashboard/staff/application/"+props.match.params.id,{state:e},{headers:{authToken:localStorage.getItem('Token')}})
        props.history.push("/admin/dash/StaffApp/list")
    }
    return (
        <div className="html">
            <div className="fixed-nav sticky-footer bg-dark" id="page-top">

                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
                <p onClick={()=>props.history.push('/dashboard/')} className="navbar-brand" >Tunisian Hoods</p>


                    <button className="navbar-toggler navbar-toggler-right" type="button" dataToggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav navbar-sidenav" id="exampleAccordion">

<li className="nav-item" dataToggle="tooltip" dataPlacement="right" title="Link" >
    <p className="nav-link" href="#">
        <i className="fa fa-fw fa-link"></i>
        <span className="nav-link-text"onClick={()=>props.history.push('/admin/dash/admins/list')}>Admins</span>
    </p>
</li>
<li style={CurrentAdmin.Rank>=5?{display:"flex"}:{display:"none"}} className="nav-item" dataToggle="tooltip" dataPlacement="right" title="Link">
    <p className="nav-link" href="#">
        <i className="fa fa-fw fa-link"></i>
        <span className="nav-link-text" onClick={()=>props.history.push('/admin/dash/admins/list/add')}>Add Admin</span>
    </p>
</li>
<li style={CurrentAdmin.Rank>=4?{display:"flex"}:{display:"none"}} className="nav-item" dataToggle="tooltip" dataPlacement="right" title="Link">
    <p className="nav-link" href="#">
        <i className="fa fa-fw fa-link"></i>
        <span className="nav-link-text" onClick={()=>props.history.push('/admin/dash/rules/list/add')}>Add Rule</span>
    </p>
</li>
<li style={CurrentAdmin.Rank>=3?{display:"flex"}:{display:"none"}} className="nav-item" dataToggle="tooltip" dataPlacement="right" title="Link">
    <p className="nav-link" href="#">
        <i className="fa fa-fw fa-link"></i>
        <span className="nav-link-text" onClick={()=>props.history.push('/admin/dash/StaffApp/list')}>StaffApplication</span>
        
    </p>
</li>
<li style={CurrentAdmin.Rank>=2?{display:"flex"}:{display:"none"}} className="nav-item" dataToggle="tooltip" dataPlacement="right" title="Link">
    <p className="nav-link" href="#">
        <i className="fa fa-fw fa-link"></i>
        <span className="nav-link-text" onClick={()=>props.history.push('/admin/dash/whitlist/list')}>WhiteList Application</span>
    </p>
</li>
<li className="nav-item" style={CurrentAdmin.Rank>=1?{display:"flex"}:{display:"none"}} dataToggle="tooltip" dataPlacement="right" title="Link">
    <p className="nav-link" href="#">
        <i className="fa fa-fw fa-link"></i>
        <span className="nav-link-text" onClick={()=>props.history.push("/admin/dash/SupportMessage/list/add")}>support</span>
    </p>
</li>
<li className="nav-item" style={CurrentAdmin.Rank>=1?{display:"flex"}:{display:"none"}} dataToggle="tooltip" dataPlacement="right" title="Link">
    <p className="nav-link" href="#">
        <i className="fa fa-fw fa-link"></i>
        <span className="nav-link-text" onClick={()=>props.history.push('/admin/dash/tickets/list')}>tickets</span>
    </p>
</li>

</ul>
                        <ul className="navbar-nav sidenav-toggler">
                            <li className="nav-item">
                                <p className="nav-link text-center" id="sidenavToggler">
                                    <i className="fa fa-fw fa-angle-left"></i>
                                </p>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item dropdown">
                                <p className="nav-link dropdown-toggle mr-lg-2" id="messagesDropdown" href="#" dataToggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fa fa-fw fa-envelope"></i>
                                    <span className="d-lg-none">Messages
              <span className="badge badge-pill badge-primary">12 New</span>
                                    </span>
                                    <span className="indicator text-primary d-none d-lg-block">
                                        <i className="fa fa-fw fa-circle"></i>
                                    </span>
                                </p>
                                <div className="dropdown-menu" aria-labelledby="messagesDropdown">
                                    <h6 className="dropdown-header">New Messages:</h6>
                                    <div className="dropdown-divider"></div>
                                    <p className="dropdown-item" href="#">
                                        <strong>David Miller</strong>
                                        <span className="small float-right text-muted">11:21 AM</span>
                                        <div className="dropdown-message small">Hey there! This new version of SB Admin is pretty awesome! These messages clip off when they reach the end of the box so they don't overflow over to the sides!</div>
                                    </p>
                                    <div className="dropdown-divider"></div>
                                    <p className="dropdown-item" href="#">
                                        <strong>Jane Smith</strong>
                                        <span className="small float-right text-muted">11:21 AM</span>
                                        <div className="dropdown-message small">I was wondering if you could meet for an appointment at 3:00 instead of 4:00. Thanks!</div>
                                    </p>
                                    <div className="dropdown-divider"></div>
                                    <p className="dropdown-item" href="#">
                                        <strong>John Doe</strong>
                                        <span className="small float-right text-muted">11:21 AM</span>
                                        <div className="dropdown-message small">I've sent the final files over to you for review. When you're able to sign off of them let me know and we can discuss distribution.</div>
                                    </p>
                                    <div className="dropdown-divider"></div>
                                    <p className="dropdown-item small" href="#">View all messages</p>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <p className="nav-link dropdown-toggle mr-lg-2" id="alertsDropdown" href="#" dataToggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fa fa-fw fa-bell"></i>
                                    <span className="d-lg-none">Alerts
              <span className="badge badge-pill badge-warning">6 New</span>
                                    </span>
                                    <span className="indicator text-warning d-none d-lg-block">
                                        <i className="fa fa-fw fa-circle"></i>
                                    </span>
                                </p>
                                <div className="dropdown-menu" aria-labelledby="alertsDropdown">
                                    <h6 className="dropdown-header">New Alerts:</h6>
                                    <div className="dropdown-divider"></div>
                                    <p className="dropdown-item" href="#">
                                        <span className="text-success">
                                            <strong>
                                                <i className="fa fa-long-arrow-up fa-fw"></i>Status Update</strong>
                                        </span>
                                        <span className="small float-right text-muted">11:21 AM</span>
                                        <div className="dropdown-message small">This is an automated server response message. All systems are online.</div>
                                    </p>
                                    <div className="dropdown-divider"></div>
                                    <p className="dropdown-item" href="#">
                                        <span className="text-danger">
                                            <strong>
                                                <i className="fa fa-long-arrow-down fa-fw"></i>Status Update</strong>
                                        </span>
                                        <span className="small float-right text-muted">11:21 AM</span>
                                        <div className="dropdown-message small">This is an automated server response message. All systems are online.</div>
                                    </p>
                                    <div className="dropdown-divider"></div>
                                    <p className="dropdown-item" href="#">
                                        <span className="text-success">
                                            <strong>
                                                <i className="fa fa-long-arrow-up fa-fw"></i>Status Update</strong>
                                        </span>
                                        <span className="small float-right text-muted">11:21 AM</span>
                                        <div className="dropdown-message small">This is an automated server response message. All systems are online.</div>
                                    </p>
                                    <div className="dropdown-divider"></div>
                                    <p className="dropdown-item small" href="#">View all alerts</p>
                                </div>
                            </li>
                            <li className="nav-item">
                                <form className="form-inline my-2 my-lg-0 mr-lg-2">
                                    <div className="input-group">
                                        <input  className="form-control" type="text" placeholder="Search with Discord Tag" />
                                        <span className="input-group-append">
                                            <button className="btn btn-primary" type="button">
                                                <i className="fa fa-search"></i>
                                            </button>
                                        </span>
                                    </div>
                                </form>
                            </li>
                            <li className="nav-item">
                                <p onClick={logout} className="nav-link" dataToggle="modal" data-target="#exampleModal">
                                    <i className="fa fa-fw fa-sign-out"></i>Logout</p>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="content-wrapper">
                <div className="adminsList">
                        <h1 className="adlidst">Staff Application : {props.match.params.id}</h1>

                    </div>
    <div className="allopenwt">
    {StaffApplication.filter(el=>el._id==props.match.params.id).map(el=>
                <div>
                    <p className="QandA question">Q : Email address
:</p>
                    <p className="QandA answer">A : {el.Q1}</p>
                    <p className="QandA question">Q : Whats your discord name? (Includes your discord ID):</p>
                    <p className="QandA answer">A : {el.Q2}</p>
                    <p className="QandA question">Q : Real Name?</p>
                    <p className="QandA answer">A : {el.Q3}</p>
                    <p className="QandA question">Q : How old are you? (Lying about your age will result in a denied application and a temporary ban):</p>
                    <p className="QandA answer">A : {el.Q4}</p>
                    <p className="QandA question">Q : Steam URL :</p>
                    <p className="QandA answer">A : {el.Q5}</p>
                    <p className="QandA question">Q : Tell us a bit about yourself and where do you live?</p>
                    <p className="QandA answer">A : {el.Q6}</p>
                    <p className="QandA question">Q : How long have you been roleplaying? This includes games other than FiveM. Why do you like to roleplay? Explain in detail.</p>
                    <p className="QandA answer">A : {el.Q7}</p>
                    <p className="QandA question">Q : How long have you been part of the TUNISIAN HOODS?</p>
                    <p className="QandA answer">A : {el.Q8}</p>
                    <p className="QandA question">Q : How would you rate your RP from 1 - 10?</p>
                    <p className="QandA answer">A : {el.Q9}</p>
                    <p className="QandA question">Q : Have you ever been banned?(If you have been banned, why?):</p>
                    <p className="QandA answer">A : {el.Q10}</p>
                    <p className="QandA question">Q : How many warnings do you have on the server?</p>
                    <p className="QandA answer">A : {el.Q11}</p>
                    <p className="QandA question">Q : What do you think about our staff team?</p>
                    <p className="QandA answer">A : {el.Q12}</p>
                    <p className="QandA question">Q : Do you have any past experience as staff? If yes, are you currently staff on another server?</p>
                    <p className="QandA answer">A : {el.Q13}</p>
                    <p className="QandA question">Q : How does the strike system work?</p>
                    <p className="QandA answer">A : {el.Q14}</p>
                    <p className="QandA question">Q : What is one change that you believe that would make TUNISIAN HOODS better?</p>
                    <p className="QandA answer">A : {el.Q15}</p>
                    <p className="QandA question">Q : What can you contribute to TUNISIAN HOODS? Why should we pick you over another applicant?</p>
                    <p className="QandA answer">A : {el.Q16}</p>
                    <p className="QandA question">Q : Why do you believe you should join the staff team?</p>
                    <p className="QandA answer">A : {el.Q17}</p>
                    <p className="QandA question">Q : What is your goal as staff on the server?</p>
                    <p className="QandA answer">A : {el.Q18}</p>
                    <p className="QandA question">Q : If you saw a lot of reports and you are playing RP! what would you do?</p>
                    <p className="QandA answer">A : {el.Q19}</p>
                    <p className="QandA question">Q : If someone was exploding cars, what would their punishment be? Explain in detail.</p>
                    <p className="QandA answer">A : {el.Q20}</p>
                    <p className="QandA question">Q :If someone was threatening members with a DDOS Attack or other form of "Hacking," what would their punishment be? Explain in detail.</p>
                    <p className="QandA answer">A : {el.Q21}</p>
                    <p className="QandA question">Q : If a higher ranking staff member was abusing his powers what would you do? (And why):</p>
                   
                    <p className="QandA answer">A : {el.Q22}</p>
                    <p className="QandA question">Q : If someone was RDMing and they didn’t know what RDM is what would you do? (And why):</p>
                  
                    <p className="QandA answer">A : {el.Q23}</p>


                    <p className="QandA question">Q : If someone misused /ME and /DO.what would you do? (And why):</p>
                  
                  <p className="QandA answer">A : {el.Q24}</p>
                  <p className="QandA question">Q : if a streamer was showing some bugs or illeagal (places/informations) in his stream. what would you do?:</p>
                  
                  <p className="QandA answer">A : {el.Q25}</p>
                  <p className="QandA question">Q : Please explain FailRP and Value Of Life and what the difference is (Detailed)::</p>
                  
                  <p className="QandA answer">A : {el.Q26}</p>
                  <p className="QandA question">Q : Do you acknowledge that changing your discord or forum name during the application process can effect its outcome? (If we can't find you, we cant promote you!):</p>
                  
                  <p className="QandA answer">A : {el.Q27}</p>
                  <p className="QandA question">Q : Do you agree that any internal conversions between the Staff Team must not leave staff-only voice channels, and is strictly prohibited to be recorded?:</p>
                  
                  <p className="QandA answer">A : {el.Q28}</p>
                  <p className="QandA question">Q : Do you agree to not talk about your application to staff members OR civilians?):</p>
                  
                  <p className="QandA answer">A : {el.Q29}</p>
                 

                   
                  <p className="QandA question">Q :Do you agree not to ask ANYONE to view your application?:</p>
                    <p className="QandA answer">A : {el.Q30}</p>
                    <p className="QandA question">Q :If you ask about your application it will be denied and you can be banned from the server. Do you understand?:</p>
                    <p className="QandA answer">A : {el.Q31}</p>
                    <p className="QandA question">Q :Do you understand we can terminate you at any time? :</p>
                    <p className="QandA answer">A : {el.Q32}</p>
                  



                </div>
                
                )}
          
    </div>
    <div style={{display:"flex",justifyContent:"space-around",width:"50%",margin:"20px 25%"}}>
                <button className="btn btn-info" onClick={()=>mdwt("Accepted")}>Accept</button>
                    <button className="btn btn-danger" onClick={()=>mdwt("Rejected")}>Reject</button>

                </div>

                </div>  </div>  </div>
    );
}

export default withRouter(StaffOpenApp);

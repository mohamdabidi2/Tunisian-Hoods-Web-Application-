
import Axios from 'axios';
import React, { useEffect, useState } from 'react';




import "./admin.css"
import { withRouter } from 'react-router-dom';
const WtApp = (props) => {
    const [Whitelist, setWhitelist] = useState([])
    const [UsersList, setUsersList] = useState([])
    const [CurrentAdmin, setCurrentAdmin] = useState({ Role: "owner" })
    const [SearchBar, setSearchBar] = useState("")
    const [SearchBarId, setSearchBarId] = useState("")

    useEffect(() => {
        Axios.post('/admindashboard/vadminrank',{url:window.location.pathname,Rank:2},{headers:{authToken:localStorage.getItem('Token')}})

        Axios.post('/admindashboard/wt/application',{},{headers:{authToken:localStorage.getItem('Token')}}).then(
            res => {
                setWhitelist(res.data)
            }

        )
   
        Axios.post("/admindashboard/admin",{},{headers:{authToken:localStorage.getItem('Token')}}).then(res=>setCurrentAdmin(res.data))

    }, [])


    const logout = () => {
        localStorage.setItem('user', '')
        props.history.push('/')
    }
    const mdwt=(e)=>{
       

        Axios.post("/admindashboard/wt/corr/"+props.match.params.id,{state:e},{headers:{authToken:localStorage.getItem('Token')}})
        props.history.push("/admin/dash/whitlist/list")
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
                                        <input onChange={(e) => setSearchBarId(e.target.value)} className="form-control" type="text" placeholder="Search with Discord Tag" />
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
                        <h1 className="adlidst">Whitelist : {props.match.params.id}</h1>

                    </div>
    <div className="allopenwt">
    {Whitelist.filter(el=>el._id==props.match.params.id).map(el=>
                <div>
                    <p className="QandA question">Q : Discord User Name:</p>
                    <p className="QandA answer">A : {el.DiscordUserName}</p>
                    <p className="QandA question">Q : AGE (IRL):</p>
                    <p className="QandA answer">A : {el.age}</p>
                    <p className="QandA question">Q : Why you choose to join TH Community?</p>
                    <p className="QandA answer">A : {el.joinTH}</p>
                    <p className="QandA question">Q : Do u have a Good MicroPhone?</p>
                    <p className="QandA answer">A : {el.MicroPhone}</p>
                    <p className="QandA question">Q : Do you have an Experience in RP? if Yes in which server have you been playing recently ?</p>
                    <p className="QandA answer">A : {el.ExperienceinRP}</p>
                    <p className="QandA question">Q : What's your character's name?</p>
                    <p className="QandA answer">A : {el.charactername}</p>
                    <p className="QandA question">Q : What's your character's backstory ( matahkich al zatla w mafia be creative ) ?</p>
                    <p className="QandA answer">A : {el.backstory}</p>
                    <p className="QandA question">Q : Your first ambitions in the city</p>
                    <p className="QandA answer">A : {el.firstambitions}</p>
                    <p className="QandA question">Q : What's the meaning of RP (Role Play) ?</p>
                    <p className="QandA answer">A : {el.meaningofRP}</p>
                    <p className="QandA question">Q : What is Powergaming ?</p>
                    <p className="QandA answer">A : {el.Powergaming}</p>
                    <p className="QandA question">Q : What is Metagaming ?</p>
                    <p className="QandA answer">A : {el.Metagaming}</p>
                    <p className="QandA question">Q : What is value of life?</p>
                    <p className="QandA answer">A : {el.vol}</p>
                    <p className="QandA question">Q : What is revenge kill ?</p>
                    <p className="QandA answer">A : {el.revengekill}</p>
                    <p className="QandA question">Q : What is the greenzone ?</p>
                    <p className="QandA answer">A : {el.greenzone}</p>
                    <p className="QandA question">Q : What is the RedZone?</p>
                    <p className="QandA answer">A : {el.RedZone}</p>
                    <p className="QandA question">Q : What is the No Robbery Zone?</p>
                    <p className="QandA answer">A : {el.NoRobberyZone}</p>
                    <p className="QandA question">Q : What is cop baiting ?</p>
                    <p className="QandA answer">A : {el.copbaiting}</p>
                    <p className="QandA question">Q : What is the combat logging?</p>
                    <p className="QandA answer">A : {el.combatlogging}</p>
                    <p className="QandA question">Q : What is the combat Storing?</p>
                    <p className="QandA answer">A : {el.combatStoring}</p>
                    <p className="QandA question">Q : 9adech 3andik l 7a9 men 3abd fi scène?</p>
                    <p className="QandA answer">A : {el.MaxFiScene}</p>
                    <p className="QandA question">Q : What is the purpose of using (/do) and (/me)?</p>
                    <p className="QandA answer">A : {el.doMe}</p>
                    <p className="QandA question">Q : enty ems jetk hala f nord (sahbek kalmek f discord 9allek raw 9atlouni f nord) tla3t fayaktou w 3titou medkit w rjaat l sbitar tekhdm a rouhk .</p>
                    <p className="QandA question">Q : Fails elli sarou f scène:</p>
                    <p className="QandA answer">A : {el.Scene1}</p>
                    <p className="QandA question">Q : Mchit lel cardealer besh teshri karhba chadit saf ki laabed je wehed menteli 9alek eb3ed w bde yaamel fehom enty maajbeteksh el faza rajaat alih saben w kaadto tetleksho bel klem yekhi amal haka jbed switchblade w deghrek dawkhek w hazek baadek mel cardealer taychek f wed enty hatitha f 9albek w kolt ha9i nekhdhou b idi respawnit f sbitar khrajt tool tejri w mchit lel gc kharajt machine pistol w rjaat lel cardealer l9ito ghadi hazit alih sleh w braquito nahitlo switchblade w kol chy l ta7to w dawakhto</p>
                    <p className="QandA question">Q : Fails elli sarou f scène:</p>
                    <p className="QandA answer">A : {el.Scene2}</p>
                    <iframe  className="questionV" width="590" height="516" src="https://www.youtube.com/embed/BVlIMzbzBiQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <p className="QandA question">Q : EL SCENE TFAILET 3LA 5ATER :</p>
                    <p className="QandA answer">A : {el.SceneFAILET}</p>
                    <p className="QandA question">Q : 2- Neftardhou massar 7atta fail lin bde el poursuite !=""&&fana d9i9a mel video normalement toufa el scene? :</p>
                    <p className="QandA answer">A : {el.FailMin}</p>
                  



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

export default withRouter(WtApp);


import Axios from 'axios';
import React, { useEffect, useState } from 'react';




import "./admin.css"
import { withRouter } from 'react-router-dom';
const AddRule = (props) => {
    const [RoleType, setRoleType] = useState("")
    const [Reuless, setReuless] = useState([])
    const [Ruleinput, setRuleinput] = useState('')
    const [CurrentAdmin, setCurrentAdmin] = useState({})
    const [Seee, setSeee] = useState("")
    const [Lag, setLag] = useState("")



    useEffect(() => {
        if(localStorage.getItem('Token')!="")
{
    Axios.post('/admindashboard/vadminrank',{url:window.location.pathname,Rank:4},{headers:{authToken:localStorage.getItem('Token')}})

    Axios.post("/admindashboard/admin",{},{headers:{authToken:localStorage.getItem('Token')}}).then(res=>setCurrentAdmin(res.data))

}
else{
    props.history.push('/log')
}
    }, [])

const addtodatabase=()=>{
if(Ruleinput!=="",Reuless.length>=1){
    let newRule  ={
        UserName: CurrentAdmin.FullName,
        UseRole: CurrentAdmin.Role,
        userPhoto:CurrentAdmin.userPhoto ,
        RuleTitle:Ruleinput ,
        Rules: Reuless.filter(el=>el!==""),
        RoleType: RoleType,
        lag:Lag
    }

    Axios.post('/admindashboard/rule/add',newRule,{headers:{authToken:localStorage.getItem('Token')}}).then(res=>{
        window.location.reload();
    }).catch(error=>props.history.push('/log'))
}
else{
    alert("err")
}
}
    const logout = () => {
        localStorage.setItem('Token', '')
        props.history.push('/')
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
                        <h1 className="adlidst">Add Rule</h1>

                    </div>
                    <div className="ddfzz">
                        <input type="text" placeholder="Title Rules" className="title-rule56" onChange={(e) => setRuleinput(e.target.value)} />

                        <textarea name="" placeholder="Rule" onChange={(e) => setSeee(e.target.value)} className="title-rule56" id="" cols="30" rows="10"></textarea>
                        <p className="ddaeee" onClick={() => setReuless([...Reuless, Seee])}>Add This Rule</p>
                        <select name="" id="" onChange={(e)=>setRoleType(e.target.value)}>
                        {  ["General Rules","Police Rules","Ems Rules","Mort Rp Rules","Gang Rules","Buissness Rules","Streamer Rules","Discrod Rules"].map((el,i)=> <option key={i}  className="category-aa">{el}</option>)}
                        </select>
                        <select name="" onChange={(e) => setLag(e.target.value)} id="">
                            <option value="Arabic">Arabic</option>
                            <option value="English">English</option>
                        </select>

                    </div>


                    <div className="rulestempleparts" >
                        <div className="partie1-temple">
                            <h1 className="admin-name">{CurrentAdmin.FullName}</h1>
                            <p className="adminrank">{CurrentAdmin.Role}</p>
                            <img src={CurrentAdmin.userPhoto} alt="" className="adminphoto" />
                            <p className="admin-ranka">{CurrentAdmin.Role}</p>

                        </div>
                        <div className="partie2-temple">
                            <h1 className="rule-title">{Ruleinput}</h1>
                            <ul className="ruleslist">
                                {Reuless.map(el => <li className="rules-onebyone">{el}</li>)}

                            </ul>

                        </div>

                    </div>
                    <div className="sed"><p className="sed ddaeee" onClick={addtodatabase}>Add To Database</p></div>
                </div>
            </div>
        </div>
    );
}

export default withRouter(AddRule);

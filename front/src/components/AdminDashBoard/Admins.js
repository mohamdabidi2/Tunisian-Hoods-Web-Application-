import Axios from 'axios';
import React, { useEffect, useState } from 'react';




import "./admin.css"
import { withRouter } from 'react-router-dom';
import axios from 'axios';

const Admins = (props) => {
    const [AdminsList, setAdmins] = useState([])
    const [UsersList, setUsersList] = useState([])
    const [CurrentAdmin, setCurrentAdmin] = useState({})
    const [SearchBar, setSearchBar] = useState("")
    const [SearchBarId, setSearchBarId] = useState("")

    useEffect(() => {
        axios.post('/admindashboard/vadminrank',{url:window.location.pathname,Rank:1},{headers:{authToken:localStorage.getItem('Token')}})
       Axios.post('/dashboard/staffaccess').then(
           res=>{
            setAdmins(res.data)
           }
       )
       Axios.post("/admindashboard/admin",{},{headers:{authToken:localStorage.getItem('Token')}}).then(res=>setCurrentAdmin(res.data)).catch(error=>props.history.push('/log'))
    }, [])
    const logout=()=>{
      localStorage.setItem('Token','')
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
      <ul className="navbar-nav ml-auto">
      
        <li className="nav-item">
          <form className="form-inline my-2 my-lg-0 mr-lg-2">
            <div className="input-group">
              <input onChange={(e)=>setSearchBarId(e.target.value)} className="form-control" type="text" placeholder="Search with Discord Tag"/>
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
       <h1 className="adlidst">Admins Data Table</h1>
      
   </div>
    <input type="text" onChange={(e)=>setSearchBar(e.target.value)} className="searchbar25" placeholder="Search with Full Name ..."/>
   <div className="admin-list-table">
   <div className="divWrapper-ad">
<div className="titles-tables">
    <p className="NameAdmin">Name</p>
</div>
<div className="titles-tables">
    <p className="NameAdmin">Email</p>
</div>
<div className="titles-tables">
    <p className="NameAdmin">Discord</p>
</div>
<div className="titles-tables">
    <p className="NameAdmin">Role</p>
</div>
       </div>
       {AdminsList.filter(el=>el.FullName.toUpperCase().includes(SearchBar.toUpperCase())).filter(el=>el.DiscordID.toUpperCase().includes(SearchBarId.toUpperCase())).map(el=>
               <div className="divWrapper-ad">
               <div style={{color:el.color}} className="titles-tables1">
                   <p className="NameAdmin">{el.FullName}</p>
               </div>
               <div style={{color:el.color}} className="titles-tables1">
                   <p className="NameAdmin">{el.Email}</p>
               </div>
               <div style={{color:el.color}} className="titles-tables1">
                   <p className="NameAdmin">{el.DiscordID}</p>
               </div>
               <div style={{color:el.color}} className="titles-tables1">
                   <p className="NameAdmin">{el.Role}</p>
       
               </div>
                      </div>
        )}
   </div>
  </div>
</div>
        </div>
     );
}
 
export default withRouter(Admins);

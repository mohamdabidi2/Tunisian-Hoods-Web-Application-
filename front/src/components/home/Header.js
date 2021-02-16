import axios from 'axios';
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import logo from "../../resourses/thLogo.png"

const Header = (props) => {
    const [isAdmin, setIsAdmin] = useState(false)
    const [user, setUser] = useState({})
    const [IsLoged, setIsLoged] = useState(false)
    useEffect(() => {
if(localStorage.getItem("Token")!=""){
    
    Axios.post('/dashboard/user',{},{headers:{authToken:localStorage.getItem('Token')}}).then(res=>
      {  setIsAdmin(res.data.IsAdmin)
        setUser(res.data)
    setIsLoged(true)    
    }
         
         ).catch(error=>
        {    if(error.response.data==="Invalid Token" || error.response.data==="user not exist"){
            setIsLoged(false)  
                      }}
            )
}
    }, [])
    const logout = () => {
        localStorage.setItem('Token', '')
        props.history.push('/')
    }
    return ( 
        <div className="header-d">
        <header className="header-a  header-rules">
            <div className="headerParts">

            <ul className="menuHeader">
                    <li className="menuheader-item" onClick={()=>props.history.push('/')}>Home</li>
                    <li className="menuheader-item menuheader-item-drop">Forums  
                    <ul className="menuheader-item-menu">

                        <li className="menuheader-item-item fdg"   onClick={()=>props.history.push('/home/staff')}><span className="baraa"><i class="far fa-window-minimize"></i></span><span className="hvr-forward">Staff</span></li>
                      
                  <li className="menuheader-item-item fdg" onClick={()=>props.history.push('/home/rules/all')}><span className="baraa"><i class="far fa-window-minimize"></i></span><span className="hvr-forward">Rules</span></li>
                    <li className="menuheader-item-item fdg"   onClick={()=>props.history.push('/home/contactus')}><span className="baraa"><i class="far fa-window-minimize"></i></span><span className="hvr-forward">Report</span></li>
                     
                      <li className="dropdownMenu ">Applications
                          <ul className="dropp-2">
                          <li className="menuheader-item-item" onClick={()=>props.history.push('/home/StaffApp')}><span className="baraa"><i class="far fa-window-minimize"></i></span><span className="hvr-forward">Staff </span></li>
                        <li className="menuheader-item-item" onClick={()=>props.history.push('/home/whitelistApp')}><span className="baraa"><i class="far fa-window-minimize"></i></span><span className="hvr-forward">Whitelist </span></li>
                          </ul>
                      </li>
                      
                    </ul>
                    
                    </li>
                    <li className="menuheader-item  menuheader-item-drop"><span className="donate" >Store</span>

<ul className="menuheader-item-menu menuheader-item-menu2">
    
<li className="menuheader-item-item " onClick={()=>props.history.push("/home/v2/packs")} ><span className="baraa"><i class="far fa-window-minimize"></i></span><span className="hvr-forward" >Pack Subscription</span></li>
<li className="menuheader-item-item fdg " onClick={()=>props.history.push('/home/merchs')}><span className="baraa"><i class="far fa-window-minimize"></i></span><span className="hvr-forward">Merchs</span> </li>

<li className="menuheader-item-item fdg " onClick={()=>props.history.push('/home/donation')}><span className="baraa"><i class="far fa-window-minimize"></i></span><span className="hvr-forward">Item Shop</span> </li>
<li className="menuheader-item-item fdg " ><span className="baraa"><i class="far fa-window-minimize"></i></span><span className="hvr-forward"><a className="menuheader-item-item" style={{textDecoration:"none",color:"white"}} target="_blanck" href="https://sites.google.com/view/hoodsdealer/accueil"> Car Dealer Shop</a></span> </li>

</ul>
</li>

                </ul>
            </div>

            <div style={IsLoged==true?{marginLeft: "-65px"}:{marginLeft: "15px"}} className="headerParts headerParts2">
                <img onClick={()=>props.history.push('/')} src="https://cdn.discordapp.com/attachments/727169225990471740/796350492422307850/th_logo_new.png"className="header-logo" alt="" />
            </div>
            {localStorage.getItem('Token')===""?  <div className="headerParts headerParts3">
                <p className="exuser">
                    Existing user? <span onClick={()=>props.history.push('/log')} className="signinbn" >Sign In</span>  </p>
                <button className="btnlogin" onClick={()=>props.history.push('/Register')}>Sign Up</button>
            </div>:<ul className='account-header'>
                <li className="btnlogin  menuheader-item-drop" onClick={()=>props.history.push('/dashboard')}> <i class="fas fa-user"></i> <span>Dashboard</span>
               
                </li>
                
                </ul>}
          
        </header>
    </div>
     );
}
 
export default withRouter(Header);
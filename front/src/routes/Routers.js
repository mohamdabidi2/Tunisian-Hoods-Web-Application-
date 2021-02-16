import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom'

import UserDashBoard from '../components/dashboardUser';
import EmailConfirmation from '../components/emailConfermation';
import Donation from '../components/home/Donation';
import Home from '../components/home/home';
import Rules from '../components/home/rules';
import Staff from '../components/home/Staff';
import Contact from '../components/home/contact';
import WhitelistApplication from '../components/home/whitelistApplication';
import Login from '../components/login';
import Register from '../components/register';

import Messanger from '../components/AdminDashBoard/messanger';
import WhitelistResult from '../components/AdminDashBoard/whitelistResult';
import BugReport from '../components/AdminDashBoard/bugReport';
import DashTicket from "../components/AdminDashBoard/tickets"
import Admins from '../components/AdminDashBoard/Admins';
import AddAdmin from '../components/AdminDashBoard/AddAdmin';
import Packs from '../components/home/Packes';
import PackCheckout from '../components/home/packCheckout';
import AddRule from '../components/AdminDashBoard/AddRule';
import Whitelistappadmin from '../components/AdminDashBoard/Whitelistappadmin';
import WtApp from '../components/AdminDashBoard/adminopenwt';
import StaffOpenApp from '../components/AdminDashBoard/opensapp';

import AdminTicket from '../components/AdminDashBoard/TicketsMessagesSupport';
import OpenMessageTicket from '../components/AdminDashBoard/messageopen';
import Supportadmin from '../components/AdminDashBoard/supportadmin';
import OpenSupportMessageTicket from '../components/AdminDashBoard/openadminsupportMessage';

import StaffApp from '../components/home/staffApp';
import StaffApplication from '../components/AdminDashBoard/StaffApplication';
import X404 from '../components/c404';

import Merchs from '../components/home/marchs';
import NewDash from '../components/userNewDashboard';
const Routers = () => {
    return ( 
        <>
        <Router>
<Switch>
            <Route exact path='/log' component={()=><Login/>}/>
            <Route exact path='/home/staff' component={()=><Staff/>}/>
           

            <Route exact path='/home/contactus' component={()=><Contact/>}/>
            <Route exact path='/home/v2/packs' component={()=><Packs/>}/>
            <Route exact path='/home/v2/packs/checkout/:pack' component={()=><PackCheckout/>}/>
            <Route exact path='/home/donation' component={()=><Donation/>}/>
            <Route exact path='/home/whitelistApp' component={()=><WhitelistApplication/>}/>
            <Route exact path='/home/StaffApp' component={()=><StaffApp/>}/>
            <Route exact path='/home/merchs' component={()=><Merchs/>}/>


            <Route exact path='/home/rules/all' component={()=><Rules/>}/>
         



            <Route exact path='/' component={()=><Home/>}/>
            <Route exact path='/admin/dash/admins/list' component={()=><Admins/>}/>
            <Route exact path='/admin/dash/admins/list/add' component={()=><AddAdmin/>}/>
            <Route exact path='/admin/dash/rules/list/add' component={()=><AddRule/>}/>
            <Route exact path='/admin/dash/SupportMessage/list/add' component={()=><Supportadmin/>}/>

            <Route exact path='/admin/dash/whitlist/list' component={()=><Whitelistappadmin/>}/>
            <Route exact path='/admin/dash/open/list/ticket/:id' component={()=><OpenMessageTicket/>}/>
            <Route exact path='/admin/dash/open/list/supportMessage/:id' component={()=><OpenSupportMessageTicket/>}/>
            <Route exact path='/admin/dash/tickets/list' component={()=><AdminTicket/>}/>
            <Route exact path='/admin/dash/StaffApp/list' component={()=><StaffApplication/>}/>

            <Route exact path='/admin/dash/whitlist/list/:id' component={()=><WtApp/>}/>
            <Route exact path='/admin/dash/staffapp/list/:id' component={()=><StaffOpenApp/>}/>
    







            <Route exact path='/confirm' component={()=><EmailConfirmation  />}/>

            <Route exact path='/Register' component={()=><Register/>}/>

       
            <Route exact path='/dash/bugreport/user/Support/:id/:userid' component={()=><Messanger/>}/>
            <Route exact path='/dashboard/:id/whitelistResult' component={()=><WhitelistResult/>}/>
            <Route exact path='/dashboard/:id/bugReport' component={()=><BugReport/>}/>
            <Route exact path='/dashboard/:id/Tickets' component={()=><DashTicket/>}/>
            <Route exact path='/dashboard' component={()=><NewDash/>}/>

            <Route path="*">
        <X404/>
          </Route>

          </Switch>


        </Router>
        </>
     );
}
 
export default Routers;
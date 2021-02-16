import React, { useEffect, useState } from 'react'
import logo from "../../resourses/thLogo.png"

import { withRouter } from 'react-router-dom';
import Axios from 'axios';
import Header from './Header';
import Footer from './Footer';

const Packs = (props) => {
  const [Staff, setStaff] = useState([])

  useEffect(() => {

 
  }, [])
    return ( <div className="">
  <Header/>
<main className="main-staff">
<h1 className="mb-5 h1ll numberstitel sdaee">Pack Subscription</h1>

<div className="intro-to-packs">

<p className="notebien"><span className="warning">Warning:</span> DOES NOT grant you whitelist, you have to go through the whitelist process like everyone else!</p>
<p className="nbo5ra"> takes up to a week (for the addition of the following features)</p>

</div>

<section id="subscr">
    <div className="packsss">
        <img className="imageupdd"className="imageupdd"src="https://i.imgur.com/bZ2b4WD.png" alt=""/>
        <div className="packz">
            <p className="packname packnameGold">
Gold Pack</p>
            <p>60 €</p>
            <p>Certified  <span className="packnameGold">Gold</span> Subscriber! With this you will unlock the following features:</p>
            <ul>
                <li><span className="high">High</span> Priority Queue</li>
                <li>Super Custom Vehicle <span className="high">(upgraded)</span></li>
                <li>Custom Vehicle Plate (any vehicle)</li>
                <li>Character Name Change </li>
                <li>Custom Phone number </li>
                <li> <span className="packnameGold">Gold</span>  Subscriber role in Discord </li>
                <li>Can now change your username in our Discord </li>
                <li>Cool new coloured username for your profile </li>




            </ul>
          
             <p> By purchasing this subscription you are agreeing to receive digital items immediately that can not be refunded.</p>
             <button className="btn colordahh" onClick={()=>props.history.push("/home/v2/packs/checkout/"+"Gold")}>Subscribe Now</button>
      
        </div>
    </div>
    <div className="packsss">
        <img className="imageupdd"src="https://i.imgur.com/AH7MVB5.png" alt=""/>
        <div className="packz">
            <p className="packname packnamePlatinum">Platinum pack</p>
            <p>100 €</p>
            <p>Certified <span className="packnamePlatinum">Platinum</span>  Subscriber! With this you will unlock the following features:</p>
            <ul>
                <li><span className="high">Overlord</span>  Priority Queue (Same as Staff)</li>
                <li>Character Name Change</li>
                <li>Any Custom Vehicule (upgraded + logo wala esmk)</li>
                <li>Custom Phone number</li>
                <li> Custom Vehicle Plate</li>
                <li>Any Custom ped</li>
                <li>Any Custom pet</li>
                <li><span className="packnamePlatinum">Platinum</span> Subscriber role in Discord</li>
                <li>Can now change your username in our Discord</li>
                <li>Cool new coloured username for your profile</li>

            </ul>
            <p> By purchasing this subscription you are agreeing to receive digital items immediately that can not be refunded.</p>
            <button className="btn colordahh "  onClick={()=>props.history.push("/home/v2/packs/checkout/"+"Platinum")}>Subscribe Now</button>
       
        </div>
    </div>   
    <div className="packsss">
        <img className="imageupdd"src="https://i.imgur.com/GiiRvJn.png" alt=""/>
        <div className="packz">
            <p className="packname packnameSilver">Silver Pack</p>
            <p>35 €</p>
            <p>Certified Silver Subscriber! With this you will unlock the following features:</p>
            <ul>
                <li>Medium Priority Queue</li>
                <li>Custom Vehicle (upgraded)</li>
                <li>Character Name Change</li>
                <li>Custom Phone number</li>
                <li>silver Subscriber role in Discord</li>
                <li>Can now change your username in our Discord</li>
                <li>Cool new coloured username for your profile</li>

            </ul>
            <p> By purchasing this subscription you are agreeing to receive digital items immediately that can not be refunded.</p>

            <button className="btn colordahh "  onClick={()=>props.history.push("/home/v2/packs/checkout/"+"Silver")}>Subscribe Now</button>
      
        </div>
    </div>    

</section>
</main>
        <Footer/>
    </div> );
}
 
export default withRouter (Packs);
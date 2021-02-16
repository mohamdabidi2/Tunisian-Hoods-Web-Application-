import React, { useEffect, useState } from 'react'
import logo from "../../resourses/thLogo.png"

import { withRouter } from 'react-router-dom';
import Axios from 'axios';
import Header from './Header';
import Footer from './Footer';

const Staff = (props) => {
  const [Staff, setStaff] = useState([])

  useEffect(() => {
    Axios.post('/dashboard/staffmembers').then(
      res => {
        setStaff(res.data)
      })

  }, [])
  return (<div className="">
 <Header/>
    <main className="main-staff">
      <h1 className="title-staff">Staff Directory</h1>
      <div className="owners">
        <div className="owner">
          <h1 className="ownerrr1">OWNERS</h1>
          <div className="ownerlist">
            {Staff.filter(el => el.Role == "owner").map(el =>
              <div className="ownerr">   {el.userPhoto != "" ? <img src={el.userPhoto} alt="" className="owner-img" /> :<div class="photobyfirst" style={{background:"rgba("+(Math.random()*255|0)+","+ (Math.random()*255|0)+"," +(Math.random()*255|0) +",0.6)"}}><div class="photobyfirst" style={{background:"rgba("+(Math.random()*255|0)+","+ (Math.random()*255|0)+"," +(Math.random()*255|0) +",0.6)"}}><p>{el.FullName[0].toUpperCase()}</p></div></div> }
                <p className="ownername">{el.FullName}</p>
                <p className="adminrank eranl">{el.Role}</p></div>
            )}
          </div>



        </div>
      </div>

      <div className="owners">
        <div className="owner">
          <h1 className="ownerrr1">SUPERVISORS</h1>
          <div className="ownerlist">
            {Staff.filter(el => el.Role == "Supervisor").map(el =>
              <div className="ownerr">   {el.userPhoto != "" ? <img src={el.userPhoto} alt="" className="owner-img" /> : <div class="photobyfirst" style={{background:"rgba("+(Math.random()*255|0)+","+ (Math.random()*255|0)+"," +(Math.random()*255|0) +",0.6)"}}><p>{el.FullName[0].toUpperCase()}</p></div>}
                <p className="ownername">{el.FullName}</p>
                <p className="adminrank eranl">{el.Role}</p></div>
            )}

          </div>



        </div>
      </div>
      <div className="owners">
        <div className="owner">
          <h1 className="ownerrr1">DEVELOPERS</h1>
          <div className="ownerlist">
            {Staff.filter(el => el.Role == "Developer" || el.Role == "Head Developer").map(el =>
              <div className="ownerr">   {el.userPhoto != "" ? <img src={el.userPhoto} alt="" className="owner-img" /> : <div class="photobyfirst" style={{background:"rgba("+(Math.random()*255|0)+","+ (Math.random()*255|0)+"," +(Math.random()*255|0) +",0.6)"}}><p>{el.FullName[0].toUpperCase()}</p></div>}
                <p className="ownername">{el.FullName}</p>
                <p className="adminrank eranl">{el.Role}</p></div>
            )}
          </div>



        </div>
      </div>
      <div className="owners">
        <div className="owner">
          <h1 className="ownerrr1">MANAGEMENT TEAM</h1>
          <div className="ownerlist">
            {Staff.filter(el => el.Role == "Server Manager").map(el =>
              <div className="ownerr">   {el.userPhoto != "" ? <img src={el.userPhoto} alt="" className="owner-img" /> : <div class="photobyfirst" style={{background:"rgba("+(Math.random()*255|0)+","+ (Math.random()*255|0)+"," +(Math.random()*255|0) +",0.6)"}}><p>{el.FullName[0].toUpperCase()}</p></div>}
                <p className="ownername">{el.FullName}</p>
                <p className="adminrank eranl">{el.Role}</p></div>
            )}
          </div>



        </div>
      </div>
      <div className="owners">
        <div className="owner">
          <h1 className="ownerrr1">WHITELISTERS</h1>
          <div className="ownerlist">
            {Staff.filter(el => el.Role == "Whitelister").map(el =>
              <div className="ownerr">   {el.userPhoto != "" ? <img src={el.userPhoto} alt="" className="owner-img" /> : <div class="photobyfirst" style={{background:"rgba("+(Math.random()*255|0)+","+ (Math.random()*255|0)+"," +(Math.random()*255|0) +",0.6)"}}><p>{el.FullName[0].toUpperCase()}</p></div>}
                <p className="ownername">{el.FullName}</p>
                <p className="adminrank eranl">{el.Role}</p></div>
            )}
          </div>



        </div>
      </div>
      <div className="owners">
        <div className="owner">
          <h1 className="ownerrr1">MODERATION TEAM</h1>
          <div className="ownerlist">
            {Staff.filter(el => el.Role == "Server Mod").map(el =>
              <div className="ownerr">   {el.userPhoto != "" ? <img src={el.userPhoto} alt="" className="owner-img" /> : <div class="photobyfirst" style={{background:"rgba("+(Math.random()*255|0)+","+ (Math.random()*255|0)+"," +(Math.random()*255|0) +",0.6)"}}><p>{el.FullName[0].toUpperCase()}</p></div>}
                <p className="ownername">{el.FullName}</p>
                <p className="adminrank eranl">{el.Role}</p></div>
            )}
          </div>



        </div>
      </div>
      <p className="edss">rp.tunisianhoods.com</p>
    </main>
    <Footer/>
  </div>);
}

export default withRouter(Staff);
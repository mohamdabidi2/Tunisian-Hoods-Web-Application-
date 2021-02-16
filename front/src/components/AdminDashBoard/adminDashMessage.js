import axios from 'axios';
import Axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { withRouter } from 'react-router-dom';

import logo from "../../resourses/thLogo.png"
import Footer from '../home/Footer';
import Header from '../home/Header';

import "./admin-cc.css"
const MessagesDash = (props) => {



  

  useEffect(() => {
    Axios.post('/dashboard/verUser').then(res=>console.log(res.data))
    Axios.post("/dashboard/user",{},{headers:{authToken:localStorage.getItem('Token')}}).then(res=>
    setCurrentuserInfo(res.data)
      ).catch(error=>
    {
      if(error.response.data==="Invalid Token" || error.response.data==="user not exist"){
props.history.push('/log')
      }
    }
      )


    Axios.post('/dashboard/staffapp',{},{headers:{authToken:localStorage.getItem('Token')}}).then(
      res => {

        setStaffState(res.data)
 

      })

  }, [])
  const [CurrentuserInfo, setCurrentuserInfo] = useState({})
  const [StaffState, setStaffState] = useState({})
  const [PopUP, setPopUP] = useState(false)
  const [FullName, setFullName] = useState("")
  const [LastName, setLastName] = useState("")
  const [Discord, setDiscord] = useState("")
  const [Position, setPosition] = useState("")
  const [Country, setCountry] = useState("")
  const [Image, setImage] = useState([])

  const [State, setState] = useState("")
  const amers = () => {
    let newUser = {}
    FullName != "" ? newUser = { ...newUser, FullName: FullName } : console.log()
    LastName != "" ? newUser = { ...newUser, LastName: LastName } : console.log()
    Discord != "" ? newUser = { ...newUser, DiscordID: Discord } : console.log()
    Position != "" ? newUser = { ...newUser, Current_position: Position } : console.log()
    Country != "" ? newUser = { ...newUser, Country: Country } : console.log()
    State != "" ? newUser = { ...newUser, State: State } : console.log()

    Axios.post('/dashboard/profile/edit', newUser,{headers:{authToken:localStorage.getItem('Token')}}).then(res => setCurrentuserInfo(res.data[0]))
    window.location.reload();
  

  }



  return (


    <div>


      <div className="allmarginpossible">

        <Header />
        <div className="main-messageadmin">

          <div id="main-container-dash">


            <section className="ssaaa">
              <div className="allEdits">
                <div className="photo-dasss">
                  <div class=" border-right">
                    <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle" src={CurrentuserInfo.userPhoto} width="90" /> <span class="font-weight-bold">{CurrentuserInfo.FullName}</span><span class="text-black-50">{CurrentuserInfo.Email}</span><span>{CurrentuserInfo.Country + " ," + CurrentuserInfo.State} </span></div>
                  </div>

                  <div class=" border-right">
                    <div class="d-flex flex-column align-items-center text-center p-3 py-5"><span class="font-weight-bold">Your Staff App status : {StaffState.State}</span></div>
                  </div>
                </div>
                <div className="inputsss">

                  <div class="d-flex justify-content-between align-items-center mb-3">
                    <h6 class="text-right">Edit your profile</h6>
                  </div>
                  <div class="row mt-2">
                    <div class="divhasm"><label class="labels">Full Name</label><input onChange={(e) => setFullName(e.target.value)} type="text" class="form-control" placeholder="Full Name" /></div>
                  </div>
                  <div class="row ">
                    <div class="divhasm"><label class="labels">Discord ID</label><input onChange={(e) => setDiscord(e.target.value)} type="text" class="form-control" placeholder="Discord ID" /></div>
                    <div class="divhasm"><label class="labels">Current position</label><input onChange={(e) => setPosition(e.target.value)} type="text" class="form-control" placeholder="Current position" /></div>

                  </div>
                  {/* <label for="file" class="label-file bodda">Choisir une image</label>
                  <input id="file" class="input-file" type="file" onChange={(e)=>{setImage(e.target.files)
                 
                  }}></input> */}
                  <div class="row ">
                    <div class="divhasm"><label class="labels">Country</label><input onChange={(e) => setCountry(e.target.value)} type="text" class="form-control" placeholder="country" /></div>
                    <div class="divhasm"><label class="labels">State/Region</label><input onChange={(e) => setState(e.target.value)} type="text" class="form-control" placeholder="state" /></div>
                  </div>
                  <div class=" text-center"><button class="btn btn-primary profile-button" type="button" onClick={amers}>Save Profile</button></div>

                </div>

              </div>
            </section>
          </div>

          <div id="credit">

          </div>
        </div>
      </div>

      <Footer />
  
    </div >
  );
}

export default withRouter(MessagesDash);
import axios from 'axios';
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';




const StaffApplication = (props) => {
    const [StaffState, setStaffState] = useState(false)
        const [NewDate, setNewDate] = useState("")
    
    const [Q1, setQ1] = useState("")
    const [Q2, setQ2] = useState("")
    const [Q3, setQ3] = useState("")
    const [Q4, setQ4] = useState("")
    const [Q5, setQ5] = useState("")
    const [Q6, setQ6] = useState("")
    const [Q7, setQ7] = useState("")
    const [Q8, setQ8] = useState("")
    const [Q9, setQ9] = useState("")
    const [Q10, setQ10] = useState("")
    const [Q11, setQ11] = useState("")
    const [Q12, setQ12] = useState("")
    const [Q13, setQ13] = useState("")
    const [Q14, setQ14] = useState("")
    const [Q15, setQ15] = useState("")
    const [Q16, setQ16] = useState("")
    const [Q17, setQ17] = useState("")
    const [Q18, setQ18] = useState("")
    const [Q19, setQ19] = useState("")
    const [Q20, setQ20] = useState("")
    const [Q21, setQ21] = useState("")
    const [Q22, setQ22] = useState("")
    const [Q23, setQ23] = useState("")
    const [Q24, setQ24] = useState("")
    const [Q25, setQ25] = useState("")
    const [Q26, setQ26] = useState("")
    const [Q27, setQ27] = useState("")
    const [Q28, setQ28] = useState("")
    const [Q29, setQ29] = useState("")
    const [Q30, setQ30] = useState("")
    const [Q31, setQ31] = useState("")
    const [Q32, setQ32] = useState("")
    
    const checkQQ=()=>{
        if(Q1!=""&&Q2!=""&Q3!=""&&Q4!=""&&Q5!=""&&Q6!=""&&Q7!=""&&Q8!=""&&Q9!=""&&Q10!=""&&Q11!=""&&Q12!=""&&Q13!=""&&Q14!=""&&Q15!=""&&Q16!=""&&Q17!=""&&Q18!=""&&Q19!=""&&Q20!=""&&Q21!=""&&Q22!=""&&Q23!=""&&Q24!=""&&Q25!=""&&Q26!=""&&Q27!=""&&Q28!=""&&Q29!=""&&Q30!=""&&Q31!=""&&Q32!=""){
    Axios.post('/dashboard/staffapp',{Q1,Q2,Q3,Q4,Q5,Q6,Q7,Q8,Q9,Q10,Q11,Q12,Q13,Q14,Q15,Q16,Q17,Q18,Q19,Q20,Q21,Q22,Q23,Q24,Q25,Q26,Q27,Q28,Q29,Q30,Q31,Q32},{headers:{authToken:localStorage.getItem('Token')}}).then(res=>{

if(res.data=="Congratulations! Your application has been approved"){
    alert("Congratulations! Your application has been approved")
    props.history.push('/')
}
if(res.data=="Stop spaming requests"){
    alert("Stop spaming requests")
    props.history.push('/')

}
else{
    props.history.push('/')
}



    }).catch(error=>props.history.push("/log"))
     

}
        else{
            alert('All staff application Questions was required , please fill in all the required fields.')
        }
    }
    
    
    
    
    
    
    
    
    
        useEffect(() => {
            let [month, date, year]    = new Date().toLocaleDateString("en-US").split("/")

            if(date==1){
                setStaffState(true)
            }
            else{
                setStaffState(false)
                const oneDay = 24 * 60 * 60 * 1000; 
                const firstDate = new Date();
                let current = new Date();
                current.setMonth(current.getMonth()+1);
                const secondDate = new Date(2021, current.getMonth(), 1);
                const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
           
        setNewDate(diffDays)
            }
      axios.post("/dashboard/isLoged",{},{headers:{authToken:localStorage.getItem('Token')}}).then(res=>
  {      if(res.data.IsLoged==true){

        }
    else{
        props.history.push('/log')
    }}

        ).catch(error=> props.history.push('/log'))
      
    
        }, [])
        return (<div>
    
    
            <Header />
            {StaffState==true?  <main className=" main-staff main-staffapp">
           <div className="introstaff">
           <h1 className="staffapp-title">Staff Application</h1>
         
                <p className="distitle">Please fill this application out with as much detail as possible
    
                Keep in mind,<br/> you may apply only one time
    </p>
                <p className="simplerequired">* Required</p>
           </div>
                <form action="" className='alliphfsdy'>
                    <div className="input-staffapp"><label htmlFor="Email" className="qtion">Email address </label>
                    <input type="text" onChange={(e)=>setQ1(e.target.value)} placeholder=" Your answer " className="anw" required/></div>
                    <div className="input-staffapp"><label htmlFor="Email" className="qtion">Whats your discord name? (Includes your discord ID) </label>
                    <input type="text"onChange={(e)=>setQ2(e.target.value)} placeholder=" Your answer " className="anw" required /></div>
                    <p className="titles">Some Informations</p>
                    <div className="input-staffapp"><label htmlFor="Email" className="qtion">Real Name? </label>
                    <input type="text" placeholder=" Your answer " className="anw" onChange={(e)=>setQ3(e.target.value)} required /></div>
                    <div className="input-staffapp"><label htmlFor="Email" className="qtion">How old are you? (Lying about your age will result in a denied application and a temporary ban): </label>
                    <input type="text" placeholder=" Your answer " className="anw" required onChange={(e)=>setQ4(e.target.value)} /></div>
                    <div className="input-staffapp"><label htmlFor="Email" className="qtion">Steam URL : </label>
                    <input type="text" placeholder=" Your answer " onChange={(e)=>setQ5(e.target.value)} className="anw" required /></div>
                    <div className="input-staffapp"><label htmlFor="Email" className="qtion">Tell us a bit about yourself and where do you live? </label>
                    <input type="text" onChange={(e)=>setQ6(e.target.value)} placeholder=" Your answer " className="anw" required /></div>
                    <div className="input-staffapp"><label htmlFor="Email" className="qtion">How long have you been roleplaying? This includes games other than FiveM. Why do you like to roleplay? Explain in detail. </label>
                    <input type="text" placeholder="  Your answer " onChange={(e)=>setQ7(e.target.value)} className="anw" required /></div>
                    <div className="input-staffapp"><label htmlFor="Email" className="qtion">How long have you been part of the TUNISIAN HOODS? </label>
                    <input type="text" placeholder=" Your answer " className="anw"onChange={(e)=>setQ8(e.target.value)} required /></div>
                    <div className="input-staffapp"><label htmlFor="Email" className="qtion">How would you rate your RP from 1 - 10? </label>
                    <input type="number" min='0' max="10" placeholder=" Your answer " className="anw"onChange={(e)=>setQ9(e.target.value)} required /></div>
                    <div className="input-staffapp"><label htmlFor="Email" className="qtion">Have you ever been banned?(If you have been banned, why?):  </label>
                    <input type="text" placeholder=" Your answer " className="anw"onChange={(e)=>setQ10(e.target.value)} required /></div>
                    <div className="input-staffapp"><label htmlFor="Email" className="qtion">How many warnings do you have on the server?  </label>
                    <input type="text" placeholder=" Your answer " className="anw" required onChange={(e)=>setQ11(e.target.value)}/></div>
                    <div className="input-staffapp"><label htmlFor="Email" className="qtion">What do you think about our staff team?  </label>
                    <input type="text" placeholder=" Your answer " className="anw" required onChange={(e)=>setQ12(e.target.value)}/></div>
                    <div className="input-staffapp"><label htmlFor="Email" className="qtion">Do you have any past experience as staff? If yes, are you currently staff on another server?  </label>
                    <input type="text" placeholder=" Your answer " className="anw" required onChange={(e)=>setQ13(e.target.value)}/></div>
                    <div className="input-staffapp"><label htmlFor="Email" className="qtion">How does the strike system work?  </label>
                    <input type="text" placeholder=" Your answer " className="anw" required onChange={(e)=>setQ14(e.target.value)}/></div>
                    <div className="input-staffapp"><label htmlFor="Email" className="qtion">What is one change that you believe that would make TUNISIAN HOODS better?  </label>
                    <input type="text" placeholder=" Your answer " className="anw" required onChange={(e)=>setQ15(e.target.value)} /></div>
                    <div className="input-staffapp"><label htmlFor="Email" className="qtion">What can you contribute to TUNISIAN HOODS? Why should we pick you over another applicant?  </label>
                    <input type="text" placeholder=" Your answer " className="anw" required onChange={(e)=>setQ16(e.target.value)}/></div>
                    <div className="input-staffapp"><label htmlFor="Email" className="qtion">Why do you believe you should join the staff team? </label>
                    <input type="text" placeholder=" Your answer " className="anw" required onChange={(e)=>setQ17(e.target.value)}/></div>
                    <div className="input-staffapp"><label htmlFor="Email" className="qtion">What is your goal as staff on the server? </label>
                    <input type="text" placeholder=" Your answer " className="anw" required onChange={(e)=>setQ18(e.target.value)}/></div>
                    <p className="titles">Some situations</p>
                    <div className="input-staffapp"><label htmlFor="Email" className="qtion">If you saw a lot of reports and you are playing RP! what would you do? </label>
                    <input type="text" placeholder=" Your answer " className="anw" required onChange={(e)=>setQ19(e.target.value)}/></div>
                    <div className="input-staffapp"><label htmlFor="Email" className="qtion">If someone was exploding cars, what would their punishment be? Explain in detail. </label>
                    <input type="text" placeholder=" Your answer " className="anw" required onChange={(e)=>setQ20(e.target.value)}/></div>
                    <div className="input-staffapp"><label htmlFor="Email" className="qtion">If someone was threatening members with a DDOS Attack or other form of "Hacking," what would their punishment be? Explain in detail. </label>
                    <input type="text" placeholder=" Your answer " className="anw" required onChange={(e)=>setQ21(e.target.value)}/></div>
                    <div className="input-staffapp"><label htmlFor="Email" className="qtion">If a higher ranking staff member was abusing his powers what would you do? (And why): </label>
                    <input type="text" placeholder=" Your answer " className="anw" required onChange={(e)=>setQ22(e.target.value)}/></div>
                    <div className="input-staffapp"><label htmlFor="Email" className="qtion">If someone was RDMing and they didn’t know what RDM is what would you do? (And why): </label>
                    <input type="text" placeholder=" Your answer " className="anw" required onChange={(e)=>setQ23(e.target.value)}/></div>
                    <div className="input-staffapp"><label htmlFor="Email" className="qtion">If someone misused /ME and /DO.what would you do? (And why): </label>
                    <input type="text" placeholder=" Your answer " className="anw" required  onChange={(e)=>setQ24(e.target.value)}/></div>
                    <div className="input-staffapp"><label htmlFor="Email" className="qtion">if a streamer was showing some bugs or illeagal (places/informations) in his stream. what would you do? </label>
                    <input type="text" placeholder=" Your answer " className="anw" required onChange={(e)=>setQ25(e.target.value)}/></div>
                    <div className="input-staffapp"><label htmlFor="Email" className="qtion">Please explain FailRP and Value Of Life and what the difference is (Detailed): </label>
                    <input type="text" placeholder=" Your answer " className="anw" required  onChange={(e)=>setQ26(e.target.value)}/></div>
                    <p className="titles">Last Steps</p>
                    <p className="msss">You have to focus and understand</p>
                    <div className="input-staffapp"><label htmlFor="Email" className="qtion">Do you acknowledge that changing your discord or forum name during the application process can effect its outcome? (If we can't find you, we cant promote you!)  </label>
                    <div className="radiosall"> <div className="radios"><input onChange={(e)=>setQ27("Yes")} type="radio" name="q1" placeholder=" Your answer " className="anw" required /><span>Yes</span></div> <div className="radios"><input  onChange={(e)=>setQ27("No")} type="radio" name="q1" placeholder=" Your answer " className="anw" required /><span>no</span></div></div></div>
                 
                    <div className="input-staffapp"><label htmlFor="Email" className="qtion">Do you agree that any internal conversions between the Staff Team must not leave staff-only voice channels, and is strictly prohibited to be recorded? </label>
                    <div className="radiosall"> <div className="radios"><input type="radio"  onChange={(e)=>setQ28("Agree")} name="q2" placeholder=" Your answer " className="anw" required /><span>Agree</span></div> <div className="radios"><input type="radio"  onChange={(e)=>setQ28("Disagree")} name="q2" placeholder=" Your answer " className="anw" required /><span>Disagree</span></div></div></div>
                   
                    <div className="input-staffapp"><label htmlFor="Email" className="qtion">Do you agree to not talk about your application to staff members OR civilians?  </label>
                    <div className="radiosall"> <div className="radios"><input type="radio" name="q3"onChange={(e)=>setQ29("Agree")} placeholder=" Your answer " className="anw" required /><span>Agree</span></div> <div className="radios"><input type="radio" name="q3" placeholder=" Your answer " className="anw"onChange={(e)=>setQ29("Disagree")} required /><span>Disagree</span></div></div></div>
                    
                    <div className="input-staffapp"><label htmlFor="Email" className="qtion">Do you agree not to ask ANYONE to view your application?  </label>
                    <div className="radiosall"> <div className="radios"><input type="radio" name="q4" placeholder=" Your answer " className="anw" onChange={(e)=>setQ30("Agree")} required /><span>Agree</span></div> <div className="radios"><input onChange={(e)=>setQ30("Disagree")} type="radio" name="q4" placeholder=" Your answer " className="anw" required /><span>Disagree</span></div></div></div>
                   
                    <div className="input-staffapp"><label htmlFor="Email" className="qtion">If you ask about your application it will be denied and you can be banned from the server. Do you understand?   </label>
                    <div className="radiosall"> <div className="radios"><input onChange={(e)=>setQ31("Yes")} type="radio" name="q5" placeholder=" Your answer " className="anw" required /><span>Yes</span></div> <div className="radios"><input type="radio" name="q5" placeholder=" Your answer " className="anw" required onChange={(e)=>setQ31("No")}/><span>No</span></div></div></div>
                   
                    <div className="input-staffapp"><label htmlFor="Email" className="qtion">Do you understand we can terminate you at any time?   </label>
                    <div className="radiosall"> <div className="radios"><input  onChange={(e)=>setQ32("Yes")} type="radio" name="q6" placeholder=" Your answer " className="anw" required /><span>Yes</span></div> <div className="radios"><input type="radio" name="q6" onChange={(e)=>setQ32("No")} placeholder=" Your answer " className="anw" required /><span>no</span></div></div></div>
                    

      
                </form>
        <input type="submit" onClick={checkQQ}  className="anw anw-end" required/>
            </main>:<main className=" main-staff main-staffapp">
           <div className="introstaff">
           <h1 className="staffapp-title">staff application will be accessible in {NewDate} Days <br/> Stay Tuned</h1>
         
           </div>
                
                </main>}
          
    
    
    
            <Footer/>
        </div>);
    }
    
    export default withRouter(StaffApplication);
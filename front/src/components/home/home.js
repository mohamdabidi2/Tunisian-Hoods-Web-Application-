import axios from 'axios';
import React ,{useEffect}from 'react'
import { withRouter } from 'react-router-dom';

import logo from "../../resourses/thLogo.png"
import Footer from './Footer';
import Header from './Header';
const Home = (props) => {
    useEffect(() => {

       if(localStorage.getItem('Token')==null){
        localStorage.setItem('Token',"")
       }
    }, [])
    return (<div>
       <Header/>
        <main>
            <div className="intro">
                <h1 className="introtitle introtitle1">Welcome To</h1>
                <h2 className="introtitle">Tunisian Hoods Roleplay</h2>
                <div className="intro-btn">
                <a target="_blank" href="https://discord.gg/thoods"  ><button className="btnintro2">Join Our Discord</button></a>
                <a  href="fivem://connect/rp.tunisianhoods.com" ><button className="btnintro3">Join Server</button></a>
                
                </div>
            </div>
            <section className="partee1">
                <img src={logo} alt="" id="logopartie2" />
                <h1 className="qan">WHO WE ARE?</h1>
                <p className="partee2des">Tunisian Hoods is a north african server dedicated to serious roleplay , We work with professionalism and ambition in the development of our community which led to loyalty and trust from our members , For a full year we have defeated obstacles and proven to be the best of the best.Welcome to the beginning of a new chapter</p>
                <div className="desss">
                    <div className="activityes">
                        <h3 className="desss-aa">AWARDING MEMBERS</h3>
                        <div className="bardes"></div>
                        <p className="para-aa">our members vary from disciplined players , streamers to well known celebrities and their fort is that they are very responsible , disciplined and sportsmanlike .</p>
                    </div>
                    <div className="activityes">
                        <h3 className="desss-aa">CONSISTENT UPDATE</h3>
                        <div className="bardes"></div>
                        <p className="para-aa">our staff team  are well nurtured developers and we always make sure that the game is always updated to the newest features  .</p>
                    </div>
                    <div className="activityes">
                        <h3 className="desss-aa">FAIR & HONEST LEADERSHIP</h3>
                        <div className="bardes"></div>
                        <p className="para-aa">transparency is our most important policy , and we also like to keep the rules as simple and clear as possible , while being just and severe to make the working of our server smooth</p>
                    </div>
                    <div className="activityes">
                        <h3 className="desss-aa">ACTIVE COMMUNITY</h3>
                        <div className="bardes"></div>
                        <p className="para-aa">our community is very active and distinct , we have an average of 16000 members in our discord which consists mainly on rp players and also other games such as among us  , valorant , fifa , warzone , etc ...</p>
                    </div>
                </div>
            </section>
            <section id="join">
                <h1 id="join-title">HOW TO JOIN TUNISIAN HOODS</h1>
                <div className="parts-to-join">
                    <div className="parts33 parts334" onClick={()=>props.history.push('/Register')}>
                        <p className="icod"><i class="fas fa-user-plus"></i></p>
                        <h4 className="tit-join">REGISTER</h4>
                        <p className="des-joins">Simply <span className="spes"  onClick={()=>props.history.push('/Register')}>Register</span> on our Website and check your email to confirm.</p>

                    </div>
                    <div className="parts33"><i class="fas fa-chevron-right fls"  ></i></div>
                    <div className="parts33 parts334"  onClick={()=>props.history.push('/home/whitelistApp')}>
                        <p className="icod"><i class="fas fa-user-check"></i></p>
                        <h4 className="tit-join">WHITELIST</h4>
                        <p className="des-joins">After you Register, you can introduce yourself to us <span className="spes"  onClick={()=>props.history.push('/home/whitelistApp')}>here</span></p>
                       
                    </div>
                    <div className="parts33"><i class="fas fa-chevron-right fls"></i></div>
                    <div className="parts33 parts334">
                        <p className="icod"><i class="fab fa-discord"></i></p>
                        <h4 className="tit-join">DISCORD</h4>
                        <p className="des-joins">Download <span className="spes" ><a style={{color:"#5253B2"}} target="_blank" href="https://discord.com/">Discord</a></span> and click <span className="spes"><a style={{color:"#5253B2"}} href="https://discord.gg/thoods">here</a></span > once installed</p>

                    </div>
                </div>
            </section>
            <section id="numbers">
                <h1 className="numberstitel">OUR NUMBERS
</h1>
                <h2 className="stitle-numbers">SOME OF <span className="ddz">THE COOL FACTS</span> ABOUT US</h2>
                <div className="allnum">
                <div className="numbersall">
                    <p className="numbersparts">16K</p>
                    <p className="numbersparts2 tit-join">ACTIVE MEMBERS

</p>
                </div>
                <div className="numbersall">
                    <p className="numbersparts">1</p>
                    <p className="numbersparts2 tit-join">YEAR OF GAMING



</p>
                </div>
                <div className="numbersall">
                    <p className="numbersparts">4</p>
                    <p className="numbersparts2 tit-join"> SEASONS



</p>
                </div>
                </div>
                <div className="games">
                    <h1 className="numberstitel">GAMES WE PLAY
</h1>
<div className="rulesplay">
    <div className="partsrulesgames">
    <i class="fas fa-server sal-animate fet" data-sal="fade-in-icon"></i>
    <h3 className="eerule tit-join">OUR SERVERS</h3>
    <p className="text-ss des-joins">We own multiple servers for a varity of games, supported by our community donations.</p>
    </div>
    <div className="partsrulesgames">
    <i class="fas fa-gavel sal-animate fet" data-sal="fade-in-icon"></i>
    <h3 className="eerule tit-join ">OUR RULES</h3>
    <p className="text-ss des-joins">We have a zero tolerance for unfair play, all members must not use hacks, cheats, mods, or glitches.</p>
    </div>
    <div className="partsrulesgames">
    <i class="far fa-clock sal-animate fet" data-sal="fade-in-icon"></i>
    <h3 className="eerule tit-join">YOUR LIFE</h3>
    <p className="text-ss des-joins">Life comes first, you play on the days your available and convenient for you</p>
    </div>
</div>
                </div>
               <div className="fivem">
               <a href="fivem://connect/rp.tunisianhoods.com" class="button_style_greey btnintro3">Join Server</a>
               </div>
            </section>
        </main>
<Footer/>
    </div>);
}

export default withRouter(Home) ;
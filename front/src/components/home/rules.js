import React, { useEffect, useState } from 'react'
import logo from "../../resourses/thLogo.png"

import { withRouter } from 'react-router-dom';
import Axios from 'axios';
import Header from './Header';
import Footer from './Footer';
const Rules = (props) => {
    const [Rules, setRules] = useState([])
    const [keyword, setkeyword] = useState("")
    const [CurrentShow, setCurrentShow] = useState(1)
    const [Lang, setLang] = useState("English")
    useEffect(() => {

        Axios.post("/dashboard/rules").then(res => setRules(res.data))

    }, [])
    const nextpackrules = () => {
        if (CurrentShow + 5 < Rules.length) {

            setCurrentShow(CurrentShow + 5)
        }
        else {
            setCurrentShow(CurrentShow + Rules.length - CurrentShow)
        }
    }
    return (<div className="rulesaal">
      <Header/>
        <main className="menu-meni">
            <div className="language">
                <p className="language-type category-aa" onClick={() => setLang("English")}>English <i class="fas fa-language"></i></p>
                <p className="language-type category-aa" onClick={() => setLang("Arabic")}>Tunisian <i class="fas fa-language"></i></p>
            </div>
            <div className="rules-category">
                <p className="category-aa" onClick={() => setkeyword("")}>All</p>
                {["General Rules", "Police Rules", "Ems Rules", "Mort Rp Rules", "Gang Rules", "Buissness Rules", "Streamer Rules", "Discrod Rules"].map((el, i) => <p key={i} onClick={() => setkeyword(el)} className="category-aa">{el}</p>)}


            </div>
            {Rules.filter(el => el.RoleType.toUpperCase().includes(keyword.toUpperCase())&&el.lag==Lang).map(rule =>
                <div className="rulestempleparts" key={rule._id} style={rule.lag == "Arabic" ? { flexDirection: "row-reverse" } : {}}>
                    <div className="partie1-temple">
                        <h1 className="admin-name">{rule.UserName}</h1>
                        <p className="adminrank">{rule.UseRole}</p>
                        <img src={rule.userPhoto} alt="" className="adminphoto" />
                        <p className="admin-ranka">{rule.UseRole}</p>
                        <p className="postedat">Posted {rule.DateCreation.substr(0,10)}</p>
                    </div>
                    <div className="partie2-temple">
                        <h1 className="rule-title">{rule.RuleTitle}</h1>
                        <ul className="ruleslist">
                            {rule.Rules.map(el => <li className="rules-onebyone">{el}</li>)}

                        </ul>
                    </div>
                </div>)}


            <div className="pagesall">
                <div className="pages">

                    <p className="page" onClick={nextpackrules}>Show more</p>



                </div>
            </div>
        </main>
      <Footer/>
    </div>);
}

export default withRouter(Rules);
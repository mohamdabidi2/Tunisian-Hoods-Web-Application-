
import Axios from 'axios';
import React, { Component } from 'react'

export class Eath extends Component {
    continuetoend = e => {
       
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };
verifWhitelistApp=(e)=>{
    e.preventDefault();
    let wl =this.props.values
    if(
        wl.DiscordUserName!=""&&
        wl.age !=""&&
        wl.joinTH !=""&&
        wl.MicroPhone!=""&&
        wl.ExperienceinRP!=""&&
        wl.charactername!=""&&
        wl.FailMin!=""&&
        wl.firstambitions!=""&&
        wl.meaningofRP!=""&&
        wl.Powergaming!=""&&
        wl.Metagaming!=""&&
        wl.vol!=""&&
        wl.revengekill!=""&&
        wl.greenzone!=""&&
        wl.RedZone!=""&&
        wl.NoRobberyZone!=""&&
        wl.copbaiting!=""&&
        wl.combatlogging!=""&&
        wl.combatStoring!=""&&
        wl.MaxFiScene!=""&&
        wl.doMe!=""&&
        wl.Scene1!=""&&
        wl.Scene2!=""&&
        wl.SceneTFAILET!=""&&
        wl.FailMin!=""
    ){
        Axios.post("/dashboard/whitelistapp",{...wl},{headers:{authToken:localStorage.getItem('Token')}}).then(res=>{
            if(res.data=="stop spaming requests"){
                alert(res.data)
            }
            else{
                this.continuetoend()
            }
        })
        
    }
    else{
        alert("All Whitelist Questions was required , please fill in all the required fields.")
    }


    
}
    render() {
        const { values, inputChange } = this.props;

        return (
            <div className="form-container">
                <h1 className="mb-5 h1ll numberstitel">Whitelist Application</h1>
                <div className="form-group">
                <iframe width="590" height="516" src="https://www.youtube.com/embed/BVlIMzbzBiQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                     </div>
                <div className="form-group">
                    <label htmlFor="SceneFAILET">EL SCENE TFAILET 3LA 5ATER : </label>
                    <input type="text" className="form-control form-control14" name="SceneFAILET" onChange={inputChange('SceneFAILET')} value={values.SceneFAILET} />

                </div>
                <div className="form-group">
                    <label htmlFor="FailMin">2- Neftardhou massar 7atta fail lin bde el poursuite fana d9i9a mel video normalement toufa el scene? :</label>
                    <input type="text" className="form-control form-control14" name="FailMin" onChange={inputChange('FailMin')} value={values.FailMin} />
                    
                </div>
        
                <br />

                <div className="row">
                    <div className="col-6">
                        <button className="btn btn-danger btnlogin" onClick={this.back}><i class="fas fa-arrow-left"></i></button>
                    </div>
                    <div className="col-6 text-right">
                        <button className="btn btn-primary btnlogin" onClick={this.verifWhitelistApp}><i class="fas fa-arrow-right"></i></button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Eath
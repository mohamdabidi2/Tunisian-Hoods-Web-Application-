
import React, { Component } from 'react'

export class Seventh extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values, inputChange } = this.props;

        return (
            <div className="form-container">
                <h1 className="mb-5 h1ll numberstitel">Whitelist Application</h1>
                <div className="form-group">
                    <label htmlFor="Scene1">enty ems jetk hala f nord (sahbek kalmek f discord 9allek raw 9atlouni f nord) tla3t fayaktou w 3titou medkit w rjaat l sbitar tekhdm a rouhk .</label>
                    <label htmlFor="Scene1">Fails elli sarou f scène:</label>
                    <input type="text" className="form-control form-control14" name="Scene1" onChange={inputChange('Scene1')} value={values.Scene1} />
                </div>
                <div className="form-group">
                    <label htmlFor="Scene2">Mchit lel cardealer besh teshri karhba chadit saf ki laabed je wehed menteli 9alek eb3ed w bde yaamel fehom enty maajbeteksh el faza rajaat alih saben w kaadto tetleksho bel klem yekhi amal haka jbed switchblade w deghrek dawkhek w hazek baadek mel cardealer taychek f wed enty hatitha f 9albek w kolt ha9i nekhdhou b idi respawnit f sbitar khrajt tool tejri w mchit lel gc kharajt machine pistol w rjaat lel cardealer l9ito ghadi hazit alih sleh w braquito nahitlo switchblade w kol chy l ta7to w dawakhto </label>
                    <label htmlFor="Scene2">Fails elli sarou f scène: </label>
                    <input type="text" className="form-control form-control14" name="Scene2" onChange={inputChange('Scene2')} value={values.Scene2} />
                </div>
              

                <div className="row">
                    <div className="col-6">
                        <button className="btn btn-danger btnlogin" onClick={this.back}><i class="fas fa-arrow-left"></i></button>
                    </div>
                    <div className="col-6 text-right">
                        <button className="btn btn-primary btnlogin" onClick={this.continue}><i class="fas fa-arrow-right"></i></button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Seventh

import React, { Component } from 'react'

export class Sixth extends Component {
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
                    <label htmlFor="combatlogging">What is the combat logging?</label>
                    <input type="text" className="form-control form-control14" name="combatlogging" onChange={inputChange('combatlogging')} value={values.combatlogging} />
                </div>
                <div className="form-group">
                    <label htmlFor="combatStoring">What is the combat Storing? </label>
                    <input type="text" className="form-control form-control14" name="combatStoring" onChange={inputChange('combatStoring')} value={values.combatStoring} />
                </div>
                <div className="form-group">
                    <label htmlFor="MaxFiScene">9adech 3andik l 7a9 men 3abd fi scène?</label>
                    <input type="text" className="form-control form-control14" name="MaxFiScene" onChange={inputChange('MaxFiScene')} value={values.MaxFiScene} />
                </div>
                <div className="form-group">
                    <label htmlFor="doMe">What is the purpose of using (/do) and (/me)?</label>
                    <input type="text" className="form-control form-control14" name="doMe" onChange={inputChange('doMe')} value={values.doMe} />
                </div>
                <br />

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

export default Sixth
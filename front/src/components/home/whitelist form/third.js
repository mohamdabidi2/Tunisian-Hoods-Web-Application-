
import React, { Component } from 'react'

export class Third extends Component {
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
                    <label htmlFor="firstambitions">Your first ambitions in the city </label>
                    <input type="text" className="form-control form-control14" name="firstambitions" onChange={inputChange('firstambitions')} value={values.firstambitions} />
                </div>
                <div className="form-group">
                    <label htmlFor="meaningofRP">What's the meaning of RP (Role Play) ? </label>
                    <input type="text" className="form-control form-control14" name="meaningofRP" onChange={inputChange('meaningofRP')} value={values.meaningofRP} />
                </div>
                <div className="form-group">
                    <label htmlFor="Powergaming">What is Powergaming ?</label>
                    <input type="text" className="form-control form-control14" name="Powergaming" onChange={inputChange('Powergaming')} value={values.Powergaming} />
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

export default Third
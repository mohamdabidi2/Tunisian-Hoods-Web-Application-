
import React, { Component } from 'react'

export class Forth extends Component {
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
                    <label htmlFor="Metagaming">What is Metagaming ?</label>
                    <input type="text" className="form-control form-control14" name="Metagaming" onChange={inputChange('Metagaming')} value={values.Metagaming} />
                </div>
                <div className="form-group">
                    <label htmlFor="vol">What is value of life? </label>
                    <input type="text" className="form-control form-control14" name="vol" onChange={inputChange('vol')} value={values.vol} />
                </div>
                <div className="form-group">
                    <label htmlFor="revengekill">What is revenge kill ?</label>
                    <input type="text" className="form-control form-control14" name="revengekill" onChange={inputChange('revengekill')} value={values.revengekill} />
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

export default Forth
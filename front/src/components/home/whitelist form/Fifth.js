
import React, { Component } from 'react'

export class Fifth extends Component {
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
                    <label htmlFor="greenzone">What is the greenzone ?</label>
                    <input type="text" className="form-control form-control14" name="greenzone" onChange={inputChange('greenzone')} value={values.greenzone} />
                </div>
                <div className="form-group">
                    <label htmlFor="RedZone">What is the RedZone? </label>
                    <input type="text" className="form-control form-control14" name="RedZone" onChange={inputChange('RedZone')} value={values.RedZone} />
                </div>
                <div className="form-group">
                    <label htmlFor="NoRobberyZone">What is the No Robbery Zone?</label>
                    <input type="text" className="form-control form-control14" name="NoRobberyZone" onChange={inputChange('NoRobberyZone')} value={values.NoRobberyZone} />
                </div>
                <div className="form-group">
                    <label htmlFor="copbaiting">What is cop baiting ?</label>
                    <input type="text" className="form-control form-control14" name="copbaiting" onChange={inputChange('copbaiting')} value={values.copbaiting} />
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

export default Fifth
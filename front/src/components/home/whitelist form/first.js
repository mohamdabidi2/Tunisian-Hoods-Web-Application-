import React, { Component } from 'react'

export class First extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        const { values, inputChange } = this.props;

        return (
            <div className="form-container">
                <h1 className="mb-5 h1ll numberstitel">Whitelist Application</h1>
                <div className="form-group">
                    <label htmlFor="Fullname">Discord User Name: </label>
                    <input type="text" className="form-control form-control14 " name="DiscordUserName" onChange={inputChange('DiscordUserName')} value={values.DiscordUserName} />
                </div>
                <div className="form-group">
                    <label htmlFor="DiscordId">AGE (IRL):</label>
                    <input type="text" className="form-control form-control14" name="age" onChange={inputChange('age')} value={values.age} />
                </div>
                <div className="form-group">
                    <label htmlFor="JoinTH">Why you choose to join TH Community? </label>
                    <input type="text" className="form-control form-control14" name="joinTH" onChange={inputChange('joinTH')} value={values.joinTH} />
                </div>
                <div className="form-group">
                    <label htmlFor="Age">Do u have a Good MicroPhone? </label>
                    <input type="text" className="form-control form-control14" name="MicroPhone" onChange={inputChange('MicroPhone')} value={values.MicroPhone} />
                </div>

                <br />

                <div className="text-right">
                    <button className="btn btn-primary btnlogin" onClick={this.continue}><i class="fas fa-arrow-right"></i></button>
                </div>
            </div>
        )
    }
}

export default First
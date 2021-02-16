import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        const { values, inputChange } = this.props;

        return (
            <div className="form-container">
                <h1 className="mb-5 h1ll numberstitel">whitelist application successfully sended</h1>
                <div className="col-3 text-center">
                        <button className="btn btn-primary btnlogin" onClick={()=>this.props.history.push("/")}>Go Home</button>
                    </div>
            </div>
        )
    }
}

export default withRouter(Confirm)
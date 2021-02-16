
import React, { Component } from 'react';
import Confirm from './whitelist form/confirmation';
import Eath from './whitelist form/eith';
import Fifth from './whitelist form/Fifth';
import First from './whitelist form/first';
import { Forth } from './whitelist form/Forth';
import Second from './whitelist form/second ';
import Seventh from './whitelist form/sivnth';
import Sixth from './whitelist form/sixth';
import Third from './whitelist form/third';
// import AccountSetup from './AccountSetup';
// import SocialProfiles from './SocialProfiles';
// import Confirm from './Confirm';
// import Success from './Success';

export class Form extends Component {
    state = {
        step: 1,
        DiscordUserName: "",
        age: "",
        joinTH: "",
        MicroPhone: "",
        ExperienceinRP: "",
        charactername: "",
        backstory: "",
        firstambitions: "",
        meaningofRP: "",
        Powergaming: "",
        Metagaming: "",
        vol: "",
        revengekill: "",
        greenzone: "",
        RedZone: "",
        NoRobberyZone: "",
        copbaiting: "",
        combatlogging: "",
        combatStoring: "",
        MaxFiScene: "",
        doMe: "",
        Scene1: "",
        Scene2: "",
        SceneFAILET: "",
        FailMin: "",
    };

    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    };

    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    };

    inputChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
     
    };

    render() {
        const { step } = this.state;
        const {        DiscordUserName,
            age ,
            joinTH ,
            MicroPhone,
            ExperienceinRP,
            charactername,
            backstory,
            firstambitions,
            meaningofRP,
            Powergaming,
            Metagaming,
            vol,
            revengekill,
            greenzone,
            RedZone,
            NoRobberyZone,
            copbaiting,
            combatlogging,
            combatStoring,
            MaxFiScene,
            doMe,
            Scene1,
            Scene2,
            SceneFAILET,
            FailMin } = this.state;
        const values = {         DiscordUserName,
            age ,
        joinTH ,
        MicroPhone,
        ExperienceinRP,
        charactername,
        backstory,
        firstambitions,
        meaningofRP,
        Powergaming,
        Metagaming,
        vol,
        revengekill,
        greenzone,
        RedZone,
        NoRobberyZone,
        copbaiting,
        combatlogging,
        combatStoring,
        MaxFiScene,
        doMe,
        Scene1,
        Scene2,
        SceneFAILET,
        FailMin };

        switch (step) {
            case 1:
                return (<First
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    inputChange={this.inputChange}
                    values={values}
                />

                );
            case 2:
                return (
                    <Second
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        inputChange={this.inputChange}
                        values={values}
                    />
                );
            case 3:
                return (
                    <Third
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        inputChange={this.inputChange}
                        values={values}
                    />

                );
            case 4:
                return (
                    <Forth
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        inputChange={this.inputChange}
                        values={values}
                    />

                );
            case 5:
                return (
                    <Fifth
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        inputChange={this.inputChange}
                        values={values}
                    />

                );
            case 6:
                return (
                    <Sixth
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        inputChange={this.inputChange}
                        values={values}
                    />

                );
            case 7:
                return (
                    <Seventh
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        inputChange={this.inputChange}
                        values={values}
                    />

                );
            case 8:
                return (
                    <Eath
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        inputChange={this.inputChange}
                        values={values}
                    />

                );
            case 9:
                return (
                    <Confirm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        inputChange={this.inputChange}
                        values={values}
                    />

                );
            case 9:
                return (
                    <div></div>
                );
        }
    }
}

export default Form
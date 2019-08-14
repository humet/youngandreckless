import React, { Component } from "react"
import FormErrors from "../components/formErrors"
import Router from 'next/router'

class Form extends Component {
    constructor(props){
        super(props)

        this.state = {
            email: "",
            optin: "",
            formErrors: {email: '', optin: ''},
            emailValid: false,
            optinTicked: false,
            formValid: false
        }
    }

    handleUserInput (e) {
        const name = e.target.name;
        const value = e.target.value;
       
        this.setState({[name]: value}, 
                () => { this.validateField(name, value) });
    }

    handleUserCheckbox (e) {
        const name = e.target.name;
        const value = e.target.checked;
       
        this.setState({[name]: value}, 
                () => { this.validateField(name, value) });
    }

    handleButtonClick (e) {
        Router.push('/confirm')
        e.preventDefault()
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let optinTicked = this.state.optinTicked;
      
        switch(fieldName) {
          case 'email':
            emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            fieldValidationErrors.email = emailValid ? '' : 'Please enter a valid email.';
            break;
          case 'optin':
            optinTicked = value == true;
            fieldValidationErrors.optin = optinTicked ? '': 'You must agree to the terms and conditions.';
            break;
          default:
            break;
        }
        this.setState({formErrors: fieldValidationErrors,
                        emailValid: emailValid,
                        optinTicked: optinTicked
                      }, this.validateForm);
      }
      
      validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.optinTicked});
      }

    render(){
        return (
            <form style={{ marginBottom: 20}} onSubmit={this.handleSubmit}>
                <div style={{ textAlign: `left` }}>
                    <div className="emailWrapper">
                        <label style={{ fontWeight: `bold`, textTransform: `uppercase`, display: `block`, width: 160, float: `left` }} htmlFor="email">E-Mail Adresse:</label>
                        <input className="email" style={{ padding: 10, marginBottom: 10}} id="email" type="email" name="email" value={this.state.email} onChange={(event) => this.handleUserInput(event)} />
                    </div>
                    <input name="optin" type="checkbox" id="optin" style={{ margin: `0 10px 0`, float: `left`}} checked={this.state.optin} onChange={(event) => this.handleUserCheckbox(event)} />
                    <label className="emailOptinLabel small" htmlFor="optin" style={{ float: `left`}}>Hinweis: Mit Deiner Einwilligung bestätigst du uns, Dich regelmäßig per E-Mail über Neuerungen und aktuelle Angebote von Young & Reckless informieren zu dürfen. Deine E-Mail Adresse wird nicht an Dritte weitergegeben. Eine Abmeldung ist jederzeit möglich. Die Datenschutzhinweise habe ich zur Kenntnis genommen.</label>
                    <div>
                        <FormErrors formErrors={this.state.formErrors} />
                    </div>
                </div>
                <div>
                    <button onClick={(event) => this.handleButtonClick(event)} disabled={!this.state.formValid}>Jetzt teilnehmen</button>
                </div>
            </form>
        )
    }
}

export default Form;
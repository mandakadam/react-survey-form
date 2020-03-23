import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Success from './Success';
import Confirm from './Confirm';

class UserForm extends Component {
    state = {
        step:1,
        firstName: '',
        lastName:'',
        email:'',
        occupation:'',
        city:'',
        bio:''
    }
    nextStep =()=>{
        const { step } = this.state;
        this.setState({
            step: step+1
        })
    }
    prevStep =()=>{
        const { step } = this.state;
        this.setState({
            step: step-1
        })
    }
    handleChange =  e => {
        this.setState({
           [e.target.name]: e.target.value 
        })
    }
    render() {
        const { step } = this.state;
        const { firstName, lastName, email, occupation, city, bio } = this.state;
        const values =  { firstName, lastName, email, occupation, city, bio } 
        
        switch(step){
            case 1:
                return(<FormUserDetails values={values} handleChange={ this.handleChange } nextStep={this.nextStep} />)
            case 2:
                return(<FormPersonalDetails values={values}  handleChange={ this.handleChange } prevStep={this.prevStep} nextStep={this.nextStep} />)
            case 3:
                return(<Confirm values={values} prevStep={this.prevStep} nextStep={this.nextStep} /> )
            case 4:
                return(<Success />)
            default:
                return(<div></div>)
        }
      
    }
}
export default UserForm 
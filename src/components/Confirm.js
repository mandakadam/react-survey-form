import React from 'react'

const Confirm = ({values, nextStep, prevStep}) => {
    
        return (
            <div>
            <h3>Confirm</h3>
            <div className="form-wrapper">
                <ul>
                    <li>First Name: {values.firstName}</li> 
                    <li>Last Name: {values.lastName}</li>
                    <li>Email: {values.email}</li>
                    <li>Occupation: {values.occupation}</li>
                    <li>City: {values.city}</li>
                    <li>Bio: {values.bio}</li>
                </ul>
                <button className="btn btn-secondary" onClick={()=>prevStep()}>Prev</button>
                <button className="btn" onClick={()=>nextStep()}>Next</button>
            </div>
            </div>
        )
}
export default Confirm
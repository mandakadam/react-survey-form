import React, {useState} from 'react'

const FormPersonalDetails = ({values, handleChange, prevStep, nextStep}) => {
    const [error, setError] = useState("");

        const validateForm = () => {
            if(values.occupation ==="" && values.city ==="" && values.bio ===""){
                setError("Enter Details") 
                return; 
            }
            else if(values.occupation ===""){
                setError("Enter Occupation") 
                return; 
            }
            else if(values.city ===""){
                setError("Enter City") 
                return; 
            }
            else if(values.bio === ""){
                setError("Enter Bio") 
                return; 
            }
            else{
                nextStep();
            }
        }
        return (
            <div>
            <h3>Enter More details</h3>
            <div className="form-wrapper">
                <div className="error"> {error}</div>

                 <div className="form-group">
                    <label>Occupation</label>
                    <input className="form-control" type="text" name="occupation"  value={values.occupation} onChange={(e)=>handleChange(e)} />
                </div>
                <div className="form-group">
                    <label>City</label>
                    <input className="form-control" type="text" name="city"  value={values.city} onChange={(e)=>handleChange(e)} />
                </div>
                <div className="form-group">
                    <label>Bio</label>
                    <input className="form-control" type="text" name="bio"  value={values.bio} onChange={(e)=>handleChange(e)} />
                </div>

                <button className="btn btn-secondary" onClick={()=>prevStep()}>Prev</button>
                <button className="btn" onClick={validateForm}>Next</button>
            </div>
            </div>
        )
}
export default FormPersonalDetails
import React, {useState} from 'react'

const FormUserDetails = ({values, nextStep, handleChange}) => {
        const [error, setError] = useState("")
        
        const validateForm = () => {
            if(values.firstName ==="" && values.lastName ==="" && values.email ===""){
                setError("Enter Details") 
                return; 
            }
            else if(values.firstName ===""){
                setError("Enter First Name") 
                return; 
            }
            else if(values.lastName ===""){
                setError("Enter Last Name") 
                return; 
            }
            else if(values.email === ""){
                setError("Enter email") 
                return; 
            }
            else if(/\S+@\S+\.\S+/.test(values.email) === false){
                setError("Enter valid email") 
                return; 
            }
            else if(/^[A-Za-z\s]+$/.test(values.firstName) === false){
                setError("Enter valid Name") 
                return; 
            }
            else{
                nextStep();
            }
        }

       
        return (
            <div>
            <h3>Enter Basic details</h3>
            <div className="form-wrapper">
                {
                   (error === "") ? "" : <div className="error"> {error}</div>
                }
                <div className="form-group">
                    <label>First Name</label>
                    <input className="form-control" placeholder="Enter First Name" type="text" name="firstName"  value={values.firstName} onChange={(e)=>handleChange(e)} />
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input className="form-control" placeholder="Enter Last Name" type="text" name="lastName" value={values.lastName} onChange={(e)=>handleChange(e)} />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input className="form-control" placeholder="Enter Email" type="text" name="email"  value={values.email} onChange={(e)=>handleChange(e)} />
                </div>
                <button className="btn btn-primary" onClick={validateForm}>Next</button>
            </div>
            </div>
        )
}
export default FormUserDetails
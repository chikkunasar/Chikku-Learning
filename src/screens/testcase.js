import React, {useState} from "react";

const Testcase = () => {

    const [testForm, updateTestForm] = useState({
        nameField: "",
        emailField: "",
        passwordField: "",
    });

    const getInputValue = (event) => {
        updateTestForm({ ...testForm, [event.target.id]: event.target.value })
    }
    const submitForm = () => {
        console.log(testForm);
    }
    return(
        <div> 
            <h2>TestCase</h2>
            <div>
            <label> Enter your Name : </label>
            <input id="nameField" type="text" placeholder="Enter your name" onChange={getInputValue}></input>
            </div>
            <div>
            <label> Enter your Email Id : </label>
            <input id="emailField"  type="text" placeholder="Enter your Email id" onChange={getInputValue}></input>
            </div>
            <div>
                <label>Enter your password : </label>
                <input id="passwordField"type="password" placeholder="Enter your password" onChange={getInputValue}></input>
            </div>
            <div>
                <button onClick={() => submitForm()}>Submit</button>
            </div>

            </div>
    )
    
}

export default Testcase;
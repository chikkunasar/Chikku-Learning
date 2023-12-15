import React, { useState } from "react";


const AccountCreationpage = () => {

    const [accountForm, updateAccountForm] = useState({
        nameField: "",
        emailField: "",
        passwordField: "",
        DOBField: "",
        genderField: "",
        hobbiesField: [],       
        educationField: "",
        addressField: ""

    });

    const getInputValue = (event) => {
        //console.log(event.target.value);
        //dynamicfunctionName({...dynamicVariableName, [event.target.id] : event.target.value })

        if(event.target.id === "hobbiesField"){
            if (event.target.checked){
                accountForm.hobbiesField.push(event.target.value);
            }
            else{
                // remove
                const index = accountForm.hobbiesField.indexOf(event.target.value);
                accountForm.hobbiesField.splice(index, 1);
            }
        }
        else{

        updateAccountForm({ ...accountForm, [event.target.id]: event.target.value })
        }
}

    const submitAccountForm = () => {
        console.log(accountForm);
    }

    return (
        <div>
            <h2> Create a new Account </h2>
            <div>
                <label> Enter your Name :</label>
                <input id="nameField" type="text" placeholder="enter your name" onChange={getInputValue}></input>
            </div>
            <div>
                <label> Enter your Email ID : </label>
                <input id="emailField" type="text" placeholder="Enter your Email" onChange={getInputValue}></input>
            </div>
            <div>
                <label> Enter Your Password : </label>
                <input id="passwordField" type="password" placeholder="Enter your password" onChange={getInputValue}></input>
            </div>
            <div>
                <label>Select your DOB :</label>
                <input id="DOBField" type="date" onChange={getInputValue} />
            </div>
            <div>
                <label> Select your gender </label>
                <input id="genderField" onChange={getInputValue} type="radio" name="gender" value="Male"/>Male
                <input id="genderField" onChange={getInputValue} type="radio" name="gender" value="Female" />Female
                <input id="genderField" onChange={getInputValue} type="radio" name="gender" value="Others"/> Others
            </div>
            <div>
                <label> Select your hobbies </label>
                <input id="hobbiesField" onChange={getInputValue} type="checkbox" value="Cricket" /> Cricket
                <input id="hobbiesField" onChange={getInputValue} type="checkbox" value="Football" /> Football
                <input id="hobbiesField" onChange={getInputValue} type="checkbox" value="Singing" /> Singing
                <input id="hobbiesField" onChange={getInputValue} type="checkbox" value="Travelling" /> Travelling
                <input id="hobbiesField" onChange={getInputValue} type="checkbox" value="Bike Riding" /> Bike Riding
            </div>
            <div>
                <label>Select your Qualification</label>
                <select id="educationField" onChange={getInputValue}>
                    <option>Please choose any one</option>
                    <option>Bachleor of Accounting </option>
                    <option>Bachleor of Commerce </option>
                    <option>Bachleor of Commputer Application </option>
                    <option>Bachleor of Bussiness Administration </option>
                    <option>Bachleor of Enginering </option>
                    <option>Bachleor of History </option>
                </select>
            </div>
            <div>
                <label>Enter your Address: </label>
                <textarea id="addressField" onChange={getInputValue} placeholder="Enter your Address"></textarea>
            </div>
            <div>
                <button onClick={() => submitAccountForm()}>Submit</button>
            </div>
        </div>
    )
}
export default AccountCreationpage;
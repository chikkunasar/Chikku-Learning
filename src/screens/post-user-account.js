import React,{useState} from "react";
import axios from "axios";

const PostUserAccount =() => {
    

    const [registerForm, updateregisterForm] = useState({
        email : "",
        password : ""
    })

    const getValueFromInput =(event) => {
        updateregisterForm({...registerForm,[event.target.id] : event.target.value})

    }

    const submitRegister = () => {

        const url = "https://reqres.in/api/register";

        // console.log(registerForm);

        axios.post(url, registerForm)
        .then( (response) =>{
            console.log(response);
            alert("Succeed");
        })

        .catch( (error) =>{
            console.error(error);
            alert("error : Contact admmin");
        })

    }

    return(
        <div>
            <h2> Post user Account </h2>
            <div>
            <label> Enter Your Email Id </label>
            <input id="email" type="text" placeholder="Enter your Email ID" onChange={getValueFromInput}></input>
            </div>
            <div>
            <label> Enter Your Password </label>
            <input id="password" type="password" placeholder="Enter your Password" onChange={getValueFromInput}></input>
            </div>
            <div>
                <button onClick={submitRegister}> Submit </button>
            </div>
        </div>
    )
}

export default PostUserAccount;
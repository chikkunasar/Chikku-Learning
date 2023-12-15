import React,{useState} from "react";
import axios from "axios";

const LoginApi = () => {

    const [apiForm,updateapiForm] = useState({
      email : "",
      password : ""

    })

    const getValueFromInput = (event) => {
        updateapiForm({...apiForm,[event.target.id] : event.target.value})
    }

    const submitApi = () => {
        // console.log(apiForm)
        const url = "https://reqres.in/api/login";
        axios.post(url, apiForm)
        .then((response) => {
             console.log(response);

        }) 

        .catch((error) => {
            console.error(error);
        }) 

    }
    

    return (
        <div>
            <h2> Login Api </h2>
            <div>
                <label> Enter your Email ID </label>
                <input id="email" type="text" placeholder="Enter your email " onChange={getValueFromInput}></input>
            </div>
            <div>
                <label> Enter your Password </label>
                <input id="password" type="password" placeholder="Enter your Password " onChange={getValueFromInput}></input>
            </div>
            <div>
                <button onClick={submitApi}>Submit</button>
            </div>
        </div>
    )
}

export default LoginApi;

import React,{useState} from "react";
import axios from "axios";

const UnknownList = () => {
   
    const [resknoList, updateResknowList] = useState([]);

    const SeeUsers =() =>{
        const url ="https://reqres.in/api/unknown";

        axios.get(url)
        .then((response)=>{
            updateResknowList(response.data.data);
            // console.log(response);

        })

        .catch((error) => {
            console.error(error);

        })

    }

    let unknownListmap = resknoList.map((value, index) => {
        return(
            <tr key = {index}>
                <td>{value.id}</td>
                <td>{value.name}</td>
                <td>{value.year}</td>
                <td>{value.color}</td>
                <td>{value.pantone_value}</td>

            </tr>
        )

    })

    return(
        <div>
            <h2> Unknown List </h2>
            <button onClick={() => SeeUsers () }> Submit </button>
            <table>
            <thead>

                <tr>
                    <th> ID </th>
                    <th> Name </th>
                    <th> Year </th>
                    <th> Color </th>
                    <th> Value </th>
                </tr>
            </thead>
            <tbody>
                {unknownListmap}
            </tbody>
            </table>
        
        </div>
    )
}

export default UnknownList;
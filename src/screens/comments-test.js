import React, { useState } from "react";
import axios from "axios";

const CommentsList = () => {

    const [commentsPage, updateCommentsPage] = useState([ ]);

    const GetComments = () =>{

    const url = "https://dummyjson.com/comments";


    axios.get(url)
        .then((response) => {
            updateCommentsPage(response.data.comments);
        })

        .catch((error) => {
            console.error(error);
        })

    }

    let commentsClickMap = commentsPage.map((value, index) => {
        return(
        <tr key={index}>
            <td>{value.id }</td>
            <td>{value.body}</td>
            <td>{value.postId}</td>
            <td>{value.user}</td>
            <td>{value.username}</td>

        </tr>

    )

    })


    return (
        <div>
            <h2> Comments List </h2>
            <button onClick={() => GetComments()}> Submit</button>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Body</th>
                        <th>PostID</th>
                        <th>User</th>
                        <th>username</th>

                    </tr>
                </thead>
                <tbody>
                    {commentsClickMap}
                </tbody>
            </table>
        </div>
    )
}

export default CommentsList;
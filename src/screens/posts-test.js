import React,{useState} from "react";
import axios from "axios";

const PostTest = () => {

    const [postContent, updatePostContent] = useState([]);

    const PostsData =() => {
    const url = "https://dummyjson.com/posts";

    axios.get(url)
    .then((response) =>{
        updatePostContent(response.data.posts)
    })

    .catch((error) => {
        console.error(error);
    })

}

    let postTestMap = postContent.map((value, index) =>{
        return(
        <tr key={index}>
            <td>{value.id}</td>
            <td>{value.title}</td>
            <td>{value.body}</td>
            <td>{value.userId}</td>
            <td>{value.tags}</td>
            <td>{value.reactions}</td>
        </tr>
        )
    })

    return(
        <div>
            <h2>Post Test </h2>
            <button onClick={() => PostsData()}>Submit</button>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Body</th>
                        <th>UserID</th>
                        <th>Tags</th>
                        <th>Reactions</th>
                    </tr>
                </thead>
                <tbody>
                    {postTestMap}
                </tbody>
            </table>
        </div>
    )
};

export default PostTest;
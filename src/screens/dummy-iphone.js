import React, { useState } from "react";
import axios from "axios";

const DummyIphone = () => {

    const [iphoneList, updateIphponeList] = useState([]);

    const GetUsers = () => {
        const url = "https://dummyjson.com/products";

        axios.get(url)
            .then((response) => {
                updateIphponeList(response.data.products);
            })

            .catch((error) => {
                console.error(error);
            })

    }

    let dummyIphoneMap = iphoneList.map((value, index) => {
        return (
            <tr key={index}>
                <td>{value.id}</td>
                <td>{value.title}</td>
                <td>{value.description}</td>
                <td>{value.price}</td>
                <td>{value.discountPercentage}</td>
                <td>{value.rating}</td>
                <td>{value.stock}</td>
                <td>{value.brand}</td>
                <td>{value.category}</td>
                <td>
              <img src={value.thumbnail} width="30" alt=""/>
            </td>
            <td>
              <img src={value.images} width="30" alt=""/>
            </td>

            </tr>
        )

    })

    return (
        <div>
            <h2> Dummy iphone </h2>
            <button onClick={() => GetUsers()}> Load Users </button>
            <table>
                <thead>
                    <tr>
                        <th> ID </th>
                        <th> Title </th>
                        <th> Description </th>
                        <th> Price </th>
                        <th> Discount Percentage </th>
                        <th> ratingating </th>
                        <th> Stocks </th>
                        <th> Brand </th>
                        <th> Category </th>
                        <th> Thumbnail </th>
                        <th> images </th>
                    </tr>
                </thead>
                <tbody>
                    {dummyIphoneMap}
                </tbody>
            </table>
        </div>
    )
}

export default DummyIphone;
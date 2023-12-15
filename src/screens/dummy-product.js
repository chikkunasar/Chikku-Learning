import React,{useState} from "react";
import axios from "axios";

const DummyProduct =() => {

    const [productList, updateProductList] =useState ([]);

    const GetProduct = () => {

    const url = "https://dummyjson.com/products";

   

        axios.get(url)
        .then ((response) => {
            updateProductList(response.data.products);

        })

        .catch((error) => {
            console.error(error);
        }
        )



    }

    

    let dummyProductMap = productList.map ((value, index) =>{
        return(
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
                <img src={value.thumbnail} width="100" alt="" /></td>
                <td>
                <img src={value.images}  width="100" alt="" /> </td>

        </tr>
    )

    })
    return(
        <div>
            <h1> Dummy Product </h1>
            <button onClick={() => GetProduct ()}>Submit</button>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>DiscountPercentage</th>
                        <th>Rating</th>
                        <th>Stock</th>
                        <th>Brand</th>
                        <th>Category</th>
                        <th>Thumbnail</th>
                        <th>Images</th>
                    </tr>
                </thead>
                <tbody>
                    {dummyProductMap}
                </tbody>
            </table>
        </div>
    )
}

export default DummyProduct;
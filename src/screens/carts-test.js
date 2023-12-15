import React,{useState} from "react";
import axios from "axios";

const CartList =() => {

    const [productList, updateProductList] = useState([]);


    const SeeProduct = () => {
        const url ="https://dummyjson.com/carts";

        axios.get(url)
        .then((response) =>{
            updateProductList(response.data.carts);
        })

        .catch((error) =>{
            console.error(error);

        })
    }

    let cartListMap = productList.map((value, index) => {
        return(
            <tr key={index}>
                
                <td>{value.id}</td>
                <td>{value.total}</td>
                <td>{value.discountedTotal}</td>
                <td>{value.userId}</td>
                <td>{value.totalProducts}</td>
                <td>{value.totalQuantity}</td>
                {/* <td>{value.discountedPrice}</td> */}
                {/* <td>
                    <img src={value.thumbnail} width="30" alt=""/>
                    </td> */}


            </tr>
        )
    })

    return(
        <div>
            <h2> Cart List </h2>
            <button onClick={() => SeeProduct()}> Submit </button>
            <table>
                <thead>
                    <tr>
                        <th> ID </th>
                        {/* <div>
                            <select id= "ID"> 
                                <option></option> 

                            </select>

                        </div> */}
                        <th> Total </th>
                        <th> Discount </th>
                        <th> UseriD </th>
                        <th> Products </th>
                        <th> Quantity </th>
                        {/* <th> Discprice </th>
                        <th> Thumbnail </th> */}
                    </tr>
                </thead>
                <tbody>
                    {cartListMap}
                </tbody>
            </table>
        </div>
    )
}

export default CartList;
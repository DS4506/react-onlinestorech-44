import "./products.css";
import QuanityPicker from "../quanityPicker";
import { useEffect } from "react";

function Products(props){
    useEffect(function(){
        console.log("Hello im a product");
    },[]);
    return(
        <div className="products">
            <img src={"/images/"+ props.data.image} alt=""></img>
           <h5>{props.data.title}</h5>
           <h5>{props.data.price}</h5>
           <QuanityPicker></QuanityPicker>
           </div>
    );
}

export default Products;
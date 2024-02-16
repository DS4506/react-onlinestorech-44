import "./products.css";
import QuanityPicker from "../quanityPicker";
import { useEffect } from "react";

function Products(props) {
  useEffect(function () {
    console.log("Hello im a product");
  }, []);
  return (
    <div className="products">
      <img src={"/images/" + props.data.image} alt=""></img>
      <h5>{props.data.title}</h5>

      <div className="prices">
        <label className="price">${props.data.price.toFixed(2)}</label>
        <label className="total">${props.data.price.toFixed(2)}</label>
      </div>

      <div className="controls">
        <QuanityPicker></QuanityPicker>
        <button className="btn btn-sm btn-success">Add</button>
      </div>
    </div>
  );
}

export default Products;

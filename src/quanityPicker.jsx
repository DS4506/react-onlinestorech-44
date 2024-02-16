import "./quanityPicker.css";
import { useState } from "react";


function QuanityPicker()
{
    const[quantity,setQuantity] = useState (1);
   

    
    function decrease(){
        if(quantity===1) return;

      let value = quantity - 1;
      setQuantity(value)
        console.log("Decreasing");
    }
   
    function increase(){
        if(quantity===1) return;
        let value = quantity + 1;
        setQuantity(value)
        console.log("Increase");
    }
    return(
        <div className="quantityPicker">
            <button className="btn btn-sm btn-outline-info" disabled ={quantity===1} onClick={decrease}>-</button>
            -
            <label>{quantity}</label>
            <button className="btn btn-sm btn-outline-info" onClick={increase}>+</button>            
        </div>
    );

}

export default QuanityPicker;
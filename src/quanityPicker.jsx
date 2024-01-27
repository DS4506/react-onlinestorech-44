import "./quanityPicker.css";
import { useState } from "react";


function QuanityPicker()
{
    function decrease(){
        console.log("Decreasing");
    }
    //create the increase function

    function increase(){
        console.log("Increase");
    }
    return(
        <div classname="quanityPicker">
            <button onClick={decrease}>-</button>
            <label>1</label>
            <button onClick={increase}>+</button>
        </div>
    );

}

export default QuanityPicker;
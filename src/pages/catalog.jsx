import Products from "../components/products";
import "./catalog.css";
import { useEffect,useState } from "react";
import DataService from "../services/dataService";

function Catalog(){


    const [productState,setProducts] = useState ([]);
    useEffect(function (){
        console.log("componet is loaded");
        loadCatalog();
    },[]);

    function loadCatalog(){

        let service = new DataService();
        let products = service.getProducts();
        setProducts(products);
        console.log(products);

    }

    return(
        <div>
    <h1>Here look at my{productState.length} amazing products</h1>
    
    {productState.map(productArrow => <Products data={productArrow}></Products>)}
    
    </div>
    );
}
export default Catalog;
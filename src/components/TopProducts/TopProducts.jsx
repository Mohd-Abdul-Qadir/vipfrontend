import { useEffect } from "react";
import { top_products } from "../../db";
import Card from "../Card/Card";
import "./TopProducts.css"

export default function TopProducts() {


    return (
        <div style={{padding:"50px 10px",textAlign:'center'}}>
           <h1>Top Products</h1>
           <div style={{marginTop:50}}></div>
           <div className="top-products">
            {top_products.map((v,k)=>{
                return (<>
                    <Card product={v} key={k}/>
                </>)
            })}
           </div>
        </div>
    )
}
import { useParams } from "react-router-dom"
import { products } from "../../db";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";
import "./ProductList.css"
import Appbar from '../Header/Appbar'

export default function ProductList() {
    const {category} = useParams();

    return <>
    <Appbar/>
    <div style={{padding:"100px 10px",textAlign:'center'}}>
           <h1>{category}</h1>
           <div className="product-list" >
           {products.filter((v)=>v.category==category).map((v,k)=>{
                return <>
                    <Card product={v}/>
                </>
            })}
           </div>
        </div>
    <Footer />
    </>
}
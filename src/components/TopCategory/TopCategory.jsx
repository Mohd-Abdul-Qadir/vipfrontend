import { top_categories } from "../../db";
import Card from "../Card/Card";
import FlipCard from "../FlipCard/FlipCard";

export default function TopCategory() {
    
    return (
        <div style={{padding:"50px 10px",textAlign:'center'}}>
           <h1>Top Category</h1>
           <div className="top-category">
            {top_categories.map((v,k)=>{
                return (<>
                    <FlipCard category={v} key={k}/>
                </>)
            })}
           </div>
        </div>
    )
}
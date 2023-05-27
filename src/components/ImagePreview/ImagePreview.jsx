import { useState } from "react";
import "./ImagePreview.css"

export default function ImagePreview({images}) {
  
    const [state,setState] = useState({image: images[0]});

    return <>
        <div className="image-preview-container">
            <div className="image-list">
                {images.map((v,k)=>{
                    return <>
                        <img src={v} key={k} onClick={()=>setState({image:v})}></img>
                    </>
                })}
            </div>
            <div className="image-preview">
                <img src={state.image}></img>
            </div>
        </div>
    </>
}
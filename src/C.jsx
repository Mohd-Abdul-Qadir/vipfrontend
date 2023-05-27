import { useLayoutEffect } from "react"
import { useState } from "react"
import { useMemo } from "react"
import { useEffect } from "react"
import { useContext } from "react"
import { MyContext } from "./Temp"

export default function C() {
    const [state,setState] = useState(0)
    const [value,setValue] = useState(-1);

    const hugeCalc = useMemo(()=>{
            console.log("CALLED");
            return (
                <>
                    <h1>{value}</h1>
                </>
            );
    },[value])

    return <>
        {state}
        <button onClick={()=>setValue(value+1)}>click</button>
        <br />
        {hugeCalc}
    </>
}
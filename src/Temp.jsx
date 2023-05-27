import { createContext } from "react";
import A from "./A"

const MyContext = createContext(0);
function Temp ()  {

  console.log("Parent")

  return (
    <>
      <MyContext.Provider value={10}>
        <A />    
      </MyContext.Provider>
    </>
  );
};

export default Temp;
export {MyContext};
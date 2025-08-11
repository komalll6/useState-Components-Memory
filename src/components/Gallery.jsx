import React from "react"; 
import { sculptureList } from "../data/data";

export default function Gallery(){
    // let index = 0;
    const [index, setIndex] = React.useState(0);             // jitni bar instance create hoga uska alg he seperate variable create hoga 
    const [details, setDetails] = React.useState(false);     // these state variable that is---- Isolated and private to that component only.

    function handleClick(){
        // setIndex = index + 1;
        setIndex(index + 1)
    }

    function AnotherhandleClick(){
       setDetails(! details)
    }
    
    let sculpture = sculptureList[index];

    return(
        <>
        <button onClick={handleClick}>Next</button>
        <h2>
            <i>{sculpture.name}</i> by
              : {sculpture.artist}
        </h2>
        <h3>
            ({index + 1} of {sculptureList.length})
        </h3>

        <img src={sculpture.url} alt={sculpture.alt} /> <br></br>

        <button onClick={AnotherhandleClick}>{details ? "Hide" : "Show"}Details</button>
        
        {details && <p>{sculpture.description}</p>}
        {details && <p>{sculpture.year}</p>}
        </>
    )
}
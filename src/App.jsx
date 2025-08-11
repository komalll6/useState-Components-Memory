// import { useState } from "react"

import Gallery from "./components/Gallery"

// function App() {

//   const  [count, setCount] = useState(0)

//   function handleClick(){
//     setCount(count + 1)
//   }
//   return(
//     <div style={{background:"grey", height:"30px"}}>
    
//     <ul style={{listStyle:"none", display:"flex", gap:"10px", marginTop:"10px", paddingTop:"5px", cursor:"pointer"}}>
//       <li>Home</li>
//       <li>Wishlist{count}</li>
//       <li>Cart</li>
//     </ul>

//     <button onClick={handleClick}>count: {count}</button>

//   </div>
//   )
// }


function App(){
  return(
    <div>
    <Gallery/>
    <h3>---------------------------------------------------------------</h3>
    <Gallery/>
    </div>
  )
}

export default App
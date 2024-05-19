import "./App.css";
import Calc from './calc'
import { useState ,createContext} from "react";
export const Appcontext=createContext(null);
function Header({prod}) {
 
  const [count,setCount]=useState(0)
  const[price,setPrice]=useState(prod.price)
  const quantity=()=>{
     setCount(count+1)
     setPrice(price+prod.price)
  }
  const lessqan=()=>{
   if(count>0){
    setCount(count-1)
    setPrice(price-prod.price)

   }
     
  }
  return (
    <>
      <div className="row">
        <div className="col-1">
          <img 
            style={{ width: "100%" ,backgroundColor:"#f0f0f0"}}
            src={prod.image}
          ></img>
        </div>
        <div className="col-2">
          <h2>{prod.title}</h2>
          <h5>Details & Core</h5>
          <p>{prod.description}</p>
          <h5>Sustainability</h5>
        </div>
        <div className="col-3">
         <div style={{marginTop:"20px",display: "flex"}}>
          <button type="button" className="btn btn-success"  onClick={quantity}>Add</button>
          <h4  style={{marginLeft:"5px"}}>→ {count}</h4>
          </div>
        </div>
        <div className="col-4">
          <h3>${price}</h3>
          <button type="button" className="btn btn-danger" style={{backgroundColor:"white"}} onClick={lessqan}>Remove from Cart</button>
        </div>
        <Appcontext.Provider value={{price,setPrice}}>
          <Calc/>
        </Appcontext.Provider>
     </div>
    </>
  );
}
export default Header;


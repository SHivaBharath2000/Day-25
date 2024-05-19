import "./App.css";
import { useContext } from "react";
import { Appcontext } from "./product";
const Calc = () => {
  const{price}=useContext(Appcontext)
  return (
    <>
      <div className="contain">
        <div className="labels">
          <p>SUBTOTAL</p>
          <p>SHIPPING</p>
          <p style={{marginTop: "100%"}}>TOTAL</p>
        </div>
        <div className="values">
          <p style={{fontSize:"30px"}}> ${price}</p>
          <p>FREE</p>
          <p style={{marginTop: "144%" ,fontSize:"30px"}}>${price}</p>
         
        </div>
       
      </div>
    </>
  );
};
export default Calc;

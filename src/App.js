import "./styles.css";
import BillPrice from "./components/BillPrice";
import ServiceRate from "./components/ServiceRate";
import { useState } from "react";
export default function App() {
  const [billPrice, setBillPrice] = useState();
  const [rate, setRate] = useState()
  function handleChange(e) {
    setBillPrice(e.target.value)
  }
  return (
    <div className="App">
      <BillPrice billPrice={billPrice}  handleChange={handleChange} />
      <ServiceRate />
      { billPrice && 
      <div className="output">
       <p>You Pay {billPrice}$</p>
      </div>
}
    </div>
  );
}

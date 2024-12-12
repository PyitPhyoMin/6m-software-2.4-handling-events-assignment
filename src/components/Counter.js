import { useState } from "react";
import Button from "./Button";
import PriceInput from "./PriceInput";

function Counter() {
  const [count, setCount] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [price, setPrice] = useState("");

  const productName = "Power Drinks";

  const handlePlus = () => {
    setCount((prevCount) => {
      let count = prevCount + 1;
      if (count >= 5) {
        setDiscount(20);
      }
      return count;
    });
  };

  const handleMinus = () => {
    setCount((prevCount) => {
      let count = prevCount - 1;
      if (count > 0) {
        if (count < 5) {
          setDiscount(0);
        }
        return count;
      } else {
        return 0;
      }
    });
  };

  function resetNumber() {
    setCount(0);
    setDiscount(0);
  }
  //Handle for Price Input Change to set the value of the price.[PhyoMin]
  function handlePriceInputChange(value) {
    setPrice(value);
  }

  function clearInputPrice() {
    setPrice("");
  }

  return (
    <>
      <h1>{productName}</h1>
      <div>
        <Button onClick={handleMinus} label="-" />
        <span>{count}</span>
        <Button onClick={handlePlus} label="+" />
      </div>
      <button onClick={resetNumber}>Reset</button>
      <hr></hr>
      <h2>{`Discount: ${discount}%`}</h2>
      <h3>{`$ ${price}`} each</h3>
      <PriceInput
        value={price}
        label="Set Product Price:"
        onChange={handlePriceInputChange}
      />
      <button className="clearPrice" onClick={clearInputPrice}>
        Clear Set Price
      </button>
    </>
  );
}
export default Counter;

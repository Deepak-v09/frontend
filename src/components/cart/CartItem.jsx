import React from "react";
import Buttons from "../ui/Buttons";

function CartItem(props) {
  return (
    <div className="cartItem">
      <div>
        <h4>{props.title}</h4>
        <img src={props.img} alt="Item" />
      </div>

      <div>
        <Buttons onClick={props.decrement} name="-" size="lg" />
        <p>{props.value}</p>
        <Buttons onClick={props.increment} name="+" />
      </div>
    </div>
  );
}

export default CartItem;

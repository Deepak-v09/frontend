import React from "react";

function CartItem(props) {
  return (
    <div className="cartItem">
      <div>
        <h4>{props.title}</h4>
        <img src={props.img} alt="Item" />
      </div>

      <div>
        <button onClick={props.decrement}>-</button>
        {/* <input type="placeholder" readOnly value={props.value} /> */}
        <p>{props.value}</p>
        <button onClick={props.increment}>+</button>
      </div>
    </div>
  );
}

export default CartItem;

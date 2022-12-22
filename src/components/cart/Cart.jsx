import React from "react";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { order_actions } from "../../redux/order_slice";
import Buttons from "../ui/Buttons";

function Cart() {
  const dispatch = useDispatch();
  const CartData = useSelector((state) => state.order_slice.cart);
  const CartPrice = useSelector((state) => state.order_slice.price);

  return (
    <section className="cart">
      <main>
        {CartData.map((cart) => {
          return (
            <CartItem
              key={cart.itemNum}
              title={cart.title}
              img={cart.burgerSrc}
              value={cart.quantity}
              increment={() =>
                dispatch(order_actions.IncreaseQuantity({ id: cart.itemNum }))
              }
              decrement={() =>
                dispatch(order_actions.DecreaseQuantity({ id: cart.itemNum }))
              }
            />
          );
        })}
        <article>
          <div>
            <h4>Sub Total</h4>
            <p>₹{CartPrice}</p>
          </div>
          <div>
            <h4>Tax</h4>
            <p>₹{CartPrice * 0.18}</p>
          </div>
          <div>
            <h4>Shipping Charges</h4>
            <p>₹{40}</p>
          </div>
          <div>
            <h4>Total</h4>
            <p>₹{CartPrice + CartPrice * 0.18 + 40}</p>
          </div>
        </article>
        <Buttons link="/products" name="Add More Products" />
        <Buttons link="/shipping" name="Checkout" />
      </main>
    </section>
  );
}

export default Cart;

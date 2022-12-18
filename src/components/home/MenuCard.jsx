import React from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { order_actions } from "../../redux/order_slice";
import { Link } from "react-router-dom";
const MenuCard = (props) => {
  const dispatch = useDispatch();
  return (
    <motion.div
      className="menuCard"
      initial={{
        x: "-100%",
        opacity: 0,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      transition={{ delay: props.delay }}
    >
      <div>Item {props.itemNum}</div>
      <main>
        <img src={props.burgerSrc} alt={props.itemNum} />

        <h5>₹{props.price}</h5>

        <p>{props.title}</p>

        <Link to="/cart">
          <button
            onClick={() => {
              dispatch(order_actions.AddProduct(props));
            }}
          >
            Buy Now
          </button>
        </Link>
      </main>
    </motion.div>
  );
};

export default MenuCard;

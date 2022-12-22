import React, { useRef } from "react";
import { motion } from "framer-motion";
import Button from "../ui/Buttons";
function Contact() {
  const nameRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const descRef = useRef();
  function AddProdHandler(event) {
    event.preventDefault();
    const prod = {
      itemNum: 100 * Math.random() + 100,
      burgerSrc: imageRef.current.value,
      price: priceRef.current.value,
      title: nameRef.current.value,
    };
    // serverPush(prod)
    // dispatch(prod_actions.AddNewProduct(prod));
  }
  return (
    <section className="contact">
      <motion.form
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        onSubmit={AddProdHandler}
      >
        <h2>Add New Products</h2>
        <input type="text" placeholder="Product Name" ref={nameRef} />
        <input type="number" placeholder="Product Price" ref={priceRef} />
        <input type="input" placeholder="Add Product Image" ref={imageRef} />
        <textarea
          placeholder="Product Description"
          cols="30"
          rows="10"
          ref={descRef}
        ></textarea>
        <Button type="submit" name="Add" />
      </motion.form>
      <motion.div
        className="formBorder"
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <motion.div
          initial={{ y: "-100%", x: "50%", opacity: 0 }}
          animate={{ y: "-50%", x: "50%", opacity: 1 }}
          transition={{ delay: 1 }}
        ></motion.div>
      </motion.div>
    </section>
  );
}

export default Contact;

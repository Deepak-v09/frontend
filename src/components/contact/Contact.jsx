import React from "react";
import { motion } from "framer-motion";
import burger from "../../assets/burger2.png";
import Input from "../ui/Input";

function Contact() {
  return (
    <section className="contact">
      <motion.form
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h2>Contact Us</h2>
        <Input type="text" placeholder="Name" />
        <Input type="email" placeholder="Email" />
        <textarea placeholder="Message.." cols="30" rows="10"></textarea>
        <button type="submit">Send</button>
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
        >
          <img src={burger} alt="burger" />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Contact;

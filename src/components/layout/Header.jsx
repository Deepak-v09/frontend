import React, { useState } from "react";
import { IoFastFoodOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FiShoppingCart, FiLogIn } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { motion } from "framer-motion";

function Header({ isAuthenticated = false }) {
  const [HighLight, setHighLight] = useState("home");
  const active = { color: "#9c003c", fontSize: "1.25rem", fontWeight: "700" };
  return (
    <nav>
      <motion.div
        initial={{ x: "-100%" }}
        whileInView={{ x: 0 }}
        exit={{ opacity: 1 }}
      >
        <Link to="/" style={{ transform: "scale(2)" }}>
          <IoFastFoodOutline />
        </Link>
      </motion.div>
      <div>
        <Link to="/">
          <p
            style={HighLight === "home" ? active : {}}
            onClick={() => setHighLight("home")}
          >
            Home{" "}
          </p>
        </Link>
        <Link to="/products">
          <p
            style={HighLight === "products" ? active : {}}
            onClick={() => setHighLight("products")}
          >
            Products{" "}
          </p>
        </Link>
        <Link to="/contact">
          <p
            style={HighLight === "contact" ? active : {}}
            onClick={() => setHighLight("contact")}
          >
            Contact{" "}
          </p>
        </Link>
        <Link to="/about">
          <p
            onClick={() => setHighLight("about")}
            style={HighLight === "about" ? active : {}}
          >
            About{" "}
          </p>
        </Link>
        <Link to="/cart">
          <p
            style={HighLight === "cart" ? active : {}}
            onClick={() => setHighLight("cart")}
          >
            <FiShoppingCart />{" "}
          </p>
        </Link>
        <Link to={isAuthenticated ? "/me" : "/login"}>
          <p
            style={HighLight === "me" ? active : {}}
            onClick={() => setHighLight("me")}
          >
            {isAuthenticated ? <FaUser /> : <FiLogIn />}
          </p>
        </Link>
      </div>
    </nav>
  );
}

export default Header;

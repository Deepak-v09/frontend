import React from "react";
import { motion } from "framer-motion";
import Founder from "./Founder";
import Menu from "./Menu";

function Home() {
  const option = {
    initial: { x: "-100%", opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
  };
  return (
    <>
      <section className="home">
        <div>
          <motion.h1 {...option}>Btech Burger Wala</motion.h1>
          <motion.p {...option} transition={{ delay: 0.4 }}>
            Hungry? let's meet up.
          </motion.p>
        </div>
        <motion.a
          href="#menu"
          initial={{ y: "-100%", opacity: 0 }}
          whileInView={{ y: "0", opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Explore Menu
        </motion.a>
      </section>
      <Founder />
      <Menu />
    </>
  );
}

export default Home;

import React from "react";
import MenuCard from "./MenuCard";
import { useSelector } from "react-redux";

function Menu() {
  const prodData = useSelector((state) => state.prod_slice.products);
  return (
    <section id="menu">
      <h1>MENU</h1>
      <div>
        {prodData.map((prod, index) => {
          return (
            <MenuCard
              key={prod.itemNum}
              itemNum={prod.itemNum}
              burgerSrc={prod.burgerSrc}
              price={prod.price}
              title={prod.title}
              delay={0.1 * index}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Menu;

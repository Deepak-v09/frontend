import React from "react";
import MenuCard from "../home/MenuCard";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";
import { Link } from "react-router-dom";
import Buttons from "../ui/Buttons";

function Menu() {
  const isAdmin = true;
  return (
    <section id="menu">
      <h1>MENU</h1>
      <div>
        <MenuCard
          itemNum={1}
          burgerSrc={burger1}
          price={200}
          title="Veg Cheese Burger"
          delay={0}
        />

        <MenuCard
          itemNum={2}
          burgerSrc={burger2}
          price={500}
          title="Chicken Burger"
          delay={0}
        />

        <MenuCard
          itemNum={3}
          burgerSrc={burger3}
          price={800}
          title="Cheese Burger with French Fries"
          delay={0}
        />
      </div>
      {isAdmin && (
        <Link to="/add-new-products">
          <Buttons name="Add New Products >" size="lg" />
        </Link>
      )}
    </section>
  );
}

export default Menu;

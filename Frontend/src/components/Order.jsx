import React from "react";
import OrderItem from "./OrderItem";
import alcohol from "../../public/images/temp/alcohol.png";
import beer from "../../public/images/temp/beer.png";
import cocktail from "../../public/images/temp/cocktail.png";
import coffee from "../../public/images/temp/coffee.png";
import drink from "../../public/images/temp/drink.png";
import tea from "../../public/images/temp/tea.png";

export default function Order() {
  return (
    <>
      <section className="w-full">
        <section className="flex gap-5 flex-col bg-forth shadow-primary p-5 rounded-xl max-h-150 overflow-y-auto">
          <OrderItem name="Order Item" img={alcohol} />
          <OrderItem name="Order Item" img={beer} />
          <OrderItem name="Order Item" img={cocktail} />
          <OrderItem name="Order Item" img={coffee} />
          <OrderItem name="Order Item" img={drink} />
          <OrderItem name="Order Item" img={tea} />
        </section>
      </section>
    </>
  );
}

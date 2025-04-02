import React from "react";
import OrderItem from "./OrderItem";

export default function Order({ items, setOrder, setSum }) {
    return (
        <>
            <section className="w-full">
                <section className="flex gap-5 flex-col bg-forth shadow-primary p-5 rounded-xl overflow-y-auto w-full">
                    {items.map((x, index) => (
                        <OrderItem
                            key={`${x.id}-${index}`}
                            name={x.name}
                            image={x.image}
                            setOrder={setOrder}
                            id={x.id}
                            price={x.price}
                            setSum={setSum}
                            index={index}
                        />
                    ))}
                </section>
            </section>
        </>
    );
}

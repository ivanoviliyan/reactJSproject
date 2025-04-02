import React, { useEffect, useState } from "react";

export default function OrderItem(props) {
    const remove = () => {
        props.setOrder((prev) => prev.filter((_, i) => i !== props.index));
    };

    return (
        <>
            <section
                className="flex items-center justify-end gap-5 bg-third shadow-secondary p-5 rounded-2xl w-full tranform-main cursor-default"
                id={props.id}
            >
                <section className="gap-5 flex w-full">
                    <img
                        src={props.image}
                        alt={props.image}
                        className="w-1/2 rounded-2xl shadow-primary"
                    />
                    <h1 className="text-md">{props.name}</h1>
                    <p>${props.price}</p>
                </section>

                <button
                    className="py-3 px-10 rounded-2xl cursor-pointer max-w-1/2 bg-secondary w-full hover:opacity-85"
                    onClick={remove}
                >
                    Remove
                </button>
            </section>
        </>
    );
}

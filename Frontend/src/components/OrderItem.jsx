import React from "react";

export default function OrderItem(props) {
    return (
        <>
            <section className="flex items-center justify-start gap-3 bg-third shadow-secondary p-5 rounded-2xl h-full">
                <section className="w-2/3 gap-5 flex justify-around items-center">
                    <img src={props.img} alt={props.img.toString()} className="w-10" />
                    <h1 className="text-md">{props.name}</h1>
                    <div className="flex-grow"></div>
                </section>

                <button className="py-3 px-10 rounded-2xl tranform-main flex items-center justify-center bg-secondary w-1/3">
                    Remove
                </button>
            </section>
        </>
    );
}

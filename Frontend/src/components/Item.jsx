import React from "react";

export default function Item(props) {
    return (
        <>
            <section className="flex flex-col items-center justify-start gap-3 bg-third shadow-secondary p-5 rounded-2xl h-full">
                <h1 className="text-md font-semibold text-xl">{props.name}</h1>
                <p>Price:</p>
                <img src={props.img} alt={"ka"} className="w-2/3" />

                <div className="flex-grow"></div>

                <button className="py-3 px-10 rounded-2xl tranform-main flex items-center justify-center bg-secondary w-2/3">
                    Add
                </button>
            </section>
        </>
    );
}

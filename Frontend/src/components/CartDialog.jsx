import React, { useState } from "react";

export default function CartDialog({ data, setShowDialog, addProductToTheOrder }) {
    const addHandler = (e) => {
        e.preventDefault();
        setShowDialog((curr) => !curr);
        addProductToTheOrder(data);
    };
    return (
        <form className="pb-12 flex flex-col items-center mx-auto w-full">
            <section className="flex flex-col items-center w-full bg-third px-10 pt-5 rounded-2xl text-lg shadow-secondary">
                <h1 className="text-3xl mb-5 pt-5">Adding a product dialog</h1>

                <section className="flex flex-col justify-center items-center gap-8 my-5 w-full">
                    <p className="font-semibold">
                        Name: <span className="underline text-green-600">{data.name}</span>
                    </p>

                    <p className="font-semibold">
                        Quantity: <span className="underline text-green-600">{data.quantity}</span>
                    </p>

                    <p className="font-semibold">
                        Price: <span className="underline text-green-600">${data.price}</span>
                    </p>
                </section>

                <div className="w-full flex justify-center mt-10 pb-5 gap-5">
                    <button
                        type="submit"
                        className="py-3 w-2/5 bg-green-400 shadow-secondary rounded-2xl transform-main"
                        onClick={addHandler}
                    >
                        Add to the cart
                    </button>
                    <button
                        type="button"
                        className="py-3 w-2/5 bg-red-400 shadow-secondary rounded-2xl transform-main"
                        onClick={() => setShowDialog((curr) => !curr)}
                    >
                        Cancel
                    </button>
                </div>
            </section>
        </form>
    );
}

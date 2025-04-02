import React, { useState } from "react";
import CartDialog from "./CartDialog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
export default function Item(props) {
    const [showDialog, setShowDialog] = useState(false);
    console.log(props);

    return (
        <>
            {showDialog && (
                <div className="fixed top-30 z-100 w-1/2">
                    <CartDialog
                        data={props}
                        setShowDialog={setShowDialog}
                        addProductToTheOrder={props.addProductToTheOrder}
                    />
                </div>
            )}
            <section className="flex flex-wrap flex-col items-center justify-start gap-3 bg-third shadow-secondary p-5 max-w-1/3 rounded-2xl h-full">
                <h1 className="text-md font-semibold text-xl">{props.name}</h1>
                <button className="tranform-main flex items-center gap-1 bg-gray-100 shadow-secodary">
                    <p>Like</p>
                    <FontAwesomeIcon icon={faHeart} style={{ color: "#ff0000" }} />
                </button>
                <img src={props.image} className="min-w-1/2 rounded-2xl shadow-secondary" />
                <div className="flex flex-col gap-4">
                    <p>
                        <span className="font-semibold">Price</span>: ${props.price}
                    </p>
                    <p>
                        <span className="font-semibold">Drink type</span>: {props.type}
                    </p>
                    <p>
                        <span className="font-semibold">Description</span>: {props.description}
                    </p>
                </div>

                <div className="flex-grow"></div>

                <button
                    className="py-3 px-10 rounded-2xl tranform-main flex items-center justify-center bg-secondary w-2/3"
                    onClick={() => setShowDialog((curr) => !curr)}
                >
                    Add
                </button>
            </section>
        </>
    );
}

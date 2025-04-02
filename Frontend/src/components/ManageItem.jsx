import React, { useState, useContext } from "react";
import { useEffect } from "react";
import ManageProduct from "../components/ManageProduct";
import { UserContext } from "../context/UserContext";

export default function ManageItem(props) {
    const { authData } = useContext(UserContext);
    const [showManageProductModal, setShowManageProductModal] = useState(false);
    const { user } = useContext(AuthContext);

    const removeItem = async () => {
        try {
            const method = "DELETE";
            const url = `http://localhost:3030/data/barEscape/${props.id}`;

            const response = await fetch(url, {
                method,
                headers: {
                    "Content-Type": "application/json",
                    "X-Authorization": user.accessToken,
                },
            });

            if (response.ok) {
                props.getProducts();
            } else {
                console.error("Failed to submit product");
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            {showManageProductModal && (
                <div className="fixed top-30 z-100 w-1/2">
                    <ManageProduct
                        data={props}
                        setShowManageProductModal={setShowManageProductModal}
                        header={"Edit"}
                        getProducts={props.getProducts}
                    />
                </div>
            )}
            <section className="flex items-center justify-start gap-3 bg-third shadow-secondary p-5 rounded-2xl h-full ">
                <section className="w-2/3 gap-5 flex justify-around items-center">
                    <img src={props.image} alt={"nothing"} className="w-10" />
                    <h1 className="text-md">{props.name}</h1>
                    <p className="text-md">#{props.quantity}</p>
                    <p className="text-md">${props.price}</p>
                    <div className="flex-grow"></div>
                </section>

                <button
                    className="bg-blue-400 tranform-main"
                    onClick={() => setShowManageProductModal((curr) => !curr)}
                >
                    Edit
                </button>
                <button className="bg-red-400 tranform-main" onClick={removeItem}>
                    Remove
                </button>
            </section>
        </>
    );
}

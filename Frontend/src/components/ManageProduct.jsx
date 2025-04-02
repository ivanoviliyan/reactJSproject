import React, { useContext } from "react";
import DropdownMenu from "./DropdownMenu";
import { AuthContext } from "../context/AuthContext";

export default function ManageProduct({ setShowManageProductModal, header, getProducts, data }) {
    const { user } = useContext(AuthContext);
    const manageFormAction = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formDataFormatted = Object.fromEntries(formData.entries());

        setShowManageProductModal(false);

        try {
            const method = header === "Add" ? "POST" : "PUT";
            const url =
                header === "Add"
                    ? "http://localhost:3030/data/barEscape"
                    : `http://localhost:3030/data/barEscape/${data.id}`;

            const response = await fetch(url, {
                method,
                headers: {
                    "Content-Type": "application/json",
                    "X-Authorization": user.accessToken,
                },
                body: JSON.stringify(formDataFormatted),
            });

            if (response.ok) {
                getProducts();
            } else {
                console.error("Failed to submit product");
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form
            onSubmit={manageFormAction}
            className="pb-12 flex flex-col items-center mx-auto w-full"
        >
            <section className="flex flex-col items-center w-full bg-third px-10 pt-5 rounded-2xl text-lg shadow-secondary">
                <h1 className="text-4xl mb-5 pt-5">{header} Product Form</h1>

                <section className="grid grid-cols-2 gap-8 my-5 w-full">
                    <div>
                        <label className="font-semibold" htmlFor="image">
                            Image:
                        </label>
                        <input
                            className="w-full bg-third rounded-lg text-sm px-5 py-3.5 block shadow-secondary"
                            required
                            type="text"
                            name="image"
                            defaultValue={data?.image}
                        />

                        <label className="font-semibold" htmlFor="name">
                            Name:
                        </label>
                        <input
                            className="w-full bg-third rounded-lg text-sm px-5 py-3.5 block shadow-secondary"
                            required
                            type="text"
                            name="name"
                            defaultValue={data?.name}
                        />

                        <label className="font-semibold" htmlFor="type">
                            Type:
                        </label>
                        <DropdownMenu
                            className="w-full shadow-secondary"
                            name="type"
                            defaultValue={data?.type}
                        />
                    </div>

                    <div>
                        <label className="font-semibold" htmlFor="quantity">
                            Quantity:
                        </label>
                        <input
                            className="w-full bg-third rounded-lg text-sm px-5 py-3.5 block shadow-secondary"
                            required
                            type="number"
                            name="quantity"
                            defaultValue={data?.quantity}
                        />

                        <label className="font-semibold" htmlFor="price">
                            Price:
                        </label>
                        <input
                            className="w-full bg-third rounded-lg text-sm px-5 py-3.5 block shadow-secondary"
                            required
                            type="number"
                            name="price"
                            defaultValue={data?.price}
                        />

                        <label className="font-semibold" htmlFor="description">
                            Description:
                        </label>
                        <textarea
                            className="w-full bg-third rounded-lg text-sm px-5 py-3.5 block shadow-secondary"
                            required
                            name="description"
                            defaultValue={data?.description}
                        ></textarea>
                    </div>
                </section>

                <div className="w-full flex justify-center mt-10 pb-5 gap-5">
                    <button type="submit" className="py-3 w-2/5 bg-green-400 shadow-secondary">
                        {header} Product
                    </button>
                    <button
                        type="button"
                        className="py-3 w-2/5 bg-red-400 shadow-secondary"
                        onClick={() => setShowManageProductModal(false)}
                    >
                        Cancel
                    </button>
                </div>
            </section>
        </form>
    );
}

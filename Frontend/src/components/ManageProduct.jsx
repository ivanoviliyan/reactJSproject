import React from "react";
import DropdownMenu from "./DropdownMenu";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export default function ManageProduct({ setShowManageProductModal, header }) {
    const { user, setUser } = useContext(AuthContext);

    const manageFormAction = async (formData) => {
        const image = formData.get("image");
        const name = formData.get("name");
        const type = formData.get("type");
        const quantity = formData.get("quantity");
        const price = formData.get("price");
        const description = formData.get("description");
        const data = { image, name, type, quantity, price, description };
        setShowManageProductModal((curr) => !curr);

        try {
            const response = await fetch("http://localhost:3030/data/barEscape", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-Authorization": user.accessToken,
                },
                body: JSON.stringify(data),
            });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <form
                action={manageFormAction}
                className="pb-12 flex flex-col items-center mx-auto w-full"
            >
                <section className="flex flex-col items-center w-full bg-third px-10 pt-5 rounded-2xl text-lg shadow-secondary">
                    <div className="flex flex-col gap-5 items-center justify-center">
                        <h1 className="text-4xl mb-5 pt-5">{header} Product Form</h1>
                    </div>

                    <section className="grid grid-cols-2 gap-8 my-5 w-full">
                        <div>
                            <div className="w-full">
                                <label className="font-semibold" htmlFor="image">
                                    Image:
                                </label>
                                <input
                                    className="w-full bg-third tranform-main rounded-lg text-sm px-5 py-3.5 block shadow-secondary"
                                    required
                                    type="text"
                                    name="image"
                                    placeholder="Please enter the name of the product"
                                />
                            </div>

                            <div className="w-full">
                                <label className="font-semibold" htmlFor="name">
                                    Name:
                                </label>
                                <input
                                    className="w-full bg-third tranform-main rounded-lg text-sm px-5 py-3.5 block shadow-secondary"
                                    required
                                    type="text"
                                    name="name"
                                    placeholder="Please enter the name of the product"
                                />
                            </div>

                            <div className="w-full">
                                <label className="w-full font-semibold" htmlFor="type" name="type">
                                    Type:
                                </label>
                                <DropdownMenu className="w-full shadow-secondary" name={"type"} />
                            </div>
                        </div>
                        <div>
                            <div className="w-full">
                                <label className="font-semibold" htmlFor="quantity">
                                    Quantity:
                                </label>
                                <input
                                    className="w-full bg-third tranform-main rounded-lg text-sm px-5 py-3.5 block shadow-secondary"
                                    required
                                    type="number"
                                    name="quantity"
                                    placeholder="Please enter the quantity of the product #"
                                />
                            </div>

                            <div className="w-full">
                                <label className="font-semibold" htmlFor="price">
                                    Price:
                                </label>
                                <input
                                    className="w-full bg-third tranform-main rounded-lg text-sm px-5 py-3.5 block shadow-secondary"
                                    // bg-third tranform-main rounded-lg text-sm px-5 py-3.5 text-center inline-flex items-center shadow-secondary
                                    required
                                    type="number"
                                    name="price"
                                    placeholder="Please enter the price of the product $"
                                />
                            </div>

                            <div className="w-full">
                                <label className="font-semibold" htmlFor="description">
                                    Description:
                                </label>
                                <textarea
                                    className="w-full bg-third tranform-main rounded-lg text-sm px-5 py-3.5 block shadow-secondary"
                                    // bg-third tranform-main rounded-lg text-sm px-5 py-3.5 text-center inline-flex items-center shadow-secondary
                                    required
                                    type="text"
                                    name="description"
                                    placeholder="Please descripe the product"
                                />
                            </div>
                        </div>
                    </section>

                    <div className="w-full flex justify-center mt-10 pb-5 gap-5">
                        <button
                            type="submit"
                            className="tranform-main py-3 w-2/5 bg-green-400 shadow-secondary"
                        >
                            {header} Product
                        </button>

                        <button
                            type="button"
                            className="tranform-main py-3 w-2/5 bg-red-400 shadow-secondary"
                            onClick={() => setShowManageProductModal((curr) => !curr)}
                        >
                            Cancel
                        </button>
                    </div>
                </section>
            </form>
        </>
    );
}

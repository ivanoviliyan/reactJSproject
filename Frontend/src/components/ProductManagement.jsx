import React, { useState, useContext, useEffect } from "react";
import ManageItem from "./ManageItem";
import ManageProduct from "./ManageProduct";
import logo from "../../public/images/logo.png";
import { UserContext } from "../context/UserContext";

export default function ProductManagement() {
    const [showManageProductModal, setShowManageProductModal] = useState(false);
    const { accessToken } = useContext(UserContext);
    const [products, setProducts] = useState([]);
    console.log(accessToken);

    const getProducts = async () => {
        if (accessToken) {
            try {
                const response = await fetch("http://localhost:3030/data/barEscape", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "X-Authorization": accessToken,
                    },
                });

                const result = await response.json();
                setProducts(result);

                console.log(response.status);
            } catch (error) {
                console.error(error);
            }
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div className="flex flex-col gap-5 w-2/3 justify-center items-center mx-auto">
            <img src={logo} alt="logo" className="w-55 shadow-lg rounded-full" />
            <h1 className="text-2xl font-semibold">Product Management</h1>

            {showManageProductModal && (
                <div className="fixed top-30 z-100 w-1/2">
                    <ManageProduct
                        setShowManageProductModal={setShowManageProductModal}
                        header={"Add"}
                        getProducts={getProducts}
                    />
                </div>
            )}

            <section className="flex gap-3 w-full">
                <button
                    className="bg-secondary tranform-main w-2/3 py-4 shadow-secondary"
                    onClick={getProducts}
                >
                    Load Products
                </button>
                <button
                    className="bg-green-400 tranform-main w-1/2 py-4 shadow-secondary"
                    onClick={() => setShowManageProductModal((curr) => !curr)}
                >
                    Add Product
                </button>
            </section>

            <div className="w-full bg-forth rounded-xl shadow-primary flex flex-col gap-3 p-4 max-h-150 overflow-y-auto mb-5">
                {products.length > 0 ? (
                    products.map((item) => (
                        <ManageItem
                            description={item.description}
                            image={item.image}
                            name={item.name}
                            price={item.price}
                            quantity={item.quantity}
                            type={item.type}
                            id={item._id}
                            getProducts={getProducts}
                        />
                    ))
                ) : (
                    <h2>No Products Avaliable</h2>
                )}
            </div>
        </div>
    );
}

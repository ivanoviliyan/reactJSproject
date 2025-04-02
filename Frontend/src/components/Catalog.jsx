import React, { useEffect, useState } from "react";
import logo from "../../public/images/logo.png";
import SearchBar from "./SearchBar";
import Item from "./Item";
import Order from "./Order";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faTag, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import PayNow from "./PayNow";
import { UserContext } from "../context/UserContext";

export default function Catalog() {
    const { authData } = useContext(UserContext);
    const [showDialog, setShowDialog] = useState(false);
    const [sum, setSum] = useState(0);
    const [order, setOrder] = useState([]);
    const [showPayNow, setShowPayNow] = useState(false);
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]); // За филтрираните продукти

    useEffect(() => {
        const getProducts = async () => {
            const response = await fetch("http://localhost:3030/data/barEscape");
            const result = await response.json();
            setProducts(result);
            setFilteredProducts(result); // Първоначално показваме всички продукти
        };
        getProducts();
    }, []);

    useEffect(() => {
        const payment = () => {
            const total = order.reduce((a, c) => a + Number(c.price), 0);
            setSum(total);
        };
        payment();
    }, [order]);

    const addProductToTheOrder = (e) => {
        setOrder((curr) => [...curr, e]);
        setShowDialog((curr) => !curr);
    };

    return (
        <div className="flex justify-center">
            <section className="w-2/3">
                <div className="flex justify-center">
                    <img src={logo} alt="logo" className="w-55 my-4 shadow-lg rounded-full" />
                </div>
                <section className="flex mx-5 gap-10">
                    <section className="flex flex-col gap-3 justify-center items-center">
                        <h2 className="text-3xl font-bold mb-1">Welcome to Our Bar!</h2>

                        <h1 className="text-2xl font-semibold">
                            Place your order now! <FontAwesomeIcon icon={faTag} />
                        </h1>
                        <section className="flex w-2/3 justify-center items-center gap-4">
                            <SearchBar
                                products={products}
                                setFilteredProducts={setFilteredProducts}
                            />
                        </section>
                        <section
                            className={
                                filteredProducts.length > 0
                                    ? "flex items-center max-w-4/3 gap-10 pt-3 pb-10"
                                    : "flex justify-center items-center pt-10"
                            }
                        >
                            {filteredProducts.length > 0 ? (
                                filteredProducts.map((item) => (
                                    <Item
                                        key={item._id}
                                        description={item.description}
                                        image={item.image}
                                        name={item.name}
                                        price={item.price}
                                        quantity={item.quantity}
                                        type={item.type}
                                        id={item._id}
                                        setShowDialog={setShowDialog}
                                        addProductToTheOrder={addProductToTheOrder}
                                    />
                                ))
                            ) : (
                                <div className="flex justify-center items-center">
                                    <h2 className="text-xl">No Products Available</h2>
                                </div>
                            )}
                        </section>
                    </section>
                </section>
            </section>
            <section className="w-1/2 flex flex-col gap-5 items-center">
                <h1 className="text-2xl font-semibold">
                    Cart <FontAwesomeIcon icon={faCartShopping} />
                </h1>
                <Order items={order} setOrder={setOrder} setSum={setSum} />
                {showPayNow && (
                    <div className="fixed top-30 z-100 w-1/4">
                        <PayNow setShowPayNow={setShowPayNow} sum={sum} />
                    </div>
                )}
                <h1 className="text-2xl">
                    <FontAwesomeIcon icon={faMoneyBill} /> Pay check: ${sum}
                </h1>
                <button
                    className="bg-secondary py-4 px-6 rounded-2xl tranform-main w-1/2"
                    onClick={() => setShowPayNow((curr) => !curr)}
                >
                    Pay now
                </button>
            </section>
        </div>
    );
}

import React, { useEffect, useState } from "react";
import logo from "../../public/images/logo.png";
import SearchBar from "./SearchBar";
import Item from "./Item";
import alcohol from "../../public/images/temp/alcohol.png";
import beer from "../../public/images/temp/beer.png";
import cocktail from "../../public/images/temp/cocktail.png";
import coffee from "../../public/images/temp/coffee.png";
import drink from "../../public/images/temp/drink.png";
import tea from "../../public/images/temp/tea.png";
import Order from "./Order";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faTag, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import DropdownMenu from "../components/DropdownMenu";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export default function Catalog() {
    const { user, setUser } = useContext(AuthContext);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            if (user.accessToken) {
                try {
                    console.log(user);
                    const response = await fetch("http://localhost:3030/data/barEscape", {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            "X-Authorization": user.accessToken,
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
        getProducts();
    }, []);

    console.log(products);

    return (
        <>
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
                                <SearchBar />
                            </section>
                            <section className="grid grid-cols-2 gap-4 my-5 md:grid-cols-3 lg:grid-cols-4">
                                {products.map((item) => (
                                    <Item
                                        description={item.description}
                                        img={item.img}
                                        name={item.name}
                                        price={item.price}
                                        quantity={item.quantity}
                                        type={item.type}
                                        id={item._id}
                                    />
                                ))}
                            </section>
                        </section>
                    </section>
                </section>
                <section className="w-1/3 flex flex-col gap-5 items-center">
                    <h1 className="text-2xl font-semibold">
                        Cart <FontAwesomeIcon icon={faCartShopping} />
                    </h1>
                    <Order />
                    <h1 className="text-2xl">
                        <FontAwesomeIcon icon={faMoneyBill} /> Pay check: $38
                    </h1>
                    <button className="bg-secondary py-4 px-6 rounded-2xl tranform-main w-1/2">
                        Pay now
                    </button>
                </section>
            </div>
        </>
    );
}

import React from "react";
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

export default function Catalog() {
    return (
        <>
            <div className="flex justify-center">
                <img src={logo} alt="logo" className="w-55 my-4 shadow-lg rounded-full" />
            </div>
            <section className="flex mx-5 gap-10">
                <section className="flex flex-col w-2/3 gap-3 justify-center items-center">
                    <h1 className="text-2xl font-semibold">Catalog</h1>
                    <SearchBar />
                    <section className="grid grid-cols-2 gap-4 my-5 md:grid-cols-3 lg:grid-cols-4">
                        <Item name="Alcohol" img={alcohol} />
                        <Item name="Beer" img={beer} />
                        <Item name="Coffee" img={coffee} />
                        <Item name="Tea" img={tea} />
                        <Item name="Cocktail" img={cocktail} />
                        <Item name="Something else" img={drink} />
                    </section>
                </section>
                <section className="w-1/3 flex flex-col gap-5">
                    <h1 className="text-2xl font-semibold">Order</h1>
                    <Order />
                    <h1 className="text-2xl">Pay check: $38</h1>
                    <button className="bg-secondary py-4 px-6 rounded-2xl tranform-main">
                        Pay now
                    </button>
                </section>
            </section>
        </>
    );
}

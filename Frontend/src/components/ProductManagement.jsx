import React, { useState, useContext } from "react";
import ManageItem from "./ManageItem";
import alcohol from "../../public/images/temp/alcohol.png";
import beer from "../../public/images/temp/beer.png";
import cocktail from "../../public/images/temp/cocktail.png";
import coffee from "../../public/images/temp/coffee.png";
import drink from "../../public/images/temp/drink.png";
import tea from "../../public/images/temp/tea.png";

export default function ProductManagement() {
    return (
        <div className="flex flex-col gap-5 w-2/3 justify-center items-center mx-auto">
            <h1 className="text-2xl font-semibold">Product Management</h1>

            <section className="flex gap-3 w-full">
                <button className="bg-secondary tranform-main w-2/3">Load Products</button>
                <button className="bg-green-400 tranform-main w-1/2">Add Product</button>
            </section>

            <div className="w-full bg-forth rounded-xl shadow-primary flex flex-col gap-3 p-4 max-h-150 overflow-y-auto">
                <ManageItem name="alcohol" img={alcohol} />
                <ManageItem name="Order Item" img={beer} />
                <ManageItem name="Order Item" img={cocktail} />
                <ManageItem name="Order Item" img={coffee} />
                <ManageItem name="Order Item" img={drink} />
                <ManageItem name="Order Item" img={tea} />
            </div>
        </div>
    );
}

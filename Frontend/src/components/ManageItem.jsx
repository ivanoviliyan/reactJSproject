import React from "react";
import { useEffect } from "react";

export default function ManageItem(props) {
    const editRequest = async (id) => {
        try {
            const response = await fetch(`http://localhost:3030/data/barEscape/${id}`, {
                method: "PUT",
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

    const onEdit = (e) => {
        const targetElementId = e.target.id;
        useEffect(() => {});
    };
    return (
        <>
            <section className="flex items-center justify-start gap-3 bg-third shadow-secondary p-5 rounded-2xl h-full">
                <section className="w-2/3 gap-5 flex justify-around items-center">
                    <img src={props.img} alt={"nothing"} className="w-10" />
                    <h1 className="text-md">{props.name}</h1>
                    <div className="flex-grow"></div>
                </section>

                <button className="bg-blue-400 tranform-main" onClick={onEdit} id={props.id}>
                    Edit
                </button>
                <button className="bg-red-400 tranform-main">Remove</button>
            </section>
        </>
    );
}

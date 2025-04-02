import React, { useState } from "react";
import { useNavigate } from "react-router";
import payingGif from "../../public/images/temp/paying.gif";

export default function PayNow({ sum, setShowPayNow }) {
    const [payed, setPayed] = useState(false);
    const navigate = useNavigate();
    const paying = (e) => {
        e.preventDefault();
        console.log("Click");
        setPayed((curr) => !curr);
        setTimeout(() => {
            navigate("/");
        }, 3500);
    };

    return (
        <>
            {payed ? (
                <img src={payingGif} className="rounded-b-xl w-1/2" />
            ) : (
                <form className="pb-12 flex flex-col items-center mx-auto w-full">
                    <section className="flex flex-col items-center w-full bg-third px-10 pt-5 rounded-2xl text-lg shadow-secondary">
                        <h1 className="text-3xl mb-5 pt-5">Adding a product dialog</h1>

                        <section className="flex flex-col justify-center items-center gap-8 my-5 w-full">
                            <p>
                                Please confrim that you're paying:{" "}
                                <span className="underline font-semibold">${sum}!</span>
                            </p>
                        </section>

                        <div className="w-full flex justify-center mt-10 pb-5 gap-5">
                            <button
                                type="submit"
                                className="py-3 w-2/5 bg-green-400 shadow-secondary rounded-2xl tranform-main"
                                onClick={paying}
                            >
                                I'm paying!
                            </button>
                            <button
                                type="button"
                                className="py-3 w-2/5 bg-red-400 shadow-secondary rounded-2xl tranform-main"
                                onClick={() => setShowPayNow((curr) => !curr)}
                            >
                                Cancel
                            </button>
                        </div>
                    </section>
                </form>
            )}
        </>
    );
}

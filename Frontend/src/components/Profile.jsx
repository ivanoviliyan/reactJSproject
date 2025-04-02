import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function Profile() {
    const { email } = useContext(UserContext);

    return (
        <>
            <div className="flex justify-center items-center pt-10 flex-col gap-5">
                <p>
                    Hi <span className="font-semibold">{email}</span>!
                </p>
                <p>This is your profile page!</p>
            </div>
        </>
    );
}

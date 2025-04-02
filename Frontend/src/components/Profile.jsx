import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function Profile() {
    const { authData } = useContext(UserContext);
    console.log(user);

    return (
        <>
            <div className="flex justify-center items-center pt-10 flex-col gap-5">
                <p>
                    Hi <span className="font-semibold">{user.username}</span>!
                </p>
                <p>This is your profile page!</p>
            </div>
        </>
    );
}

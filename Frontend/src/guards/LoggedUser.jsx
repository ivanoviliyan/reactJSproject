import { Navigate, Outlet } from "react-router";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function LoggedUser() {
    const { authData, email } = useContext(UserContext);

    if (!email) {
        return <Navigate to="/users/login" />;
    }

    return <Outlet />;
}

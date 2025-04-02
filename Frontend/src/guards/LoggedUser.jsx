import { Navigate, Outlet } from "react-router";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function LoggedUser() {
    const { authData } = useContext(UserContext);

    if (!authData.email) {
        return <Navigate to="/users/login" />;
    }

    return <Outlet />;
}

import { createContext } from "react";

export const UserContext = createContext({
    _id: "",
    email: "",
    accessToken: "",
    login: () => null,
    logout: () => null,
});

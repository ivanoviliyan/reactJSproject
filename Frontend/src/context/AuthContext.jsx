import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    const login = (data) => {
        setUser(data);
        localStorage.setItem("user", data.username);
        localStorage.setItem("email", data.email);
        localStorage.setItem("id", data._id);
        localStorage.setItem("accessToken", data.accessToken);
    };
    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
        localStorage.removeItem("email");
        localStorage.removeItem("id");
        localStorage.removeItem("accessToken");
    };

    return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
}

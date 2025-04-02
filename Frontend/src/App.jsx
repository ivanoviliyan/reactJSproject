import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components//Home";
import Catalog from "./components/Catalog";
import ProductManagement from "./components/ProductManagement";
import Profile from "./components/Profile";
import { Routes, Route } from "react-router";
import { useState } from "react";
import Guest from "./guards/Guest";
import { UserContext } from "./context/UserContext";
import LoggedUser from "./guards/LoggedUser";

export default function App() {
    const [authData, setAuthData] = useState(() => {
        const savedAuthData = localStorage.getItem("authData");
        return savedAuthData ? JSON.parse(savedAuthData) : {};
    });

    const login = (resultData) => {
        setAuthData(resultData);
        localStorage.setItem("email", resultData.email);
        localStorage.setItem("authData", JSON.stringify(resultData));
    };

    const logout = () => {
        setAuthData({});
        localStorage.removeItem("email");
        localStorage.removeItem("authData");
    };
    return (
        <UserContext.Provider value={{ ...authData, login, logout }}>
            <main className="min-h-screen flex flex-col pt-40 md:pt-30 lg:10 bg-primary items-center ibm-plex-sans">
                <Navbar />
                <div className="flex-grow w-9/10">
                    <>
                        <Routes element={<Guest />}>
                            <Route path="/users/login" element={<Login />} />
                            <Route path="/users/register" element={<Register />} />
                        </Routes>

                        <Routes element={<LoggedUser />}>
                            <Route path="/" element={<Home />} />
                            <Route path="/catalog" element={<Catalog />} />
                            <Route path="/contacts" element={<Contact />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/crud" element={<ProductManagement />} />
                            <Route path="/profile" element={<Profile />} />
                        </Routes>
                    </>
                </div>
                <Footer />
            </main>
        </UserContext.Provider>
    );
}

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
import { Routes, Route } from "react-router";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Guest from "./guards/Guest";
import LoggedUser from "./guards/LoggedUser";

export default function App() {
    const { user, setUser } = useContext(AuthContext);
    return (
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
                    </Routes>
                </>
            </div>
            <Footer />
        </main>
    );
}

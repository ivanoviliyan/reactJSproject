import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components//Home";

export default function App() {
    return (
        <main className="min-h-screen flex flex-col pt-20 bg-primary items-center ibm-plex-sans">
            <Navbar />
            <div className="flex-grow w-full">
                <Home />
            </div>
            <Footer />
        </main>
    );
}

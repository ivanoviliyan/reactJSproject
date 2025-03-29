import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components//Home";

function App() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-25 mb-4 bg-primary flex flex-col items-center ibm-plex-sans">
                {/* <Register /> */}
                {/* <Login /> */}
                {/* <About /> */}
                {/* <Contact /> */}
                <Home />
            </main>
            <Footer />
        </>
    );
}

export default App;

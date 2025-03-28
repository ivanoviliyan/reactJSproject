import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-[60px] pb-[60px] bg-primary flex flex-col items-center ibm-plex-sans">
                {/* <Register /> */}
                {/* <Login /> */}
                {/* <About /> */}
                <Contact />
            </main>
            <Footer />
        </>
    );
}

export default App;

import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-[60px] pb-[60px] bg-primary flex flex-col items-center ibm-plex-sans">
                {/* <Register /> */}
                <Login />
            </main>
            <Footer />
        </>
    );
}

export default App;

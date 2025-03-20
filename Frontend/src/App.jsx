import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="wrapper">
            <Navbar />
            {/* <Register /> */}
            <Login />
            <Footer />
        </div>
    );
}

export default App;

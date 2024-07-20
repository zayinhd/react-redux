import { useState } from "react";
import "./App.css";
import Nav from "./components/navigation/index.jsx";
import Footer from "./components/navigation/Footer/Footer.jsx";
import Input from "./components/Input/Input.jsx";

import Card from "./components/Card/Card.jsx";
import { useStateContext } from "./lib/tmdbContext.jsx";

function App() {
    const [movies, setMovies] = useState("");
    const [filteredMovies, setFilteredMovies] = useState([]);

    const fetchMovies = async () => {
        setMovies(data);
    };
    return (
        <div className="App">
            <Nav />
            <h1>Movo App</h1>
            <hr />
            <Input />
            <Card />
            <Footer />
        </div>
    );
}

export default App;

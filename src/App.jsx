import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import NewsBoard from "./components/NewsBoard";
import About from "./components/About"; // Import About component

const App = () => {
    const [category, setCategory] = useState("general");

    return (
        <Router>
            <NavBar setCategory={setCategory} />
            <Routes>
                <Route path="/" element={<NewsBoard category={category} />} />
                <Route path="/about" element={<About />} /> {/* About Page Route */}
            </Routes>
        </Router>
    );
};

export default App;

import React from "react";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Book from "./components/Book/Book";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Book />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

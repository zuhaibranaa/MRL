import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import Home from "@/Components/Home";
import React from "react";

function HomePage(props) {
    return (
        <>
            <Navbar props={{ ...props }} />
            <Home props={{ ...props }} />
            <Footer />
        </>
    );
}

export default HomePage;

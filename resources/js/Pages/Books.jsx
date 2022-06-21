import { Inertia } from "@inertiajs/inertia";
import React, { useState, useRef, useContext } from "react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import BookContents from "@/Components/BookContents";

export default function Books(props) {
    return (
        <>
            <Navbar props={{ ...props }} />
            <BookContents props={{ ...props }} />
            <Footer />
        </>
    );
}

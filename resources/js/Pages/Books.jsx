import { Inertia } from "@inertiajs/inertia";
import React, { useState, useRef, useContext } from "react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import BookContents from "@/Components/BookContents";
import BookDetails from "@/Components/BookDetails";

export default function Books(props) {
    // const imageRef = useRef();

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     const formData = new FormData();
    //     formData.append("image", imageRef.current.files[0]);
    //     Inertia.post("/book", formData, {
    //         forceFormData: true,
    //     });
    //     // console.log(imageRef.current.files[0]);
    // }
    // // console.log(props);

    return (
        <>
            <Navbar props={{ ...props }} />
            <BookDetails props={{ ...props }} />
            <Footer />
        </>
    );
}

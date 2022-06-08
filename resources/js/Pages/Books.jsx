import { Inertia } from "@inertiajs/inertia";
import React, { useState, useRef } from "react";

export default function Books() {
    const imageRef = useRef();

    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append("image", imageRef.current.files[0]);
        Inertia.post("/book", formData, {
            forceFormData: true,
        });
        console.log(imageRef.current.files[0]);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="image">Image:</label>
            <input type="file" id="image" ref={imageRef} />
            <button type="submit">Submit</button>
        </form>
    );
}

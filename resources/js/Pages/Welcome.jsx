import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import Navbar from "@/Components/Navbar";

export default function Welcome(props) {
    return (
        <>
            <Navbar auth={{ ...props.auth }} />
            <Head title="Welcome" />
        </>
    );
}

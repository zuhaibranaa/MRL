import React from "react";

function MyBookShelf(props) {
    return (
        <>
            <Navbar props={{ ...props }} />
            <Footer />
        </>
    );
}

export default MyBookShelf;

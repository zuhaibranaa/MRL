import React from "react";

function SearchResults(props) {
    return (
        <>
            <Navbar props={{ ...props }} />
            <Footer />
        </>
    );
}

export default SearchResults;

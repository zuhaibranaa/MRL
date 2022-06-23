import React from "react";
import BookContents from "@/Components/BookContents";

function Home(props) {
    return (
        <>
            <BookContents props={{ ...props }} />
            <hr />
            <BookContents props={{ ...props }} />
        </>
    );
}

export default Home;

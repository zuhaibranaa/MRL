import React from "react";
import BookContents from "@/Components/BookContents";

function Home({ props }) {
    return (
        <>
            <h1
                style={{
                    fontSize: "30px",
                    marginLeft: "5%",
                    paddingTop: "3%",
                    verticalAlign: "center",
                    textAlign: "left",
                }}
            >
                Books
            </h1>
            <BookContents props={{ items: props.books, type: "book" }} />
            <hr />
            <h1
                style={{
                    fontSize: "30px",
                    marginLeft: "5%",
                    paddingTop: "3%",
                    verticalAlign: "center",
                    textAlign: "left",
                }}
            >
                Stories
            </h1>
            <BookContents props={{ items: props.stories, type: "story" }} />
        </>
    );
}

export default Home;

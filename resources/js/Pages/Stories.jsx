import React from "react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import BookContents from "@/Components/BookContents";
import { Button } from "flowbite-react";
import { InertiaLink } from "@inertiajs/inertia-react";

function Stories(props) {
    return (
        <>
            <Navbar props={{ ...props }} />
            <div
                className="pt-4"
                style={{
                    paddingLeft: "6%",
                    position: "relative",
                    float: "left",
                    verticalAlign: "center",
                    width: "device-width",
                    height: "3%",
                    alignContent: "center",
                }}
            >
                <InertiaLink href={base_url + "/story/create"} as="a">
                    <Button>
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                        </svg>
                        Add New Story
                    </Button>
                </InertiaLink>
            </div>
            <BookContents props={{ ...props }} />
            <Footer />
        </>
    );
}

export default Stories;

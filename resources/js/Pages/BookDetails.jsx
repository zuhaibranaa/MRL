import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import { InertiaLink } from "@inertiajs/inertia-react";
import { Card, Button } from "flowbite-react";
import React from "react";
function BookDetails(props) {
    console.log(props);
    return (
        <>
            <Navbar props={{ ...props }} />
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
                    <div className="flex flex-col justify-center">
                        <div className="max-w-xl mb-6">
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                                {props.book.title}
                            </h2>
                            <p className="text-base text-gray-700 md:text-lg">
                                {props.book.description}
                            </p>
                        </div>
                        <p className="mb-4 text-sm font-bold tracking-widest uppercase">
                            Reviews
                        </p>
                        <div className="max-w-lg shadow-md">
                            <form action="" className="w-full p-4">
                                <label className="block mb-2">
                                    <span className="text-gray-600">
                                        Add a Review
                                    </span>
                                    <textarea
                                        className="block w-full mt-1 rounded"
                                        rows="3"
                                    ></textarea>
                                </label>
                                <Button>Comment</Button>
                            </form>
                        </div>
                    </div>
                    <div>
                        <div className="max-w-sm">
                            <Card
                                imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
                                imgSrc={
                                    base_url + "/images/" + props.book.image
                                }
                            >
                                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                    {props.book.title}
                                </h5>
                                <div className="flex items-center justify-between">
                                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                                        {props.book.author}
                                    </span>
                                    <InertiaLink as="a">
                                        <Button>Add To Reading List</Button>
                                    </InertiaLink>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default BookDetails;

import Button from "@/Components/Button";
import Footer from "@/Components/Footer";
import Model from "@/Components/Model";
import Navbar from "@/Components/Navbar";
import { Card } from "flowbite-react";
import { useForm } from "@inertiajs/inertia-react";

import React from "react";
function BookDetails(props) {
    console.log(props);
    const { data, setData, post, processing, errors, reset } = useForm({
        item_id: props.item.id,
        // user_id: props.auth.id,
        item_type: props.type,
    });
    const submit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("item_id", data.item_id);
        formData.append("item_name", data.user_id);
        formData.append("item_type", data.item_type);
        post(base_url + "/bookshelf/", formData, {
            forceFormData: true,
        });
    };
    return (
        <>
            <Navbar props={{ ...props }} />
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
                    <div>
                        <div className="max-w-sm" style={{ width: "500px" }}>
                            <Card
                                imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
                                imgSrc={
                                    base_url + "/images/" + props.item.image
                                }
                            >
                                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                    {props.item.title}
                                </h5>
                                <div className="flex items-center justify-between">
                                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                                        {props.item.author}
                                    </span>

                                    <form onSubmit={submit}>
                                        <Button processing={processing}>
                                            Add To Bookshelf
                                        </Button>
                                    </form>
                                </div>
                            </Card>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center">
                        <div className="max-w-xl mb-6">
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-italic tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                                <b>Title : </b>
                                {props.item.title}
                            </h2>
                            <h3 className="max-w-lg mb-6 font-sans text-3xl font-italic tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                                <b>Author : </b>
                                {props.item.author}
                            </h3>
                            <h4 className="max-w-lg mb-6 font-sans text-3xl font-italic tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                                <b>Date : </b>
                                {props.item.date}
                            </h4>
                            <p className="text-base text-gray-700 md:text-lg">
                                <b>Description : </b>
                                {props.item.description}
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
                </div>
            </div>
            <Footer />
        </>
    );
}

export default BookDetails;

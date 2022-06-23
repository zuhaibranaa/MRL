import React, { useEffect, useRef } from "react";
import Button from "@/Components/Button";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import { Head, Link, useForm } from "@inertiajs/inertia-react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import { Textarea } from "flowbite-react";

function CreateStory({ props, status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        title: "",
        image: "",
        content: "",
        description: "",
    });
    const imageRef = useRef();

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("content", data.content);
        formData.append("description", data.description);
        formData.append("image", imageRef.current.files[0]);

        Inertia.post(route("story"), formData, {
            forceFormData: true,
        });
    };
    return (
        <>
            <Navbar props={{ ...props }} />
            <div className=" mt-5 mb-5 min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-slate-50">
                <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                    <form onSubmit={submit}>
                        <div>
                            <Label forInput="title" value="Title" />

                            <Input
                                type="text"
                                name="title"
                                value={data.title}
                                className="mt-1 block w-full"
                                isFocused={true}
                                handleChange={onHandleChange}
                            />
                        </div>
                        <div>
                            <Label forInput="image" value="Image" />

                            <Input
                                type="file"
                                name="image"
                                ref={imageRef}
                                value={data.image}
                                className="mt-1 block w-full"
                                isFocused={true}
                                handleChange={onHandleChange}
                            />
                        </div>
                        <div>
                            <Label forInput="content" value="Content" />

                            <Textarea
                                name="content"
                                value={data.content}
                                className="mt-1 block w-full"
                                isFocused={true}
                                handleChange={onHandleChange}
                            />
                        </div>
                        <div>
                            <Label forInput="description" value="Description" />

                            <Input
                                type="text"
                                name="description"
                                value={data.description}
                                className="mt-1 block w-full"
                                isFocused={true}
                                handleChange={onHandleChange}
                            />
                        </div>

                        <div className="flex items-center justify-end mt-4">
                            <Button className="ml-4" processing={processing}>
                                Submit
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default CreateStory;

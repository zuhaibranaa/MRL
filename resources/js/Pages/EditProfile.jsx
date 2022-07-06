import React, { useEffect, useRef, useState } from "react";
import Button from "@/Components/Button";
import Guest from "@/Layouts/Guest";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import ValidationErrors from "@/Components/ValidationErrors";
import { Head, Link, useForm } from "@inertiajs/inertia-react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

export default function EditProfile(props) {
    console.log(props);
    const imageRef = useRef();
    const { data, setData, put, processing, errors, reset } = useForm({
        name: props.auth.name,
        image: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
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
        formData.append("name", data.name);
        formData.append("password", data.password);
        formData.append("password_confirmation", data.password_confirmation);
        formData.append("image", imageRef.current.files[0]);
        put(base_url + "/profile/" + props.auth.id, formData, {
            forceFormData: true,
        });
    };

    return (
        <>
            <Navbar props={{ ...props }} />
            <Guest>
                <Head title="Update User" />

                <ValidationErrors errors={errors} />

                <form onSubmit={submit}>
                    <div>
                        <Label forInput="name" value="Name" />

                        <Input
                            type="text"
                            name="name"
                            value={data.name}
                            className="mt-1 block w-full"
                            autoComplete="name"
                            isFocused={true}
                            handleChange={onHandleChange}
                        />
                    </div>

                    <div className="mt-4">
                        <label
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            htmlFor="file_input"
                        >
                            Upload image
                        </label>
                        <input
                            className="p-1 block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                            aria-describedby="file_input_help"
                            ref={imageRef}
                            id="file_input"
                            type="file"
                        />
                        <p
                            className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                            id="file_input_help"
                        >
                            SVG, PNG, JPG or GIF.
                        </p>
                    </div>
                    <div className="mt-4">
                        <Label forInput="password" value="Password" />

                        <Input
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            handleChange={onHandleChange}
                        />
                    </div>

                    <div className="mt-4">
                        <Label
                            forInput="password_confirmation"
                            value="Confirm Password"
                        />

                        <Input
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            className="mt-1 block w-full"
                            handleChange={onHandleChange}
                        />
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        <Button className="ml-4" processing={processing}>
                            Update User
                        </Button>
                    </div>
                </form>
            </Guest>
            <Footer />
        </>
    );
}

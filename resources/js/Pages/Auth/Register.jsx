import React, { useEffect, useRef, useState } from "react";
import Button from "@/Components/Button";
import Guest from "@/Layouts/Guest";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import ValidationErrors from "@/Components/ValidationErrors";
import { Head, Link, useForm } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

export default function Register() {
    const imageRef = useRef();
    // const [name, setName] = useState();
    // const [email, setEmail] = useState();
    // const [gender, setGender] = useState();
    // const [DOB, setDOB] = useState();
    // const [password, setPassword] = useState();
    // const [password_confirmation, setPasswordConfirmation] = useState();
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        gender: "",
        DOB: "",
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
        formData.append("email", data.email);
        formData.append("gender", data.gender);
        formData.append("DOB", data.DOB);
        formData.append("password", data.password);
        formData.append("password_confirmation", data.password_confirmation);
        formData.append("image", imageRef.current.files[0]);

        Inertia.post(route("register"), formData, {
            forceFormData: true,
        });
    };

    return (
        <Guest>
            <Head title="Register" />

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
                        required
                    />
                </div>

                <div className="mt-4">
                    <Label forInput="email" value="Email" />

                    <Input
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        handleChange={onHandleChange}
                        required
                    />
                </div>
                <div className="mt-4">
                    <Label forInput="DOB" value="Date Of Birth" />

                    <Input
                        type="date"
                        name="DOB"
                        value={data.DOB}
                        className="mt-1 block w-full"
                        handleChange={onHandleChange}
                        required
                    />
                </div>
                <div className="mt-4">
                    <Label forInput="gender" value="Gender" />
                    <div className="mt-1 ml-2 flex w-full">
                        <Label forInput="Male" className="ml-2" value="Male" />
                        <Input
                            id="Male"
                            type="radio"
                            name="gender"
                            value="Male"
                            className="ml-2"
                            handleChange={onHandleChange}
                            required
                        />
                        <Label
                            forInput="Female"
                            className="ml-2"
                            value="Female"
                        />
                        <Input
                            type="radio"
                            id="Female"
                            className="ml-2"
                            name="gender"
                            value="Female"
                            handleChange={onHandleChange}
                            required
                        />
                    </div>
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
                        required
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
                        required
                    />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route("login")}
                        className="underline text-sm text-gray-600 hover:text-gray-900"
                    >
                        Already registered?
                    </Link>

                    <Button className="ml-4" processing={processing}>
                        Register
                    </Button>
                </div>
            </form>
        </Guest>
    );
}

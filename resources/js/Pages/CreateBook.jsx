import React, { useEffect, useRef } from "react";
import Button from "@/Components/Button";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import { Head, Link, useForm } from "@inertiajs/inertia-react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import { Inertia } from "@inertiajs/inertia";
function CreateBook({ props, status, canResetPassword, category }) {
    console.log(category);
    const { data, setData, post, processing, errors, reset } = useForm({
        title: "",
        image: "",
        description: "",
        author: "",
        date: "",
        genre: "",
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
        formData.append("author", data.author);
        formData.append("date", data.date);
        formData.append("genre", data.genre);
        formData.append("description", data.description);
        formData.append("image", imageRef.current.files[0]);
        if (window.location.href == base_url + "/book/create") {
            Inertia.post(base_url + "/book", formData, {
                forceFormData: true,
            });
        } else {
            Inertia.put(base_url + "/" + props.book_id + "/edit", formData, {
                forceFormData: true,
            });
        }
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
                            <div className="mt-4">
                                <label
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    htmlFor="file_input"
                                >
                                    Upload image
                                </label>
                                <input
                                    onChange={(e) => onHandleChange(e)}
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
                        </div>
                        <div>
                            <Label forInput="description" value="Description" />

                            <Input
                                type="text"
                                name="description"
                                value={data.description}
                                className="mt-1 block w-full"
                                handleChange={onHandleChange}
                            />
                        </div>
                        <div>
                            <Label forInput="author" value="Author" />

                            <Input
                                type="text"
                                name="author"
                                value={data.author}
                                className="mt-1 block w-full"
                                handleChange={onHandleChange}
                            />
                        </div>
                        <div>
                            <Label forInput="date" value="Date" />

                            <Input
                                type="date"
                                name="date"
                                value={data.date}
                                className="mt-1 block w-full"
                                handleChange={onHandleChange}
                            />
                        </div>
                        <div>
                            <Label forInput="genre" value="Genre" />
                            <select
                                name="genre"
                                className="mt-1 block w-full"
                                value={data.genre}
                                onChange={onHandleChange}
                            >
                                {category.map(({ id, name }, index) => (
                                    <option value={id}>{name}</option>
                                ))}
                            </select>
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

export default CreateBook;

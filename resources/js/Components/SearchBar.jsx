import { useForm } from "@inertiajs/inertia-react";
import React from "react";
import Button from "@/Components/Button";
import Input from "@/Components/Input";

function SearchBar(props) {
    const { data, setData, post, processing, errors, reset } = useForm({
        title: "",
    });
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
        post(route("search"));
    };
    return (
        <>
            <li>
                <form onSubmit={submit}>
                    {/* <div>
                        <Input
                            type="text"
                            name="title"
                            value={data.title}
                            className="mt-1 block w-full"
                            isFocused={true}
                            handleChange={onHandleChange}
                        />
                    </div> */}
                    <div className="flex justify-center">
                        <div className="xl:w-96">
                            <div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
                                <Input
                                    type="search"
                                    name="title"
                                    value={data.title}
                                    className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Search"
                                    isFocused={true}
                                    handleChange={onHandleChange}
                                    aria-label="Search"
                                    aria-describedby="button-addon3"
                                />
                                <Button
                                    className="btn inline-block px-6 py-2 border-2 border-blue-600 text-yellow-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                    processing={processing}
                                >
                                    Search
                                </Button>
                            </div>
                        </div>
                    </div>
                </form>
            </li>
        </>
    );
}

export default SearchBar;

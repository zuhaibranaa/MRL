import React from "react";
import { useState, useContext } from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import { Dropdown, Avatar } from "flowbite-react";

function Navbar({ auth }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    function getAuthRoutes(auth) {
        if (auth) {
            return (
                <>
                    <li>
                        <InertiaLink
                            href="/"
                            aria-label="Books pricing"
                            title="Books pricing"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                            My BookShelf
                        </InertiaLink>
                    </li>
                </>
            );
        }
    }
    function validateAuth(auth) {
        if (auth) {
            return (
                <>
                    <Dropdown
                        label={
                            <Avatar
                                alt="User settings"
                                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                                rounded={true}
                            />
                        }
                        arrowIcon={false}
                        inline={true}
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">{auth.name}</span>
                            <span className="block truncate text-sm font-medium">
                                {auth.email}
                            </span>
                        </Dropdown.Header>
                        <Dropdown.Item>Dashboard</Dropdown.Item>
                        <Dropdown.Item>Settings</Dropdown.Item>
                        <Dropdown.Item>Earnings</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>
                            <InertiaLink
                                href={route("logout")}
                                method="POST"
                                as="button"
                            >
                                Sign out
                            </InertiaLink>
                        </Dropdown.Item>
                    </Dropdown>
                </>
            );
        } else {
            return (
                <>
                    <li>
                        <InertiaLink
                            href={route("login")} //{base_url + "/login"}
                            aria-label="Sign in"
                            title="Sign in"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                            Sign in
                        </InertiaLink>
                    </li>
                    <li>
                        <InertiaLink
                            href={route("register")}
                            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                            aria-label="Sign up"
                            title="Sign up"
                        >
                            Sign up
                        </InertiaLink>
                    </li>
                </>
            );
        }
    }
    return (
        <div className="bg-white">
            <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="relative flex items-center justify-between">
                    <div className="flex items-center">
                        <InertiaLink
                            href="/"
                            aria-label="MRL"
                            title="MRL"
                            className="inline-flex items-center mr-8"
                        >
                            <svg
                                className="w-8 text-deep-purple-accent-400"
                                viewBox="0 0 24 24"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                stroke="currentColor"
                                fill="none"
                            >
                                <rect x="3" y="1" width="7" height="12" />
                                <rect x="3" y="17" width="7" height="6" />
                                <rect x="14" y="1" width="7" height="6" />
                                <rect x="14" y="11" width="7" height="12" />
                            </svg>
                            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                                MRL
                            </span>
                        </InertiaLink>
                        <ul className="flex items-center hidden space-x-8 lg:flex">
                            <li>
                                <InertiaLink
                                    href={base_url + "/book"}
                                    aria-label="Our Books"
                                    title="Our Books"
                                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                >
                                    Books
                                </InertiaLink>
                            </li>
                            <li>
                                <InertiaLink
                                    href={base_url + "/story"}
                                    aria-label="Our Books"
                                    title="Our Books"
                                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                >
                                    Stories
                                </InertiaLink>
                            </li>
                            {getAuthRoutes(auth)}
                        </ul>
                    </div>
                    <ul className="flex items-center hidden space-x-8 lg:flex">
                        <li>
                            <form>
                                <label
                                    htmlFor="default-search"
                                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
                                >
                                    Search
                                </label>
                                <div className="relative">
                                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                        <svg
                                            className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                            ></path>
                                        </svg>
                                    </div>
                                    <input
                                        type="search"
                                        id="default-search"
                                        className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Search"
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        Search
                                    </button>
                                </div>
                            </form>
                        </li>
                        {validateAuth(auth)}
                    </ul>
                    <div className="lg:hidden">
                        <button
                            aria-label="Open Menu"
                            title="Open Menu"
                            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <svg
                                className="w-5 text-gray-600"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                                />
                            </svg>
                        </button>
                        {isMenuOpen && (
                            <div className="absolute top-0 left-0 w-full">
                                <div className="p-5 bg-white border rounded shadow-sm">
                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <InertiaLink
                                                href="/"
                                                aria-label="MRL"
                                                title="MRL"
                                                className="inline-flex items-center"
                                            >
                                                <svg
                                                    className="w-8 text-deep-purple-accent-400"
                                                    viewBox="0 0 24 24"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeMiterlimit="10"
                                                    stroke="currentColor"
                                                    fill="none"
                                                >
                                                    <rect
                                                        x="3"
                                                        y="1"
                                                        width="7"
                                                        height="12"
                                                    />
                                                    <rect
                                                        x="3"
                                                        y="17"
                                                        width="7"
                                                        height="6"
                                                    />
                                                    <rect
                                                        x="14"
                                                        y="1"
                                                        width="7"
                                                        height="6"
                                                    />
                                                    <rect
                                                        x="14"
                                                        y="11"
                                                        width="7"
                                                        height="12"
                                                    />
                                                </svg>
                                                <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                                                    MRL
                                                </span>
                                            </InertiaLink>
                                        </div>
                                        <div>
                                            <button
                                                aria-label="Close Menu"
                                                title="Close Menu"
                                                className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                                onClick={() =>
                                                    setIsMenuOpen(false)
                                                }
                                            >
                                                <svg
                                                    className="w-5 text-gray-600"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        fill="currentColor"
                                                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <nav>
                                        <ul className="space-y-4">
                                            <li>
                                                <InertiaLink
                                                    href={base_url + "/book"}
                                                    aria-label="Our Books"
                                                    title="Our Books"
                                                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    Books
                                                </InertiaLink>
                                            </li>
                                            <li>
                                                <InertiaLink
                                                    href={base_url + "/story"}
                                                    aria-label="Our Books"
                                                    title="Our Books"
                                                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    Stories
                                                </InertiaLink>
                                            </li>
                                            {getAuthRoutes(auth)}
                                            <li>
                                                <form>
                                                    <label
                                                        htmlFor="default-search"
                                                        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
                                                    >
                                                        Search
                                                    </label>
                                                    <div className="relative">
                                                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                                            <svg
                                                                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                viewBox="0 0 24 24"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    stroke-linejoin="round"
                                                                    strokeWidth="2"
                                                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                                                ></path>
                                                            </svg>
                                                        </div>
                                                        <input
                                                            type="search"
                                                            id="default-search"
                                                            className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                            placeholder="Search"
                                                            required
                                                        />
                                                        <button
                                                            type="submit"
                                                            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                                        >
                                                            Search
                                                        </button>
                                                    </div>
                                                </form>
                                            </li>
                                            {validateAuth(auth)}
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;

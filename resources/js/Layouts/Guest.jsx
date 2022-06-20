import React from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/inertia-react";
import NavLink from "@/Components/NavLink";

export default function Guest({ children }) {
    return (
        <div className=" mt-5 mb-5 min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-slate-50">
            <div>
                <Link href="/">
                    <ApplicationLogo className="w-20 h-20" />
                </Link>
                {/* <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                    <NavLink
                        href={route("book")}
                        active={route().current("book")}
                    >
                        Book
                    </NavLink>
                </div> */}
            </div>

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}

import Navbar from "@/Components/Navbar";
import { Footer } from "flowbite-react";
import React from "react";

function BookContents(props) {
    return (
        <>
            <Navbar props={{ ...props }} />
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full bg-slate-50 lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-6 row-gap-5 lg:grid-cols-3">
                    <div>
                        <img
                            className="object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96"
                            src="https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                            alt=""
                        />
                        <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                            A slice of heaven
                        </h5>
                        <p className="text-gray-700">
                            O for awesome, this chocka full cuzzie is as rip-off
                            as a cracker. Meanwhile, in behind the bicycle shed,
                            Hercules Morse.
                        </p>
                    </div>
                    <div>
                        <img
                            className="object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96"
                            src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                            alt=""
                        />
                        <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                            Disrupt inspire
                        </h5>
                        <p className="text-gray-700">
                            I'll be sure to note that in my log. Smooth as an
                            android's bottom, eh, Data? When has justice ever
                            been as simple as a rule book?
                        </p>
                    </div>
                    <div>
                        <img
                            className="object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96"
                            src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                            alt=""
                        />
                        <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                            Storage shed
                        </h5>
                        <p className="text-gray-700">
                            Yolo ipsum dolor sit amet, consectetur adipiscing
                            elit. Ut ac suscipit leo. Carpe diem vulputate est
                            nec commodo rutrum.
                        </p>
                    </div>
                </div>
                <br />
                <div className="grid gap-6 row-gap-5 lg:grid-cols-3">
                    <div>
                        <img
                            className="object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96"
                            src="https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                            alt=""
                        />
                        <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                            A slice of heaven
                        </h5>
                        <p className="text-gray-700">
                            O for awesome, this chocka full cuzzie is as rip-off
                            as a cracker. Meanwhile, in behind the bicycle shed,
                            Hercules Morse.
                        </p>
                    </div>
                    <div>
                        <img
                            className="object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96"
                            src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                            alt=""
                        />
                        <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                            Disrupt inspire
                        </h5>
                        <p className="text-gray-700">
                            I'll be sure to note that in my log. Smooth as an
                            android's bottom, eh, Data? When has justice ever
                            been as simple as a rule book?
                        </p>
                    </div>
                    <div>
                        <img
                            className="object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96"
                            src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                            alt=""
                        />
                        <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                            Storage shed
                        </h5>
                        <p className="text-gray-700">
                            Yolo ipsum dolor sit amet, consectetur adipiscing
                            elit. Ut ac suscipit leo. Carpe diem vulputate est
                            nec commodo rutrum.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default BookContents;

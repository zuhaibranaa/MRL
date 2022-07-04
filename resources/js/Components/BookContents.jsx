import { InertiaLink, Link } from "@inertiajs/inertia-react";
import React from "react";

function BookContents({ props }) {
    let fullRows = props.items.length / 3;
    if (fullRows % 1 != 0) {
        fullRows++;
    }
    fullRows = Math.trunc(fullRows);
    let rows = [];
    let item = 0;
    let cols = [];
    const d = () => {
        for (let x = 0; x < props.items.length; x++) {
            cols.push(
                <InertiaLink
                    key={item}
                    href={
                        base_url + "/" + props.type + "/" + props.items[item].id
                    }
                    as="a"
                >
                    <div>
                        <img
                            className="object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96"
                            src={
                                base_url + "/images/" + props.items[item].image
                            }
                            alt=""
                        />
                        <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                            {props.items[item].title}
                        </h5>
                        <p className="text-gray-700">
                            {props.items[item].description}
                        </p>
                    </div>
                </InertiaLink>
            );
            item++;
            if (item % 3 == 0) {
                break;
            }
        }
        return cols;
    };
    for (let i = 0; i < fullRows; i++) {
        rows.push(
            <div
                key={i}
                className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full bg-slate-50 lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
            >
                <div className="grid gap-6 row-gap-5 lg:grid-cols-3">{d()}</div>
            </div>
        );
    }
    return <>{rows}</>;
}

export default BookContents;

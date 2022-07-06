import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import {
    Head,
    Link,
    useForm,
    InertiaLink,
    Inertia,
} from "@inertiajs/inertia-react";

import { Button, Table } from "flowbite-react";
import React from "react";

function BookShelf(props) {
    console.log(props);
    const a = [];
    props.items.forEach((e) => {
        let typee = "story";
        let title = null;
        if (e.story === null) {
            typee = "book";
            title = props.books[e.id - 1].title;
        }
        a.push(
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {title}
                </Table.Cell>
                <Table.Cell>{typee}</Table.Cell>
                <Table.Cell>Reading</Table.Cell>
                <Table.Cell>
                    <Button
                        onClick={() => {
                            Inertia.delete(base_url + "/bookshelf/" + e.id);
                        }}
                    >
                        Delete
                    </Button>
                </Table.Cell>
            </Table.Row>
        );
    });
    return (
        <>
            <Navbar props={{ ...props }} />
            <div style={{ margin: "5%" }}>
                <Table hoverable={true}>
                    <Table.Head>
                        <Table.HeadCell>Title</Table.HeadCell>
                        <Table.HeadCell>Type</Table.HeadCell>
                        <Table.HeadCell>Status</Table.HeadCell>
                        <Table.HeadCell>
                            <span className="sr-only">Edit</span>
                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">{a}</Table.Body>
                </Table>
            </div>
            <Footer />
        </>
    );
}

export default BookShelf;

import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import { Table } from "flowbite-react";
import React from "react";

function BookShelf(props) {
    console.log(props.items);
    const a = [];
    props.items.forEach((e) => {
        a.push(
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {e.item_id}
                </Table.Cell>
                <Table.Cell>{e.book ? "book" : "story"}</Table.Cell>
                <Table.Cell>{e.status}</Table.Cell>
                <Table.Cell>
                    <a
                        href="/tables"
                        className="font-medium text-red-600 hover:underline dark:text-blue-500"
                    >
                        Delete
                    </a>
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

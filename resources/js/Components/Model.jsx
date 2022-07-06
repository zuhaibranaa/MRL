import { Button, Modal, Label, TextInput } from "flowbite-react";
import React from "react";
import { useForm } from "@inertiajs/inertia-react";
import { useState } from "react";

function Model({ props }) {
    console.log(props);
    const { data, setData, post, processing, errors, reset } = useForm({
        item_id: props.item.id,
        user_id: props.auth.id,
        item_type: props.type,
    });
    const submit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("item_id", data.item_id);
        formData.append("item_name", data.user_id);
        formData.append("item_type", data.item_type);
        post(base_url + "/bookshelf/", formData, {
            forceFormData: true,
        });
    };

    const [visible, setvisibility] = useState(false);
    return (
        <>
            <React.Fragment>
                <Button
                    onClick={() => {
                        setvisibility(true);
                    }}
                >
                    Toggle modal
                </Button>
                <Modal
                    show={visible}
                    size="md"
                    popup={true}
                    onClose={() => {
                        setvisibility(false);
                    }}
                >
                    <Modal.Header />
                    <Modal.Body>
                        <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
                            <div className="w-full">
                                <form onSubmit={submit}>
                                    <Button processing={processing}>
                                        Add To Bookshelf
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            </React.Fragment>
        </>
    );
}

export default Model;

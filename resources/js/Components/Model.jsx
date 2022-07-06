import { Button, Modal, Label, TextInput } from "flowbite-react";
import React from "react";
import { useState } from "react";

function Model({ props }) {
    console.log(props);

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
                        <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8"></div>
                    </Modal.Body>
                </Modal>
            </React.Fragment>
        </>
    );
}

export default Model;

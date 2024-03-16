import React, { useState } from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Input,
} from "@nextui-org/react";

function UserAdded() {
    const [isOpen, setIsOpen] = useState(false);
    const [userName, setUserName] = useState("");

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleInputChange = (e) => {
        setUserName(e.target.value);
    };

    const handleAddUser = () => {
        if (userName.trim() !== "") {

            // Add logic for adding user here
            console.log("User added:", userName);

        }
        setUserName("");
        handleClose();
    };
    

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                backgroundColor: "white",
            }}
        >
            <Button color="primary" onClick={handleOpen}>
                Add New User
            </Button>
            <Modal isOpen={isOpen} onClose={handleClose} placement="top-center" backdrop="blur">
                <ModalContent className="max-w-xs"> 
                    <ModalHeader>Add New User</ModalHeader> 
                    <ModalBody>
                        <Input
                            isClearable
                            isRequired
                            autoFocus
                            label="User Name"
                            placeholder="Enter the user name"
                            variant="bordered"
                            value={userName}
                            onChange={handleInputChange}
                            onClear={() => setUserName(null)}
                           
                        />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={handleAddUser}>
                            Add User
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    );
}

export default UserAdded;

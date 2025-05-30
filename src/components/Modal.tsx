import React, { useEffect, useState } from "react";
import { Backdrop, ModalStyle } from "./Modal.styled";

type props = {
    children: any;
    onClose: any;
}

function Modal({children, onClose}: props) {

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
            onClose();
        }
    } 

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
    }, [])

    return (
        <>
            <Backdrop onClick={onClose} />
            <ModalStyle open>
                {children}
            </ModalStyle>
        </>
    )
}

export default Modal;
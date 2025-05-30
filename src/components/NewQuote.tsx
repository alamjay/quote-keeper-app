import React from "react";
import Modal from "./Modal";
import { ButtonGroup, NewQuoteStyle, QuoteInput, SubmitButton } from "./NewQuote.styled";


function NewQuote({onClose}: any) {
    return (
        <Modal onClose={onClose} >
            <form>
                <NewQuoteStyle>
                <h3 style={{ color: "#fff", marginBottom: "10px" }}>Add a New Quote</h3>
                <QuoteInput type="text" placeholder="Enter your quote here..." />
                <ButtonGroup>
                    <button onClick={onClose}>Cancel</button>
                    <SubmitButton type="submit" disabled>
                        Submit
                    </SubmitButton>
                </ButtonGroup>
            </NewQuoteStyle>
            </form>
        </Modal>
    );
}

export default NewQuote;
import React from "react";
import { GhostCardStyle } from "./GhostCard.styled";
import { FaPlus } from "react-icons/fa";

function GhostCard() {
    return (
        <GhostCardStyle>
            <FaPlus size={50} />
            <h5>Add New Quote</h5>
        </GhostCardStyle>
    );
}

export default GhostCard;
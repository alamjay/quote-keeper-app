import styled from 'styled-components';

// export const GhostCard = styled.button`
//     border-radius: 10px;
//     padding: 20px;
//     width: 340px;
//     height: 230px;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     text-align: center;
//     cursor: pointer;
//     color: #ffffff;
//     border: 2px dashed #ffffff;
//     font-size: 1.5rem;
//     font-weight: 600;
//     background-color: transparent;

//     h5 {
//         margin-top: 10px; /* Reduce the gap between the icon and the text */
//         margin-bottom: 0; /* Optional: Remove bottom margin if unnecessary */
//     }
// `;


export const NewQuoteStyle = styled.div`
    width: 400px;
    height: auto;
    background-color: #6a1b9a; /* Purple background */
    padding: 20px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px; /* Add spacing between elements */
    position: relative;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 8px; /* Thick border at the top */
        background-color: #4a148c; /* Darker purple for contrast */
    }
`;

export const QuoteInput = styled.input`
    width: 100%;
    height: 50px;
    background-color: #f3e5f5; /* Light purple background */
    text-align: left;
    padding: 10px;
    border: 2px solid #4a148c; /* Purple border */
    border-radius: 5px;
    font-size: 1rem;
    color: #4a148c; /* Dark purple text */
    box-sizing: border-box;
    outline: none;

    &:focus {
        border-color: #6a1b9a; /* Highlight border on focus */
        box-shadow: 0 0 5px rgba(106, 27, 154, 0.5); /* Subtle glow */
    }

    &::placeholder {
        color: #9c27b0; /* Placeholder text color */
    }
`;

export const ButtonGroup = styled.div`
    display: flex;
    justify-content: end;
    width: 50%;
    gap: 10px;
    padding-left: 50%;

    button {
        flex: 1;
        height: 40px;
        border: 2px solid #4a148c; /* Purple border */
        border-radius: 8px;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        background-color: #d1c4e9; /* Light purple background */
        color: #4a148c; /* Dark purple text */
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2); /* Add box shadow */

        &:hover {
            background-color: #b39ddb; /* Slightly darker purple on hover */
        }

        &:active {
            transform: scale(0.95); /* Slightly shrink on click */
        }
    }
`;

export const SubmitButton = styled.button`
    &:disabled {
        background-color: #ede7f6; /* Lighter purple background for disabled state */
        color: #b39ddb; /* Muted purple text for disabled state */
        cursor: not-allowed; /* Change cursor to indicate it's not clickable */
        border: 2px solid #d1c4e9; /* Keep the light purple border */
        box-shadow: none; /* Remove shadow for disabled state */
    }
`;
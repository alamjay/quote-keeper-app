import styled from "styled-components";

// export const CardStyle = styled.button`
//     background-color: #fff;
//     border-radius: 10px;
//     padding: 20px;
//     box-shadow: 4px 4px 17px rgba(0, 0, 0, 1);
//     width: 340px;
//     height: 190px;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     text-align: center;
//     cursor: pointer;
//     color:rgb(94, 92, 92);
//     font-size: 1rem;
// `;

export const CardStyle = styled.div`
    background-color: #fff;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 4px 4px 17px rgba(0, 0, 0, 0.1);
    // width: 100%; /* Make the card width responsive */
    max-width: 340px; /* Set a maximum width for the card */
    height: 190px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;
    color: rgb(94, 92, 92);
    font-size: 1rem;
`;
import styled, { keyframes } from "styled-components";

export const gradientAnimation = keyframes`
  0% {
    border-image-source: linear-gradient(to right, rgb(33, 150, 243), rgb(156, 39, 176));
  }
  50% {
    border-image-source: linear-gradient(to right, rgb(156, 39, 176), rgb(33, 150, 243));
  }
  100% {
    border-image-source: linear-gradient(to right, rgb(33, 150, 243), rgb(156, 39, 176));
  }
`;

export const Header = styled.header`
    padding: 20px 20px;
    font-size: 2rem;
    color: #fff;
    font-weight: 600;
    border-bottom: 4px solid;
    border-image: linear-gradient(to right,rgb(18, 72, 198),rgb(75, 14, 168)) 1;
    animation: ${gradientAnimation} 3s linear infinite;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
`;

// export const Container = styled.div`
//     display: grid;
//     grid-template-columns: repeat(auto-fit, minmax(316px, 1fr)); /* Responsive grid */
//     gap: 20px; /* Space between cards */
//     justify-content: center; /* Center the cards horizontally */
//     align-items: start; /* Align cards to the top */
//     padding: 20px; /* Reduce padding around the container */
//     margin: 0 auto; /* Center the container */
//     width: 100%; /* Full width */
//     max-width: 100%; /* Remove unnecessary width constraints */
//     box-sizing: border-box; /* Ensure padding is included in the width */
// `;

export const Container = styled.div`
    display: grid;
    grid-template-columns: 340px 340px 340px 340px 340px;
    grid-template-rows: auto;
    padding: 20px;
    row-gap: 20px;
    column-gap: 15px;
    justify-content: center;
`;
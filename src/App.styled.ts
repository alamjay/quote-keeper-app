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
    padding: 20px 150px 20px 20px;
    margin-bottom: 2rem;
    font-size: 2rem;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 600;
    border-bottom: 4px solid;
    border-image: linear-gradient(to right,rgb(18, 72, 198),rgb(75, 14, 168)) 1;
    animation: ${gradientAnimation} 3s linear infinite;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);

    button {
      height: 50px;
      padding: 0 20px; /* Add horizontal padding */
      border-radius: 8px; /* Slightly round corners */
      background-color: #d1c4e9; /* Light purple background */
      color: #4a148c; /* Dark purple text */
      font-size: 1rem; /* Adjust font size */
      font-weight: 600; /* Make text bold */
      border: none; /* Remove default border */
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2); /* Add box shadow */
      cursor: pointer; /* Change cursor to pointer */
      transition: all 0.3s ease; /* Smooth transition for hover effects */

      &:hover {
          background-color: #b39ddb; /* Slightly darker purple on hover */
          box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.3); /* Enhance shadow on hover */
      }

      &:active {
          transform: scale(0.98); /* Slightly shrink button on click */
      }
    }
`;

export const Container = styled.div`
    display: grid;
    grid-template-columns: 340px 340px 340px 340px 340px;
    grid-template-rows: auto;
    padding: 20px;
    row-gap: 20px;
    column-gap: 15px;
    justify-content: center;
`;
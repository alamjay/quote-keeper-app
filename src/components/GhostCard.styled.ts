import styled from 'styled-components';

export const GhostCardStyle = styled.button`
    border-radius: 10px;
    padding: 20px;
    width: 340px;
    height: 230px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;
    color: #ffffff;
    border: 2px dashed #ffffff;
    font-size: 1.5rem;
    font-weight: 600;
    background-color: transparent;

    h5 {
        margin-top: 10px; /* Reduce the gap between the icon and the text */
        margin-bottom: 0; /* Optional: Remove bottom margin if unnecessary */
    }
`;
import styled from "styled-components"

export const ButtonGlobal = styled.button`
    height: 50px;
    border-radius: 8px;
    font-weight: 500;
    background: #3f3b3b;
    color: white;
    padding: 0 32px;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    border: 0;

    transition: filter 1s;

    img {
        margin-right: 8px;
    }

    &:not(:disabled):hover {
        filter: brightness(0.8);
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`
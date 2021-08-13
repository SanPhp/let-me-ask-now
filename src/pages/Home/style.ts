import styled from "styled-components";


export const PageAuth = styled.div`
    display: flex;
    align-items: stretch;
    height: 100vh;

    aside {
        flex: 7;

        background-color: var(--gray);
        color: var(--white);
        display: flex;
        flex-direction: column;
        justify-content: center;

        padding: 120px 80px;

        img {
            max-width: 320px;
        }

        strong {
           font: 700 36px 'Poppins', sans-serif;
           line-height: 42px;
           margin-top: 16px;
        }

        p {
           font-size: 20px;
           line-height: 32px;
        }
    }

    main {
        flex: 8;

        padding-left: 0 32px;
        display: flex;
         
        align-items: center;
        justify-content: center;
    }
`


export const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 320px;
    align-items: stretch;
    text-align: center;

    > img {
        align-self: center;
    }


    form {
        input {
            height: 50px;
            border-radius: 8px;
            padding: 0 16px;
            background: #fff;
            border: 1px solid gray
        }

        button {
            margin-top: 16px;
        }

        button, input {
            width: 100%;
        }
    }
`

export const Separator = styled.div`
    font-size: 14px;
    color: gray;
    margin: 32px 0;;
    display: flex;
    align-items: center;

    &::before {
        content: '';
        flex: 1;
        height: 1px;
        background: gray;
        margin-right: 16px;
    }

    &::after {
        content: '';
        flex: 1;
        height: 1px;
        background: gray;
        margin-left: 16px;
    }
`

export const CreateRoom = styled.div`
    margin-top: 64px;
    height: 50px;
    border-radius: 8px;
    font-weight: 500;
    background: #ea4335;
    color: #fff;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    border: 0;
    transition: filter 1s;

    img {
        margin-right: 8px; 
    }

    &:hover {
        filter: brightness(0.8);
    }
`
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

    h2 {
        font-size: 24px;
        margin: 64px 0 24px;
        font-family: 'Poppins', sans-serif;
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

    p {
        font-size: 14px;
        color: black;
        margin-top: 16px;
    }

    a {
        color: green;
    }
`
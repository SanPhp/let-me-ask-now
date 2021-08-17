import styled from "styled-components";

export const Questian = styled.div`
    background: #fefefe;
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
    padding: 24px;
    margin-top: 8px;
    margin-bottom: 8px;

    p {
        color: #29292e;
    }

`

export const QuestionFooter = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;

    > div:nth-of-type(2){
        img {
        width: 14px;
    }
    }

    div {
        display: flex;
        align-items: center;

        img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        }
    

    span {
        margin-left: 8px;
        color: #29292e;
        font-size: 14px;
    }

    button {
        border: 0;
        background-color: transparent;
        cursor: pointer;
        transition: filter 0.4s;

        &.like-button {
            display: flex;
            align-items: flex-end;
            color: #737380;
            gap: 8px;


            &.liked {
                color: #835afd;

                svg {
                    stroke: #835afd;
                    fill: #e7e7e7;
                }
            }
        }   

        &:hover {
            filter: brightness(0.7);
        }
    }
    
        
}
`
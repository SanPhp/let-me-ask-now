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

    &.highlighted {
        background-color: #f4f0ff;
        border: 1px solid #835afd;
    }

    &.answered {
        background: #dbdcdd;
        border: none;
    }

`

export const QuestionFooter = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;

     div:nth-of-type(2){

        display: flex;
        gap: 7px;

      button:nth-of-type(1) {
        img {
        width: 20px;
    }
      }
      button:nth-of-type(2) {
        img {
        width: 20px;
    }
      }
      button:nth-of-type(3) {
        img {
        width: 13px;
    }
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
                

                svg {
                    stroke: #835afd;
                    fill: tomato;
                }
            }
        }   

        &:hover {
            filter: brightness(0.7);
        }
    }
    
        
}
`
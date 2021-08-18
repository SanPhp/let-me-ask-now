import { ReactNode } from "react";
import { auth } from "../../services/firebase";
import { Questian, QuestionFooter } from "./style";
import cx from "classnames";


type QuestionProps = {
    content: string;
    author: {
        name: string;
        avatar: string;
    }
    children?: ReactNode
    isAnswered?: boolean
    isHighlighted?: boolean
}

export function Question({ content, author, isAnswered = false, isHighlighted = false, children }: QuestionProps) {
    return (
        <Questian className={cx(
            {answered: isAnswered},
            {highlighted: isHighlighted && !isAnswered}
        )}
        
        >
            <p>{content}</p>
            <QuestionFooter>
                <div>
                    <img src={author.avatar} alt={author.name} />
                    <span>{author.name}</span>
                </div>
                <div>
                    {children}
                </div>
            </QuestionFooter>
        </Questian>
    );
}
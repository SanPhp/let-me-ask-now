import { ReactNode } from "react";
import { auth } from "../../services/firebase";
import { Questian, QuestionFooter } from "./style";

type QuestionProps = {
    content: string;
    author: {
        name: string;
        avatar: string;
    }
    children?: ReactNode
}

export function Question({ content, author, children }: QuestionProps) {
    return (
        <Questian>
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
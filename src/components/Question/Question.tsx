import { auth } from "../../services/firebase";
import { Questian, QuestionFooter } from "./style";

type QuestionProps = {
    content: string;
    author: {
        name: string;
        avatar: string;
    }
}

export function Question({ content, author }: QuestionProps) {
    return (
        <Questian>
            <p>{content}</p>
            <QuestionFooter>
                <div>
                    <img src={author.avatar} alt={author.name} />
                    <span>{author.name}</span>
                </div>
                <div></div>
            </QuestionFooter>
        </Questian>
    );
}
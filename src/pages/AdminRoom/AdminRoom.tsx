import { useHistory, useParams } from "react-router-dom"
import { PageRoom, Header, Main, UserInfo, QuestionList } from "./style"
import logoImg from "../../assets/images/logo.svg"
import { Button } from "../../components/Button/Button"
import { RoomCode } from "../../components/RoomCode/RoomCode"
import { FormEvent, useState } from "react"
import { useAuth } from "../../hooks/userAuth"
import { auth, database } from "../../services/firebase"
import { useEffect } from "react"
import { Question } from "../../components/Question/Question"
import { useRoom } from "../../hooks/useRoom"
import deleteImg from "../../assets/images/delete.svg"


type RoomParams = {
    id: string
}


export function AdminRoom() {
    const history = useHistory();
    const { user } = useAuth();
    const params = useParams<RoomParams>();
    const [newQuestion, setNewQuestion] = useState('');
    const roomId = params.id


    const { title, questions } = useRoom(roomId)


    async function handleEndRoom() {
        await database.ref(`rooms/${roomId}`).update({
            endedAt: new Date(),
        });

        history.push('/')
    }


    async function handleDeleteQuestion(questionId: string) {
        if (window.confirm('Tem certeza que você deseja exluir esta pergunra?')) {
            const questionRef = await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
        }
    }




    async function handleSendQuestion(event: FormEvent) {
        event.preventDefault();

        if (newQuestion.trim() == '') {
            return;
        }

        if (!user) {
            throw new Error('You must be logged in | Você deve estar logado');
        }

        const question = {
            content: newQuestion,
            author: {
                name: user.name,
                avatar: user.avatar,
            },
            isHighlighted: false,
            isAnswered: false
        }

        await database.ref(`rooms/${roomId}/questions`).push(question);

        setNewQuestion('');
    }

    return (
        <PageRoom>
            <Header>
                <div>
                    <a href="/" title="Ir para Home"><img src={logoImg} alt="imagem" /></a>

                    <div>
                        <RoomCode code={roomId} />
                        <Button isOutlined onClick={handleEndRoom}>Encerrar sala</Button>
                    </div>
                </div>
            </Header>


            <Main>
                <div>
                    <h1>Sala {title}</h1>
                    {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
                </div>


                <QuestionList>
                    {questions.map(question => {
                        return (
                            <Question
                                key={question.id}
                                content={question.content}
                                author={question.author}
                            >
                                <button
                                    type="button"
                                    onClick={() => handleDeleteQuestion(question.id)}
                                >
                                    <img src={deleteImg} alt="Remover pergunta" />
                                </button>
                            </Question>
                        )
                    })}
                </QuestionList>

            </Main>
        </PageRoom>
    )
}
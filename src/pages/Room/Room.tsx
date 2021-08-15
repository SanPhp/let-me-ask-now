import { useParams } from "react-router-dom"
import { PageRoom, Header, Main, Form, UserInfo } from "./style"
import logoImg from "../../assets/images/logo.svg"
import { Button } from "../../components/Button/Button"
import { RoomCode } from "../../components/RoomCode/RoomCode"
import { FormEvent, useState } from "react"
import { useAuth } from "../../hooks/userAuth"
import { auth, database } from "../../services/firebase"
import { useEffect } from "react"


type FirebaseQuestions = Record<string, {
    author: {
        name: string;
        avatar: string;
    }
    content: string;
    isAnswered: boolean;
    isHighlighted: boolean;
}>

type Question = {
    id: string;
    author: {
        name: string;
        avatar: string;
    }
    content: string;
    isAnswered: boolean;
    isHighlighted: boolean;
}

type RoomParams = {
    id: string
}

export function Room() {
    const { user } = useAuth();
    const params = useParams<RoomParams>();
    const [newQuestion, setNewQuestion] = useState('');
    const [questions, setQuestions] = useState<Question[]>([]);
    const [title, setTitle] = useState('');

    const roomId = params.id

    useEffect(() => {
        const roomRef = database.ref(`rooms/${roomId}`);

        roomRef.on('value', room => {
            const databaseRoom = room.val();
            const firebaseQuestions: FirebaseQuestions = databaseRoom.questions ?? {};

            const paserdQuestions = Object.entries(firebaseQuestions).map(([key, value]) => {
                return {
                    id: key,
                    content: value.content,
                    author: value.author,
                    isHighlighted: value.isHighlighted,
                    isAnswered: value.isAnswered,
                }
            })

            setTitle(databaseRoom.title);
            setQuestions(paserdQuestions)
        })
    }, [roomId]);

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
                    <RoomCode code={roomId} />
                </div>
            </Header>


            <Main>
                <div>
                    <h1>Sala {title}</h1>
                    { questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
                </div>


                <Form onSubmit={handleSendQuestion}>
                    <textarea
                        placeholder="O que você quer perguntar"
                        onChange={event => setNewQuestion(event.target.value)}
                        value={newQuestion}
                    />

                    <div>
                        {user ? (
                            <UserInfo>
                                <img src={user.avatar} alt={user.name} />
                                <span>{user.name}</span>
                            </UserInfo>
                        ) : (
                            <span>para enviar uma pergunta, <button>faça seu login.</button></span>

                        )}

                        <Button type="submit" disabled={!user}>Enviar pergunta</Button>
                    </div>
                </Form>
            </Main>
        </PageRoom>
    )
}
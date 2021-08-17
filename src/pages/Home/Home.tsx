import illustrationImg from '../../assets/images/illustration.svg'
import logoImg from '../../assets/images/logo.svg'
import googleIconImg from '../../assets/images/google.svg'
import { useHistory } from 'react-router-dom'


import { PageAuth, MainContent, Separator, CreateRoom } from '../Home/style'
import { Button } from '../../components/Button/Button'
import { useAuth } from '../../hooks/userAuth'
import { FormEvent } from 'react'
import { useState } from 'react'
import { database } from '../../services/firebase'

export function Home() {
    const history = useHistory();
    const { user, loginWhithGoogle } = useAuth();
    const [roomCode, setRoomCode] = useState('');


    async function createRoom() {
        if (!user) {
            await loginWhithGoogle()
        }

        history.push('/rooms/new')
    }


    async function handleJoinRoom(event: FormEvent) {
        event.preventDefault();

        if (roomCode.trim() === '') {
            return;
        }

        const roomRef = await database.ref(`rooms/${roomCode}`).get();

        if (!roomRef.exists()) {
            alert('Room does not Exists. | A Sala não existe.');
            return;
        }


        if (roomRef.val().endedAt) {
            alert('Room already closed. | A sala já foi encerrada.')
            return;
        }


        history.push(`/rooms/${roomCode}`);
    }


    return (
        <PageAuth>
            <aside>
                <img src={illustrationImg} alt="Imagem" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire dúvidas da sua audiência em tempo real</p>
            </aside>
            <main>
                <MainContent>
                    <img src={logoImg} alt="Imagem" />

                    <CreateRoom onClick={createRoom} role="button">
                        <img src={googleIconImg} alt="Imagem" />
                        Crie sua sala com o Google
                    </CreateRoom>

                    <Separator>ou entre em uma sala</Separator>
                    <form onSubmit={handleJoinRoom}>
                        <input
                            type="text"
                            placeholder="Digite o código da sala"
                            onChange={event => (setRoomCode(event.target.value))}
                            value={roomCode}
                        />
                        <Button type="submit">Entrar na sala</Button>
                    </form>
                </MainContent>
            </main>
        </PageAuth>
    )
}
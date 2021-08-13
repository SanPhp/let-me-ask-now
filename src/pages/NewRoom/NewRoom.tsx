import illustrationImg from '../../assets/images/illustration.svg'
import logoImg from '../../assets/images/logo.svg'
import  { FormEvent } from "react"
import { PageAuth, MainContent } from '../NewRoom/style'
import { Button } from '../../components/Button/Button'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../../hooks/userAuth'
import { useState } from 'react'
import { database } from '../../services/firebase'

export function NewRoom() {

    const { user } = useAuth()

    const history = useHistory()

    const [newRoom, setNewRoom] = useState('')

    async function handleCreateRoom(event: FormEvent) {
        event.preventDefault()

        //if empty value
        if(newRoom.trim() === ''){
            return;
        }


        const roomRef = database.ref('rooms');

        const firebaseRoom = await roomRef.push({
            title: newRoom,
            authorId: user?.id,
        })

        history.push(`/rooms/${firebaseRoom.key}`)
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
                    <h2>Criar uma nova sala</h2>
                    <form onSubmit={handleCreateRoom}>
                        <input
                            type="text"
                            placeholder="Nome da sala"
                            onChange={event => setNewRoom(event.target.value)}
                            value={newRoom}
                        />
                        <Button type="submit">Cria sala</Button>
                    </form>
                    <p>
                        Quer entrar em uma sala existente: <Link to="/">Clique aqui</Link>
                    </p>

                </MainContent>
            </main>
        </PageAuth>
    )
}
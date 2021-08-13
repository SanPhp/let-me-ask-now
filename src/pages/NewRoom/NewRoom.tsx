import illustrationImg from '../../assets/images/illustration.svg'
import logoImg from '../../assets/images/logo.svg'

import { PageAuth, MainContent } from '../NewRoom/style'
import { Button } from '../../components/Button/Button'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/userAuth'

export function NewRoom() {

    const { user } = useAuth()

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
                    <form>
                        <input
                            type="text"
                            placeholder="Nome da sala"
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
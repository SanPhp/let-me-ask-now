import illustrationImg from '../../assets/images/illustration.svg'
import logoImg from '../../assets/images/logo.svg'
import googleIconImg from '../../assets/images/google.svg'
import { useHistory } from 'react-router-dom'


import { PageAuth, MainContent, Separator, CreateRoom } from '../Home/style'
import { Button } from '../../components/Button/Button'
import { useAuth } from '../../hooks/userAuth'

export function Home() {
    const history = useHistory();
    const { user, loginWhithGoogle } = useAuth()

    async function createRoom(){

        if(!user){
            await loginWhithGoogle()
        }

        history.push('/rooms/new')


        
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
                    <form>
                        <input
                            type="text"
                            placeholder="Digite o código da sala"
                        />
                        <Button type="submit">Entrar na sala</Button>
                    </form>
                </MainContent>
            </main>
            </PageAuth>
    )
}
import { RoomCodeButton } from './style'

import copyImg from '../../assets/images/copy.svg'

type RoomCodeProps = {
    code: string
}

export function RoomCode(props: RoomCodeProps) {
    function copyRoomCodeToClipboard() {
        navigator.clipboard.writeText(props.code)
    }


    return (
        <RoomCodeButton onClick={copyRoomCodeToClipboard}>
            <div>
                <img src={copyImg} alt="Copiar código" title="Copiar código" />
            </div>
            <span>Sala: #{props.code}</span>
        </RoomCodeButton>
    )
}
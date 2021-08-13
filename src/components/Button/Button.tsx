import { ButtonHTMLAttributes } from 'react'
import { ButtonGlobal } from './style'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function Button(props: ButtonProps){
    return(
        <ButtonGlobal {...props} />

    )
}
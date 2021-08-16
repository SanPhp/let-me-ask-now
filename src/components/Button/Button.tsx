import { ButtonHTMLAttributes } from 'react'
import { ButtonGlobal } from './style'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    isOutlined?: boolean
}

export function Button({ isOutlined = false, ...props }: ButtonProps){
    return(
        <ButtonGlobal isOutlined={isOutlined} {...props} />

    )
}
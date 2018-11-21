import {h, Component} from 'preact'
import {StyledButton} from './styled'

export default function Button({text, type, disabled, onClick}) {
    return (<StyledButton type={type} disabled={disabled} onClick={onClick}>{text}</StyledButton>)
}
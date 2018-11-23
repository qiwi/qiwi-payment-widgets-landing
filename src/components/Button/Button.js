import {h, Component} from 'preact'
import {StyledButton, CopyIcon} from './styled'

export default function Button({text, type, disabled, onClick}) {
    return (<StyledButton type={type} disabled={disabled} onClick={onClick}><CopyIcon disabled={disabled}/>{text}</StyledButton>)
}
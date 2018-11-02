import { h, Component } from 'preact';
import {StyledMessageBox} from "./styled";

export default class MessageBox extends Component {

    render({message}){

        return (<StyledMessageBox class={`${message? 'visible': ''}`}>{message}</StyledMessageBox>);
    }
}
import {h, Component} from 'preact';
import styled from 'styled-components'

const StyledTitle = styled.h1`
    font-family: "Museo","Helvetica Neue","Helvetica","Arial",sans-serif;
    font-size: 30px;
    font-weight: 900;
    line-height: 1.2;
    text-align: left;
    margin: 0 auto;
    padding: 0;
`;

export default function Title({text}) {
    return (
        <StyledTitle>{text}</StyledTitle>
    )
}
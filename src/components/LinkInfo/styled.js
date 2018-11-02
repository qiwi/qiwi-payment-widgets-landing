import styled from 'styled-components'

export const LinkInfoBlock = styled.div`
    text-align: left;
    margin: 0 0 80px;   
`;

export const LinkTitle = styled.h3`
    margin: 0 0 24px;
    width: 460px;
    
    a {
        text-decoration: none;
        color: #000000;
    }
`;

export const LinkTextBlock = styled.div`
    font-family: 'Roboto Mono', monospace;
    font-size: 16px;
    line-height: 1.31;
    text-align: left;
    color: #0023a0;
    word-break: break-word;
    margin-top: 35px;
    transition: all 2s ease-out;
    opacity: 1;
    height: 100%;
    -webkit-user-select: all;
    -moz-user-select: all;
    -ms-user-select: all;
    user-select: all;
    margin: -44px 0 36px 0;
`;

export const LinkCodeTextarea = styled.textarea`
    opacity: 0;
    width: 0;
    height: 0;
    position: fixed;
    left: -5000px;  
`;

export const ButtonGetCode = styled.button`
    cursor: pointer;
    width: 240px;
    height: 70px;
    border-radius: 6px;
    border: solid 2px #000000;
    font-family: "Museo","Helvetica Neue","Helvetica","Arial",sans-serif;
    font-size: 16px;
    line-height: 16px;
    margin: 0;
    padding: 0;
    background-color: rgb(247,247,247);
    font-weight: 700;
    letter-spacing: -0.2px;
    text-align: center;
    color: #000000;

    @media (max-width: 950px) {

        width: 220px;
        height: 60px;

    }

    &:hover {
        background-color: #ffffff;
        box-shadow: 0 12px 18px 0 rgba(160, 160, 160, 0.5);
        border: solid 2px #000000;

    }

    &:active {
        opacity: 0.9;
    }

    &:focus {
        outline: none;
    }

    &:disabled {
        color: #CCCCCC;
        border: solid 2px #CCCCCC;
        cursor: not-allowed;

        &:hover {
            background-color: rgb(247,247,247);
            box-shadow: none;
            border: solid 2px #CCCCCC;
        }
    }
`;
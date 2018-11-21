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
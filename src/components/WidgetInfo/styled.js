import styled from 'styled-components';

export const Container = styled.div`
    text-align: left;
    margin: 0 0 80px;
`;

export const Link = styled.a`
    text-decoration: none;
    color: #000000;    
`;

export const WidgetIframe = styled.iframe`
    margin-bottom: 39px;
    
    &.bordered {
        border: dashed 1px #9b9b9b;
    }
`;

export const WidgetCodeTextarea = styled.textarea`
    opacity: 0;
    width: 0;
    height: 0;
    position: fixed;
    left: -5000px;
`;

export const Title = styled.h1`
    font-family: "Museo","Helvetica Neue","Helvetica","Arial",sans-serif;
    font-size: 30px;
    font-weight: 900;
    line-height: 1.2;
    text-align: left;
    margin: 0 auto;
    padding: 0;
    margin: 0 0 24px;
    width: 460px;
`;

export const WidgetCodeBlock = styled.div`
    font-family: 'Roboto Mono', monospace;
    font-size: 16px;
    line-height: 1.31;
    text-align: left;
    color: #000000;
    word-break: break-word;
    margin-top: 35px;
    transition: all 2s ease-out;
    opacity: 1;
    height: 100%;
    -webkit-user-select: all;
    -moz-user-select: all;
    -ms-user-select: all;     
    user-select: all;
`;

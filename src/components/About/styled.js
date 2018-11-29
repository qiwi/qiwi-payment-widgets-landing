import styled from 'styled-components';
import arc from './assets/arc.svg';

export const AboutSection = styled.section`
    padding: 89px 0 128px;
    min-width: 768px;
    background: #f5f5f5;
`;

export const AboutTitle = styled.h1`
    width: 830px;

    @media (max-width: 950px) {
        width: 780px;
        font-size: 36px;
        line-height: 1.44;

    }
`;

export const AboutParagraphList = styled.ol`
    text-align: center;
    list-style-type: none;
    margin: 57px auto 0;
    padding: 0;

    @media (max-width: 950px) {
        margin-top: 55px;
    }
`;

export const AboutParagraphListItem = styled.li`
    display: inline-block;
    width: 224px;
    font-family: "Museo","Helvetica Neue","Helvetica","Arial",sans-serif;
    font-size: 18px;
    font-weight: 300;
    color: #000000;
    margin-right: 15px;
    vertical-align: top;
    position: relative;

    @media (max-width: 950px) {
        width: 170px;
        margin-right: 7px;
        font-size: 16px;
        line-height: 1.31;
    }

    &::before {
        content: '';
        width: 119px;
        height: 16px;
        background: url(${arc});
        position: absolute;
        right: -59px;
        top: 26px;
    }

    &:nth-child(2n)::before {
        top: 46px;
        transform: rotate(180deg);
    }

    &:last-child {
        margin-right: 0;
    }

    &:last-child::before {
        display: none;
    }   
`;

export const AboutMarker = styled.div`
    font-family: "Museo","Helvetica Neue","Helvetica","Arial",sans-serif;
    font-size: 72px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 15px;
`;
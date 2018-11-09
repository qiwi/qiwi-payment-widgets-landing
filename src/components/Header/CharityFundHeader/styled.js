import styled from 'styled-components'
import {CommonHeader} from "../styled";

export const StyledHeader = styled(CommonHeader)`
    background-image: radial-gradient(circle at 15% 13%, rgba(113, 106, 173, 0.0), #d06be4),
        linear-gradient(to bottom, #8b61ce, rgba(141, 98, 207, 0.0)),
        linear-gradient(#865ed4, #865ed4);
`;


const GradientBlock = styled.div`
    position: absolute;
    width: 100%;
    height: 245px;
    z-index: 2;
`;

export const GradientBlockTop = styled(GradientBlock)`
    top: 0;
    left: 0;
    background-image:
        linear-gradient(to bottom, #8b61ce, rgba(141, 98, 207, 0.0));
`;


export const GradientBlockBottom = styled(GradientBlock)`
    bottom: 0;
    left: 0;
    background-image:
        linear-gradient(to top, #8b61ce, rgba(141, 98, 207, 0.0));
`;

export const TextSection = styled.section`
    margin: 125px 0 0;
    position: relative;
    z-index: 3;

    @media (max-width: 1279px) {
        margin-top: 89px;
    }
`;

export const Title = styled.h1`
    width: 630px;
    text-align: left;
    color: #ffffff;
    margin: 0;

    @media (max-width: 1279px) {
        line-height: 1;
        width: 408px;
    }    
`;

export const Description = styled.p`
    margin: 9px 0 0;
    padding: 0;
    width: 349px;
    font-family: "Museo","Helvetica Neue","Helvetica","Arial",sans-serif;
    font-size: 21px;
    font-weight: 300;
    line-height: 1.48;
    text-align: left;
    color: #ffffff;

    @media (max-width: 1279px) {
        width: 349px;
    }
`;

export const ToWidgetsLink = styled.a`
    margin: 40px 0 0;
    display: block;
    padding: 23px 0;
    text-decoration: none;
    width: 240px;
    border-radius: 14px;
    background-color: #ffd54e;
    font-family: "Museo","Helvetica Neue","Helvetica","Arial",sans-serif;
    font-size: 21px;
    font-weight: 700;
    letter-spacing: -0.2px;
    text-align: center;
    color: #865ed4;

    &:hover {
        background-color: #ffd54e;
        box-shadow: 0 12px 18px 0 rgba(83, 0, 127, 0.5);
    }

    &:active {
        background-color: rgba(255, 213, 78, 0.9);
    }

    @media (max-width: 1279px) {
        margin-top: 43px;
    }    
`;

export const WidgetExampleBlock = styled.div`
    width: 480px;
    height: 720px;
    position: absolute;
    top: 0;

    right: 74px;

    @media (max-width: 1279px) {
        right: 5%;
    }

    @media (max-width: 950px) {
        right: -25%;
    }

    @media (min-width: 1600px) {
        right: 15%;
    }
`;

export const WidgetExamplePic = styled.img`
    position: relative;
    z-index: 1;
`;

export const WidgetLinkHolder = styled.div`
    z-index: 3;
    font-family: "Museo","Helvetica Neue","Helvetica","Arial",sans-serif;
    font-size: 17px;
    font-weight: 300;
    text-align: center;    
    margin: 0 auto;
    position: absolute;
    top: 504px;
    left: 40px;
    right: 40px;

    & a {
        text-decoration: none;
        color: #0629a3;
    }

    &.lowwer {
        top: 504px;
    }

    &.upper {
        top: 64px;
        z-index: 1;
    }
`;

export const WidgetExampleTitle = styled.div`
    text-align: center;
    color: rgb(0, 0, 0);
    margin: 0 auto;
    font-size: 22px;
    font-family: "Museo","Helvetica Neue","Helvetica","Arial",sans-serif;
    font-weight: 900;
    overflow: hidden;
    text-overflow: ellipsis;
    position: absolute;
    top: 200px;
    left: 40px;
    right: 40px;
    z-index: 3;

    &.second {
        top: 640px;
        z-index: 1;
    }    
`;

export const WidgetExampleButton = styled.div`
    text-align: center;
    z-index: 3;
    color: #FFF;
    margin: 0 auto;
    font-size: 22px;
    font-family: "Museo","Helvetica Neue","Helvetica","Arial",sans-serif;
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    position: absolute;
    top: 375px;
    left: 40px;
    right: 40px;
`;
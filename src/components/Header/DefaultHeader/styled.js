import styled, {keyframes} from 'styled-components'
import KassaLogoPic from './assets/qiwi_kassa_logo.svg'
import WidgetSamplePic from './assets/widget-pic.png'
import {CommonHeaderContainer} from "../styled";

export const HeaderContainer = styled(CommonHeaderContainer)`
    background-image: linear-gradient(to bottom, #fc7928, #fb5822);
    color: #ffffff;
    padding: 0;
`;


export const ContentBlock = styled.div`
    z-index: 1;
    width: 950px;
    height: 100%;
    margin: 0 auto 210px;
    display: flex;
    flex-direction: column;
    margin-top: 65px;
`;

export const KassaLogo = styled.div`
    z-index: 1;
    background: url(${KassaLogoPic}) no-repeat;
    height: 50px;
    width: 235px;
`;

export const LogoHolder = styled.div`
    width: 100%;
    position: relative;
`;

export const InfoBlock = styled.div`
    display: flex;
    margin-top: 95px;
    height: 300px;
    padding: 8px 0 8px 0;
`;

export const DescriptionBlock = styled.div`
    position: relative;
    z-index: 1;
    max-width: 520px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 21px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.4;
    letter-spacing: 0;

    h1 {
        margin: 0;
        max-width: 336px;
        text-align: left;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.13;
        letter-spacing: normal;
        color: #ffffff;
        font-size: 32px;
        font-weight: 900;
    }
`;

export const WidgetSample = styled.div`
    position: relative;
    margin-left: auto;
    z-index: 1;
    background: url(${WidgetSamplePic}) no-repeat;
    width: 300px;
    height: 300px;
`;

export const ButtonPlaceWidget = styled.button`
    width: 240px;
    height: 60px;
    margin-top: 12px;
    background: #ffffff;
    border: 1px solid #e6e6e6;
    border-radius: 99px;
    font-size: 18px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.33;
    letter-spacing: normal;
    text-align: center;
`;

export const RectanglesHolder = styled.div`
    width: inherit;
    height: inherit;
    position: absolute;
    top: 0;
`;

export const Rectangle = styled.div`
    width: 10000px;
    height: 10000px;
    top: 0;
    
    transform-origin: top left; 
    position: absolute;
    
    transform: rotate(315deg);
    border-radius: 100px;
    box-shadow: 20px 12px 94px 0 #f2440a;
    background-image: radial-gradient(circle at 32% 61%, #f76b1c, #fc882b);
    
    &:nth-child(1) {
        top: 0;
        margin-left: 40%;
    }
    
    &:nth-child(2) {
        top: 250px;
        margin-left: 50%;
    }
    
    &:nth-child(3) {
        top: 510px;
        margin-left: 60%;
    }
    
    &:nth-child(4) {
        top: 760px;
        margin-left: 70%;
    }
`
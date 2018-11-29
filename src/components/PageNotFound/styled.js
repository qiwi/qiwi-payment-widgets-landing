import styled from "styled-components";
import KassaLogoPic from './assets/qiwi_kassa_logo.svg';

export const PageLayout = styled.div`
    width: 100%;
    height:100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Header = styled.div`
    width: 950px;
`;

export const ContentBlock = styled.div`
    height: 100%;
    width: 950px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const ErrorBlock = styled.div`
    display: flex;
    align-items: center;
`;


export const ErrorDescriptionHolder = styled.div`
    margin-left: 40px;
    padding-top: 23px;
    padding-bottom: 23px;
    box-sizing: border-box;
    height: 267px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;


export const ErrorDescriptionTitle = styled.h2`
    width: 459px;
    font-size: 48px;
    font-weight: 900;
    line-height: 1;
    text-align: left;
    margin: 0;
`;


export const ErrorDescriptionText= styled.div`
    width: 500px;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.4;
    text-align: left;
`;


export const Text404Holder = styled.div`
    width: 400px;
    height: 267px;
    text-shadow: 0 12px 34px rgba(0, 0, 0, 0.1);
    font-size: 222px;
    font-weight: 900;
    color: #ffffff;
`;

export const KassaLogo = styled.div`
    margin-top: 66px;
    background: url(${KassaLogoPic}) no-repeat;
    height: 50px;
    width: 235px;
`;
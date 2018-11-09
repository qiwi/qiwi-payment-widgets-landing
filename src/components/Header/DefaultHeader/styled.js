import styled from 'styled-components'
import {CommonHeader} from "../styled";

export const StyledHeader = styled(CommonHeader)`
    background-image: linear-gradient(to bottom, #fc7928, #fb5822);
`;

export const RectanglesHolder = styled.div`
    margin-left: 35%;
    position: relative;
    display: inline-block;
    box-sizing: border-box;
    height: inherit;
    width: 100%;
`;

export const Rectangle = styled.div`
    width: 1000px;
    height: 1000px;
    
    transform-origin: bottom left; 
    position: absolute;
    
    transform: rotate(-315deg);
    border-radius: 100px;
    box-shadow: 20px 12px 94px 0 #f2440a;
    background-image: radial-gradient(circle at 32% 61%, #f76b1c, #fc882b);
    
    &:nth-child(4) {
        top: -400px;
        left: 240px;
    }
    
    &:nth-child(3) {
        top: -620px;
        left: 120px;
    }
    
    &:nth-child(2) {
        top: -840px;
        left: 0;
    }
    
    &:nth-child(1) {
        top: -1060px;
        left: -120px;
    }  
`
import styled from 'styled-components'
import {CommonHeader} from "../styled";

export const StyledHeader = styled(CommonHeader)`
    background-image: linear-gradient(to bottom, #fc7928, #fb5822);
`;

export const RectanglesHolder = styled.div`
    padding-left: 40%;
    height: 100%;
    width: 100%;
    
    &:nth-child(1) {
        margin-top: 0px;
    }
    
    &:nth-child(2) {
        margin-top: 225px;
    }
    
    &:nth-child(3) {
        margin-top: 540px;
    }
    
    &:nth-child(4) {
        margin-top: 700px;
    }
`;

export const Rectangle = styled.div`
    transform: rotate(-315deg);
    border-radius: 100px;
    box-shadow: 20px 12px 94px 0 #f2440a;
    background-image: radial-gradient(circle at 61% 32%, #fc882b, #f76b1c);    
`
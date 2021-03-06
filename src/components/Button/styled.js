import styled from 'styled-components'
import copyIcon from './assets/copyIcon.svg';
import copyIconDisabled from './assets/copyIconDisabled.svg';

export const StyledButton = styled.button`
    width: 262px;
    height: 58px;
    border-radius: 100px;
    border: solid 1px #e6e6e6;
    display: flex;
    justify-content: center;
    background: #ffffff;
    padding-left: 16px;
    background-origin: content-box;
    align-items: center;
    
    font-size: 19px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.26;
    
    
    @media (max-width: 950px) {
        width: 220px;
        height: 60px;
        font-size: 16px;
    }

    &:hover {
        background-color: #ffffff;
        box-shadow: 0 5px 18px 0 rgba(160, 160, 160, 0.5);
        border: solid 1px #e6e6e6;
    }

    &:active {
        opacity: 0.9;
    }

    &:focus {
        outline: none;
    }

    &:disabled {
        color: #CCCCCC;
        border: solid 1px #CCCCCC;
        cursor: not-allowed;
        background-origin: content-box;

        &:hover {
            background-color: rgb(247,247,247);
            box-shadow: none;
        }
    }
`;

export const CopyIcon = styled.div`
    background: url(${(props) => props.disabled ? copyIconDisabled: copyIcon}) no-repeat;
    background-size: contain;
    margin-right: 7px;
    width: 21px;
    height: 21px;
`;
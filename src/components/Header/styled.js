import styled from 'styled-components'

export const CommonHeader = styled.header`
    height: 720px;
    box-sizing: border-box;
    position: relative;
    text-align: left;
    padding-top: 60px;
    padding-left: 8%;
    overflow: hidden;
    min-width: 768px;

    @media (min-width: 1600px) {
        padding-left: 15%;
    }
`;
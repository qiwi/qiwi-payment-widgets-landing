import styled from 'styled-components'

export const CommonHeaderContainer = styled.header`
    width: 100%;
    height: 720px;
    box-sizing: border-box;
    font-family: "Museo","Helvetica Neue","Helvetica","Arial",sans-serif;
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
import styled from 'styled-components'

export const WidgetsSection = styled.section`
    background-color: rgb(247,247,247);
    padding: 78px 0 15px 0;
    position: relative;
    min-width: 768px;
    box-sizing: border-box;

    @media (max-width: 950px) {

       padding: 78px 20px 15px;

    }
`;

export const Title = styled.h1`
    width: 858px;

    @media (max-width: 950px) {
        font-size: 36px;
        line-height: 1.39;
        width: 596px;
    }  
`;

export const WidgetsLibraryBlock = styled.div`
    width: 950px;
    margin: 78px auto 0;
    position: relative;

    @media (max-width: 950px) {

        width: 100%;

    }
`
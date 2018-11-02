import styled from 'styled-components';

export const LibraryContainer = styled.div`
    margin-left: 220px;

    @media (max-width: 950px) {
        margin: 0 auto;
    }
`;

export const LibraryGroup = styled.article`
    width: 728px;
    border-bottom: solid 1px #979797;
    margin: 0 auto 80px;

    &:last-child {
        border: 0;
        margin-bottom: 0;
    }

    @media (max-width: 950px) {
        width: 100%;
    }
`;

export const GroupTitle = styled.h2`

`;

export const GroupDescription = styled.p`
    font-family: "Museo","Helvetica Neue","Helvetica","Arial",sans-serif;
    font-size: 26px;
    font-weight: 300;
    line-height: 1.23;
    text-align: left;
    color: #000000;
    margin: 34px 0 80px;
`;
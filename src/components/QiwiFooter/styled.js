import styled from 'styled-components'

export const FooterBlock = styled.div`
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: ${(props) => props.darkTheme ? 'rgba(0, 0, 0, 0.9)' : '#ffffff'};
    color: ${(props) => props.darkTheme ? '#d4d4d4' : '#000000'};
    font-size: 20px;
    font-weight: 500;
    align-content: center;
`;
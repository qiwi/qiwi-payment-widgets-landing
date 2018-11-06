import styled from 'styled-components'

export const StyledLibraryNav = styled.nav`
    width: 220px;
    font-family: "Museo","Helvetica Neue","Helvetica","Arial",sans-serif;
    font-size: 13px;
    font-weight: 500;
    line-height: 1.38;
    letter-spacing: 1.5px;
    text-align: left;
    color: #000000;
    position: absolute;
    top: 0;
    left: 0;
    transition: transform .2s ease-out;


    @media (max-width: 950px) {
        display: none;
    }

    a {
        text-decoration: none;
    }
`;

export const NavigationsList = styled.ul`
    padding: 0;
    margin: 0;
`;

export const LibraryGroup = styled.li`
    list-style-type: none;
    padding: 0;
    text-transform: uppercase;
    margin: 0 0 46px;
`;

export const LibraryGroupName = styled.span`
    padding-left: 25px;
`;

export const TypesList = styled.ul`
    margin: 20px 0 0;
    padding: 0;
    text-transform: none;
`;

export const NavType = styled.li`
    list-style-type: none;
    margin: 14px 0 0;
    position: relative;

    &::before {
        content: '—';
        position: absolute;
        top: 0;
        left: 0;
        font-family: "Museo","Helvetica Neue","Helvetica","Arial",sans-serif;
        font-size: 18px;
        font-weight: 100;
        line-height: 1.28;
        text-align: left;
        color: #cccccc;
    }
    
    a {
        display: inline-block;
        padding: 0 0 0 25px;
        font-family: "Museo","Helvetica Neue","Helvetica","Arial",sans-serif;
        font-size: 18px;
        font-weight: 500;
        line-height: 1.28;
        text-align: left;
        color: #000000;
    }

    &.selected {
        a{
            font-family: "Museo","Helvetica Neue","Helvetica","Arial",sans-serif;
            font-weight: 900;
        }
    }

    &.selected::before {
        color: #ff8c00;
        font-family: "Museo","Helvetica Neue","Helvetica","Arial",sans-serif;
        font-weight: 900;
    }
`;
import {h, Component} from 'preact';
import {FooterBlock} from './styled'

export default function QiwiFooter({darkTheme}) {
    return (<FooterBlock darkTheme={darkTheme}>© 2016, КИВИ Банк (АО), лицензия ЦБ РФ № 2241</FooterBlock>);
}
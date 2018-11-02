import { h, Component } from 'preact';

import 'url-search-params-polyfill';

import {LinkInfoBlock, ButtonGetCode, LinkCodeTextarea, LinkTextBlock, LinkTitle} from "./styled";
import config from '../../config/default';



export default class LinkInfo extends Component {

    constructor(props) {
        super(props);
    }

    copyToClipboard = (code) => {

        this.widgetCodeBlock.value = code;

        this.widgetCodeBlock.select();

        this.props.addMessage('Cсылка скопирована в буфер обмена');

        document.execCommand("Copy");

    }

    render({ id, widgetAliasCode}, {}){

        const link = `${config.url}${widgetAliasCode}`;

        return (<LinkInfoBlock id={id}>
            <LinkTitle><a href={`#${id}`}/></LinkTitle>

            <LinkCodeTextarea innerRef={ c => this.widgetCodeBlock = c }/>

            <LinkTextBlock>{link}</LinkTextBlock>

            <ButtonGetCode type="button" disabled={!widgetAliasCode} onClick={() => {
                    this.copyToClipboard(link);

                     dataLayer.push({
                        'event': 'copy.code',
                        'eventAction': `Code of ${id} link copied`
                    });
                }} > &lt;/&gt; Скопировать ссылку</ButtonGetCode>
        </LinkInfoBlock>);
    }
}

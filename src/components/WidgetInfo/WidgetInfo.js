import {h, Component} from 'preact';

import 'url-search-params-polyfill';

import {Container, Link, WidgetIframe, Title, WidgetCodeBlock, WidgetCodeTextarea, ButtonCopyCode} from "./styled";
import OptionalRenderer from "../OptionalRenderer/OptionalRenderer";

export default class WidgetInfo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            codeIsHidden: true
        }
    }

    copyToClipboard = (code) => {

        this.widgetCodeBlock.value = code;

        this.widgetCodeBlock.select();

        this.props.addMessage('Код скопирован в буфер обмена');

        this.setState({
            isCodeHidden: false
        });


        document.execCommand("Copy");

    }

    render({widget, id, widgetUrl, noCacheFlag, publicKey}, {codeIsHidden}) {

        const {title, height, width, transparent, params = {}, link} = widget;

        params['publicKey'] = publicKey;

        const querystring = new URLSearchParams(params);

        let urlWidget = `${widgetUrl}${link}?${querystring.toString()}`;

        const code = `<iframe width="${width}" height="${height}" src="${urlWidget}" allowtransparency="true" scrolling="no" frameborder="0"></iframe>`;

        if (noCacheFlag) {
            urlWidget += `&noCache=${noCacheFlag}`;
        }

        return (<Container id={id}>
            <Title><Link href={`#${id}`}>{title}</Link></Title>

            <WidgetIframe width={width}
                          height={height}
                          src={urlWidget}
                          allowtransparency="true"
                          scrolling="no"
                          frameborder="0"/>

            <WidgetCodeTextarea ref={c => this.widgetCodeBlock = c}/>

            <ButtonCopyCode onClick={() => {
                this.copyToClipboard(code);

                dataLayer.push({
                    'event': 'copy.code',
                    'eventAction': `Code of ${title} widget copied`
                });
            }} disabled={!publicKey}> &lt;/&gt; Скопировать код</ButtonCopyCode>

            <OptionalRenderer when={codeIsHidden}>
                <WidgetCodeBlock>{code}</WidgetCodeBlock>
            </OptionalRenderer>
        </Container>);
    }
}

import {h, Component} from 'preact';

import {
    StyledHeader,
    Description,
    GradientBlockBottom,
    GradientBlockTop,
    TextSection,
    Title,
    ToWidgetsLink,
    WidgetExampleBlock,
    WidgetExampleButton,
    WidgetExamplePic,
    WidgetExampleTitle,
    WidgetLinkHolder
} from './styled';
import widgetPic from './assets/widget-pic.png';

export default class Header extends Component {
    render({idWidgetsBlock, widgetMerchantName, publicKey}) {
        const defaultWidgetMerchantName = 'Наименование организации';

        return (
            <StyledHeader>
                <GradientBlockTop/>
                <GradientBlockBottom/>

                <TextSection>
                    <Title>
                        Привлеки своих пользователей, покупателей и читателей к
                        добрым делам!
                    </Title>
                    <Description>
                        {widgetMerchantName
                            ? `Размести платежную форму у себя на сайте и поддержи ${widgetMerchantName}.`
                            : 'Размести платежную форму у себя на сайте и поддержи благотворительность.'}
                    </Description>
                    <ToWidgetsLink
                        href={`#${idWidgetsBlock}`}
                        onClick={() => {
                            dataLayer.push({
                                event: 'to.widgets',
                                eventAction: 'Transition to widgets block'
                            });
                        }}>
                        Разместить виджет
                    </ToWidgetsLink>
                </TextSection>
                <WidgetExampleBlock>
                    <WidgetExamplePic
                        src={widgetPic}
                        alt="widgets"
                        width="480"
                        height="720"
                    />
                    <WidgetLinkHolder className={'upper'}>
                        <a href={'/?publicKey=' + publicKey}>
                            У меня есть сайт
                        </a>
                    </WidgetLinkHolder>
                    <WidgetExampleTitle>
                        {widgetMerchantName || defaultWidgetMerchantName}
                    </WidgetExampleTitle>
                    <WidgetExampleButton>Помочь</WidgetExampleButton>
                    <WidgetLinkHolder className={'lowwer'}>
                        <a href={'/?publicKey=' + publicKey}>
                            У меня есть сайт
                        </a>
                    </WidgetLinkHolder>
                    <WidgetExampleTitle className={'second'}>
                        {widgetMerchantName || defaultWidgetMerchantName}
                    </WidgetExampleTitle>
                </WidgetExampleBlock>
            </StyledHeader>
        );
    }
}

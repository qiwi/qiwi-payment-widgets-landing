import {h, Component} from 'preact'
import {
    HeaderContainer,
    ContentBlock,
    LogoHolder,
    SampleButtonText,
    SampleTitle,
    InfoBlock,
    WidgetSample,
    KassaLogo,
    ToWidgetsLink,
    RectanglesHolder,
    Rectangle,
    DescriptionBlock
} from './styled'
import PaymentIcons from '../../PaymentIcons'
import Oferta from '../../Oferta'


export default function DefaultHeader({idWidgetsBlock, widgetMerchantName, widgetButtonText, merchantOffer}) {
    let a = 'kjljolj';
    return (<HeaderContainer>
        <ContentBlock>
            <LogoHolder>
                <KassaLogo/>
            </LogoHolder>
            <InfoBlock>
                <DescriptionBlock>
                    <h1>Простая интеграция
                        для любого сайта</h1>
                    <p>Платежный виджет прост в интеграции — скопируйте код на страничку и сразу принимайте платежи.
                        Никакого программирования ;)</p>
                    <ToWidgetsLink href={`#${idWidgetsBlock}`}
                                   onClick={() => {
                                       dataLayer.push({
                                           event: 'to.widgets',
                                           eventAction: 'Transition to widgets block'
                                       });
                                   }}>Разместить</ToWidgetsLink>
                </DescriptionBlock>
                <WidgetSample>
                    <SampleTitle>{widgetMerchantName || 'Магазин игрушек'}</SampleTitle>
                    <SampleButtonText>{widgetButtonText || 'Перевести'}</SampleButtonText>
                    <PaymentIcons/>
                    {merchantOffer ? <Oferta link={merchantOffer}/> : null}
                </WidgetSample>
            </InfoBlock>
        </ContentBlock>
        <RectanglesHolder>
            <Rectangle/>
            <Rectangle/>
            <Rectangle/>
            <Rectangle/>
        </RectanglesHolder>
    </HeaderContainer>)
}
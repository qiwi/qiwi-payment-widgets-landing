import {h, Component} from 'preact'
import {HeaderContainer, ContentBlock, LogoHolder, InfoBlock, WidgetSample, KassaLogo, ButtonPlaceWidget, RectanglesHolder, Rectangle, DescriptionBlock} from './styled'

export default function DefaultHeader() {

    return (<HeaderContainer>
            <ContentBlock>
                <LogoHolder>
                    <KassaLogo/>
                </LogoHolder>
                <InfoBlock>
                    <DescriptionBlock>
                        <h1>Простая интеграция
                            для любого сайта</h1>
                        <p>Платежный виджет прост в интеграции —  скопируйте код на страничку и сразу принимайте платежи. Никакого программирования ;)</p>
                        <ButtonPlaceWidget>Разместить</ButtonPlaceWidget>
                    </DescriptionBlock>
                    <WidgetSample>

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
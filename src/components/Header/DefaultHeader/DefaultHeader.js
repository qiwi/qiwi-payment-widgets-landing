import {h, Component} from 'preact'
import {HeaderContainer, ContentBlock, HeaderBlock, KassaLogo, ButtonPlaceWidget, RectanglesHolder, Rectangle, DescriptionBlock} from './styled'

export default function DefaultHeader() {

    return (<HeaderContainer>
            <ContentBlock>
                <KassaLogo/>
                <DescriptionBlock>
                    <h1>Простая интеграция
                        для любого сайта</h1>
                    <p>Платежный виджет прост в интеграции —  скопируйте код на страничку и сразу принимайте платежи. Никакого программирования ;)</p>
                    <ButtonPlaceWidget>Разместить</ButtonPlaceWidget>
                </DescriptionBlock>
            </ContentBlock>
        <RectanglesHolder>
             <Rectangle/>
             <Rectangle/>
             <Rectangle/>
             <Rectangle/>
        </RectanglesHolder>
    </HeaderContainer>)
}
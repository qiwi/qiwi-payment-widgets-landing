import {h, Component} from 'preact'

import QiwiFooter from '../QiwiFooter'
import Link from '../Link'
import {PageLayout, Text404Holder, Header, KassaLogo, ContentBlock, ErrorBlock, ErrorDescriptionHolder, ErrorDescriptionText, ErrorDescriptionTitle} from './styled'

export default function PageNotFound({}) {

    return (
        <PageLayout>
            <Header>
                <KassaLogo/>
            </Header>
            <ContentBlock>
                <ErrorBlock>
                    <Text404Holder>404</Text404Holder>
                    <ErrorDescriptionHolder>
                        <ErrorDescriptionTitle>Страницы<br/>не существует</ErrorDescriptionTitle>
                        <ErrorDescriptionText>Тут располагаются платежные виджеты для партнеров, но они доступны по полной ссылке.<br/>
                            Хотите свой набор виджетов?<br/>
                            Присоединяйтесь к Кассе <Link href={'https://kassa.qiwi.com/'}>https://kassa.qiwi.com/</Link></ErrorDescriptionText>
                    </ErrorDescriptionHolder>
                </ErrorBlock>
            </ContentBlock>
            <QiwiFooter darkTheme={false}/>
        </PageLayout>
    )
}
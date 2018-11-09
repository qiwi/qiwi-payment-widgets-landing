import {h, Component} from 'preact'
import {StyledHeader, RectanglesHolder, Rectangle} from './styled'

export default function DefaultHeader() {

    return (<StyledHeader>
        <RectanglesHolder>
            <Rectangle/>
            <Rectangle/>
            <Rectangle/>
            <Rectangle/>
        </RectanglesHolder>
    </StyledHeader>)
}
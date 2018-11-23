import {h, Component} from 'preact'

import {StyledLink} from './styled'

export default function Link({children, href, target = '_blank'}) {

    return (<StyledLink href={href} target={target}>{children}</StyledLink>)
}
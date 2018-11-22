import {h, Component} from 'preact'
import './styled';
import {isBrowserSupportsSvg} from '../../helpers/icons';
import {PaymentIconsContainer, MastercardIcon, MirIcon, QiwiIcon, VisaIcon} from './styled';

export default function PaymentIcons () {
    const enableSvg = isBrowserSupportsSvg();

    return (
        <PaymentIconsContainer>
            <VisaIcon enableSvg={enableSvg}/>
            <MastercardIcon enableSvg={enableSvg}/>
            <MirIcon enableSvg={enableSvg}/>
            <QiwiIcon enableSvg={enableSvg}/>
        </PaymentIconsContainer>);
}

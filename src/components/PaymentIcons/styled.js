import styled from 'styled-components'
import visaPng from './assets/visa.png'
import visaSvg from './assets/visa.svg'
import mastercardPng from './assets/mastercard.png'
import mastercardSvg from './assets/mastercard.svg'
import mirPng from './assets/mir.png'
import mirSvg from './assets/mir.svg'
import qiwiPng from './assets/qiwi.png'
import qiwiSvg from './assets/qiwi.svg'


export const PaymentIconsContainer = styled.div`
    width: 192px;
    height: 18px;
    text-align: justify;
    -moz-text-align-last: justify;
    -webkit-text-align-last: justify;
    text-align-last: justify;
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 31px auto 0;
`;

export const PaymentType = styled.div`
    text-align: left;
    display: inline-block;
    background-repeat: no-repeat;
    background-size: contain;
    position: relative;
    vertical-align: middle;
`;

export const VisaIcon = styled(PaymentType)`
    background-image: url(${(props) => props.enableSvg ? visaSvg: visaPng});
    width: 35px;
    height: 12px;
`;

export const MirIcon = styled(PaymentType)`
    background-image: url(${(props) => props.enableSvg ? mirSvg: mirPng});
    width: 30px;
    height: 11px;
`

export const MastercardIcon = styled(PaymentType)`
    background-image: url(${(props) => props.enableSvg ? mastercardSvg: mastercardPng});
    width: 24px;
    height: 16px;
`;

export const QiwiIcon = styled(PaymentType)`
    background-image: url(${(props) => props.enableSvg ? qiwiSvg: qiwiPng});
    width: 45px;
    height: 17px;
`;
import './style.css';
import {getContrastColorByBackground, isBrowserSupportsSvg} from '../../modules/helpers.js';
import {styleCode, color, imgSrcOrder} from '../../modules/styles';

export default function PaymentIcons () {
    const paymentIcons = document.createElement('div');

    const contrastColor = getContrastColorByBackground(widgetBackground);
    const bgImageIndex = isBrowserSupportsSvg() ? imgSrcOrder.SVG : imgSrcOrder.PNG;
    const bgIndexInStyle = (contrastColor === color.WHITE ? 0 : 2) + bgImageIndex; // look in paymentIcons/style.css there are 4 backgrounds to choose

    const paymentMethods = component.element.querySelectorAll('[class*=widget__payment-block-]');

    paymentMethods.forEach(function (paymentMethod) {
        const backgrounds = window.getComputedStyle(paymentMethod).getPropertyValue('background-image').split(', url(');
        if (bgIndexInStyle > 0) {
            backgrounds[bgIndexInStyle] = `url(${backgrounds[bgIndexInStyle]}`;
        }
        paymentMethod.style.backgroundImage = backgrounds[bgIndexInStyle];
    });

    return (
        <div>
            <div class="widget__payment-type widget__payment-block-visa"/>
            <div class="widget__payment-type widget__payment-block-mastercard"/>
            <div class="widget__payment-type widget__payment-block-mir"/>
            <div class="widget__payment-type widget__payment-block-qiwi"/>
        </div>);
}

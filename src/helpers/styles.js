export const EWidgetStyleCode = Object.freeze({
    CHARITY_LANDING_HEADER: 'CHARITY_LANDING_HEADER',
    PAY_FORM_MERCHANT_NAME: 'PAY_FORM_MERCHANT_NAME'
});

export function stylesArrayToObject(styles) {
    if (!styles) return {};

    return styles.reduce((acc, item) => {
        acc[item.widgetStyleCode] = item.widgetStyleValue;
        return acc;
    }, {});
}
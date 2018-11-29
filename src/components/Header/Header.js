import {h, Component} from 'preact';

import CharityFundHeader from './CharityFundHeader'
import DefaultHeader from './DefaultHeader';

export default class Header extends Component {
    render({widgetStyles, ...passedProps}) {

        return widgetStyles['CHARITY_LANDING_HEADER'] ? (<CharityFundHeader {...passedProps}/>) : (<DefaultHeader {...passedProps}/>);
    }
}

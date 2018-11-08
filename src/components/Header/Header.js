import {h, Component} from 'preact';

import CharityFundHeader from './CharityFundHeader'
import DefaultHeader from './DefaultHeader';

export default class Header extends Component {
    render({merchantMarketingCategoty, ...passedProps}) {

        return (<DefaultHeader {...passedProps}/>);
    }
}

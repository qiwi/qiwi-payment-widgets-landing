import { h, Component } from 'preact';
import {StyledLibraryNav, LibraryGroup, LibraryGroupName, NavigationsList, NavType, TypesList} from './styled';

export default class LibraryNav extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount(){

        this.handleHashChange();

        window.addEventListener("hashchange", this.handleHashChange, false);
    }

    componentWillUnmount() {
        window.removeEventListener("hashchange", this.handleHashChange, false);
    };

    handleHashChange = () => {
        this.setState({
            hash: location.hash
        });
    }

    render({widgetsLibrary, topForPos = 0}, {hash}){

        const { navigation, types } = widgetsLibrary;

        const posForBlock = () => {
            /*78 - отступ от верха страницы*/
            let Y = topForPos <= 0?Math.abs(topForPos)+78:0;

            /*Если появится плашка с ошибкой добавим ее высоту 86*/
            if(!this.props.publicKey) {
                Y += 86;
            }

            return {
                transform: `translateY(${Y>3300?3300:Y}px)`
            };

        };

        return (<StyledLibraryNav style={posForBlock()}>
            <NavigationsList>{navigation.map((group) => {
                return (<LibraryGroup>
                    <LibraryGroupName>{group.name}</LibraryGroupName>
                    <TypesList>{group.types.map((type)=>{
                        let href = `#${type}`;

                        return (<NavType class={href === hash ? `selected`: ''}><a href={href} onClick={(e) => {

                            this.setState({
                                hash: href
                            });

                            dataLayer.push({
                                'event': 'to.widget',
                                'eventAction': `Transition to ${types[type].name} widget by widget menu`
                            });

                        }}>{types[type].name}</a></NavType>);
                    })}</TypesList>
                </LibraryGroup>);
            })}</NavigationsList>
        </StyledLibraryNav>);
    }
}
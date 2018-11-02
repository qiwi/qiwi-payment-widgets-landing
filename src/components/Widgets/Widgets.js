import { h, Component } from 'preact';

import LibraryNav from '../LibraryNav';
import Library from '../Library';

import {WidgetsSection, Title, WidgetsLibraryBlock} from "./styled";

export default class Widgets extends Component {

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    };

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    };

    handleScroll = (event) => {
        this.setState({
            topForPos:this.widgetLibraryBlock.getBoundingClientRect().top
        });
    };

    render({idWidgetsBlock, widgetsLibrary, widgetAliasCode, widgetUrl, publicKey, noCacheFlag, addMessage}, {topForPos}){
        return (<WidgetsSection id={idWidgetsBlock}>
            <Title>Выберите нужный размер и скопируйте код для внедрения на собственный сайт</Title>
            <WidgetsLibraryBlock innerRef={c => this.widgetLibraryBlock = c }>
                <LibraryNav widgetsLibrary={widgetsLibrary} topForPos={topForPos} publicKey={publicKey}/>
                <Library widgetsLibrary={{...widgetsLibrary,widgetUrl,publicKey,noCacheFlag,addMessage,widgetAliasCode}}/>
            </WidgetsLibraryBlock>

        </WidgetsSection>);
    }
}
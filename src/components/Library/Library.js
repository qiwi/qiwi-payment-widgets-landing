import { h, Component } from 'preact';

import WidgetInfo from '../WidgetInfo';
import PreorderLinkInfo from '../PreorderLinkInfo';
import {LibraryContainer, LibraryGroup, GroupDescription, GroupTitle} from "./styled";

export default class Library extends Component {

    render({widgetsLibrary}){

        const { library, types, widgetUrl, publicKey, noCacheFlag, addMessage, widgetAliasCode } = widgetsLibrary;

        return (<LibraryContainer>

            {library.map((group) => {
                return (<LibraryGroup>
                    <GroupTitle>{group.title}</GroupTitle>
                    {group.desc ? <GroupDescription>{group.desc}</GroupDescription> : null}
                    {group.types.map((type) => {

                        if(types[type].form === 'link') {
                            return (<PreorderLinkInfo id={type} widgetAliasCode={widgetAliasCode} addMessage={addMessage}/>);
                        }

                        return (<WidgetInfo id={type} widget={types[type]} widgetUrl={widgetUrl} noCacheFlag={noCacheFlag} publicKey={publicKey} addMessage={addMessage}/>);
                    })}

                </LibraryGroup>);
            })}

        </LibraryContainer>);
    }
}

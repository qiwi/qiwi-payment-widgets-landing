import { h, Component } from 'preact';

import WidgetInfo from '../WidgetInfo';
import LinkInfo from '../LinkInfo';
import {LibraryContainer, LibraryGroup, GroupDescription, GroupTitle} from "./styled";

export default class Library extends Component {

    render({widgetsLibrary}){

        const { library, types, widgetUrl, publicKey, noCacheFlag, addMessage, widgetAliasCode } = widgetsLibrary;

        return (<LibraryContainer>

            {library.map((group) => {
                return (<LibraryGroup>
                    <GroupTitle>{group.title}</GroupTitle>
                    <GroupDescription>{group.desc}</GroupDescription>
                    {group.types.map((type) => {

                        if(types[type].form === 'link') {

                            return (<LinkInfo id={type} widgetAliasCode={widgetAliasCode} addMessage={addMessage}/>);
                        }

                        return (<WidgetInfo id={type} widget={types[type]} widgetUrl={widgetUrl} noCacheFlag={noCacheFlag} publicKey={publicKey} addMessage={addMessage}/>);
                    })}

                </LibraryGroup>);
            })}

        </LibraryContainer>);
    }
}

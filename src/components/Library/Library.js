import { h, Component } from 'preact';

import WidgetInfo from '../WidgetInfo';
import LinkInfo from '../LinkInfo';

import './Library.scss';

export default class Library extends Component {

    render({widgetsLibrary}){

        const { library, types, widgetUrl, publicKey, noCache, addMessage, widgetAliasCode } = widgetsLibrary;

        return (<div class="library">

            {library.map((group) => {
                return (<article class="library__group">
                    <h2 class="library__title">{group.title}</h2>
                    <p class="library__description">{group.desc}</p>
                    {group.types.map((type) => {

                        if(types[type].form === 'link') {

                            return (<LinkInfo id={type} widgetAliasCode={widgetAliasCode} addMessage={addMessage}/>);
                        }

                        return (<WidgetInfo id={type} widget={types[type]} widgetUrl={widgetUrl} noCache={noCache} publicKey={publicKey} addMessage={addMessage}/>);
                    })}

                </article>);
            })}

        </div>);
    }
}

import * as serviceWorker from './serviceWorker';
import {renderEntireTree} from "./render";
import state from "./redux/state";
import {unregister} from "./serviceWorker";


renderEntireTree(state);



serviceWorker.unregister();

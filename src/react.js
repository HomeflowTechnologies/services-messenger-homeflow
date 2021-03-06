import {webFrame} from 'electron';
import React from 'react';
import {render} from 'react-dom';
import {syncHistoryWithStore, RouterStore} from 'mobx-react-router';
import {Router, Route, hashHistory} from 'react-router';
import '@babel/polyfill';
import smoothScroll from 'smoothscroll-polyfill';
import App from "./component/app/App";
import Welcome from "./component/ui/welcome/Welcome";

import 'popper.js/dist/umd/popper'
import 'bootstrap/js/dist/dropdown'
import './menu/menu'
import './menu/contextual-nenu'
import Loader from "./component/ui/welcome/Loader";
smoothScroll.polyfill();

webFrame.setVisualZoomLevelLimits(1, 1);
webFrame.setLayoutZoomLevelLimits(0, 0);

window.addEventListener('load', () => {
	const router = new RouterStore();
	const history = syncHistoryWithStore(hashHistory, router);
	window.thunder = {
		render() {
			const preparedApp = (
				<Router history={history}>
					<Route path={'/'} component={Loader}/>
					<Route path={'/welcome'} component={Welcome}/>
					<Route path={'/services'} component={App}/>
				</Router>
			);
			render(preparedApp, document.getElementById('root'))
		},
	};
	window.thunder.render()
});

window.addEventListener('dragover', event => event.preventDefault());
window.addEventListener('drop', event => event.preventDefault());
window.addEventListener('dragover', event => event.stopPropagation());
window.addEventListener('drop', event => event.stopPropagation());
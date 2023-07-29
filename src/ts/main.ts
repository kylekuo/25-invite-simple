import '../scss/style.scss';

import * as LoadEvents from './LoadEvents';

let html: Element | null;

LoadEvents.ready().then(() => {
	html = document.querySelector('html');
	html?.classList.add('ready');
});

LoadEvents.loaded().then(() => {
	html?.classList.add('loaded');
});
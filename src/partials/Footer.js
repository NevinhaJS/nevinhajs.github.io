'use strict';

import {isServerSide} from 'metal';
import Clipboard from 'clipboard'
import Component from 'metal-component';
import Soy from 'metal-soy';

import templates from './Footer.soy.js';

class Footer extends Component {
	attached() {
		if (isServerSide()) {
			return;
		}

		if(document.querySelector('.copy-clipboard')){
			new Clipboard('.copy-clipboard');
		}
	}

	rendered() {
		this.year = new Date().getFullYear();
	}

};

Soy.register(Footer, templates);

export default Footer;

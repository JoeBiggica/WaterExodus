import React, { Component } from 'react';
import Facebook from '../assets/svg/facebook.svg';
import Instagram from '../assets/svg/instagram.svg';
import Twitter from '../assets/svg/twitter.svg';
import Behance from '../assets/svg/behance.svg';
import Etsy from '../assets/svg/etsy.svg';

import styles from './Footer.scss';

export default class Footer extends Component {

	render() {
		const year = (new Date()).getFullYear();
		const copyright = '© '+year+" The Water's Fine INC.  |  All Rights Reserved";
		return(
			<div className={styles('container')}>
				<span className={styles('copyright')}>{copyright}</span>
				<div className={styles('social-contaner')}>
					<a href='#'>
					</a>
				</div>
			</div>
		)
	}
}
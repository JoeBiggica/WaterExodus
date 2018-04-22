import React, { Component } from 'react';

import TextCard from '../../modules/text-card';
import TextBanner from '../../modules/text-banner';

import styles from './Home.scss';


export default class Home extends Component {

	render() {
		const text_banner_props = {
			background: 'green',
			text: "Jump on in, I promise the water's fine",
			centered: true,
			button: {
				path: "https://www.youtube.com/channel/UCvowDqsgaTtE7IE7NHa_JIQ",
				text: 'Jump On In'
			}
		}

		return(
			<div className={styles('container')}>
				<div className={styles('banner-container')}>
					<div className={styles('banner')}>
						<div className={styles('inner')}>
							<span className={styles('banner-text')}>I Promise</span>
							<span className={styles('banner-text')}>The Water's Fine</span>
						</div>
					</div>
				</div>
				<TextBanner {...text_banner_props} />
				<TextBanner {...text_banner_props} />
				<TextBanner {...text_banner_props} />
				<TextBanner {...text_banner_props} />
				<TextBanner {...text_banner_props} />
				<TextBanner {...text_banner_props} />
				<TextBanner {...text_banner_props} />
				<TextBanner {...text_banner_props} />
				<TextBanner {...text_banner_props} />
				<TextBanner {...text_banner_props} />
				<TextBanner {...text_banner_props} />
				<TextBanner {...text_banner_props} />
				<TextBanner {...text_banner_props} />
				<TextBanner {...text_banner_props} />
				<TextBanner {...text_banner_props} />
				<TextBanner {...text_banner_props} />
				<TextBanner {...text_banner_props} />
				<TextBanner {...text_banner_props} />
			</div>
		)
	}
}